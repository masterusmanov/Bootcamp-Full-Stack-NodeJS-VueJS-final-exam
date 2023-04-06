import { Module } from '@nestjs/common';
import { StoreLocationService } from './store_location.service';
import { StoreLocationController } from './store_location.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreLocation } from './models/store_location.model';
import { Owner } from '../owner/models/owner.model';

@Module({
  imports: [SequelizeModule.forFeature([StoreLocation, Owner])],
  controllers: [StoreLocationController],
  providers: [StoreLocationService]
})
export class StoreLocationModule {}
