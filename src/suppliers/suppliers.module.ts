import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Supplier } from './models/supplier.model';
import { DeliveryMethod } from '../delivery_method/models/delivery_method.model';

@Module({
  imports: [SequelizeModule.forFeature([Supplier, DeliveryMethod])],
  controllers: [SuppliersController],
  providers: [SuppliersService]
})
export class SuppliersModule {}
