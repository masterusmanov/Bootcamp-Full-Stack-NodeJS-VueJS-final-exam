import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { Users } from '../users/models/user.models';
import { Product } from '../products/models/product.model';
import { Status } from '../status/models/status.model';

@Module({
  imports: [SequelizeModule.forFeature([Order, Users, Product, Status])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
