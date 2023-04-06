import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brands } from './models/brand.model';

@Module({
  imports: [SequelizeModule.forFeature([Brands])],
  controllers: [BrandsController],
  providers: [BrandsService]
})
export class BrandsModule {}
