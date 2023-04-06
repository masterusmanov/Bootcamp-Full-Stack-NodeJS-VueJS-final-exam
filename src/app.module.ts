import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SequelizeModule } from '@nestjs/sequelize';
import { resolve } from 'path';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PaymentsModule } from './payments/payments.module';
import { StoreLocationModule } from './store_location/store_location.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { ShoppingCartsModule } from './shopping_carts/shopping_carts.module';
import { CartItemsModule } from './cart_items/cart_items.module';
import { BrandsModule } from './brands/brands.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { AdminModule } from './admin/admin.module';
import { OwnerModule } from './owner/owner.module';
import { StatusModule } from './status/status.module';
import { MailModule } from './mail/mail.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MailService } from './mail/mail.service';
import { Brands } from './brands/models/brand.model';
import { Categories } from './categories/models/category.model';
import { CartItems } from './cart_items/models/cart_item.model';
import { ShoppingCarts } from './shopping_carts/models/shopping_cart.model';
import { StoreLocation } from './store_location/models/store_location.model';
import { Product } from './products/models/product.model';
import { Review } from './reviews/models/review.model';
import { Supplier } from './suppliers/models/supplier.model';
import { Order } from './orders/models/order.model';
import { Users } from './users/models/user.models';
import { PaymentMethod } from './payment_method/models/payment_method.model';
import { Payments } from './payments/models/payment.model';
import { DeliveryMethod } from './delivery_method/models/delivery_method.model';
import { Admin } from './admin/models/admin.model';
import { Status } from './status/models/status.model';
import { Owner } from './owner/models/owner.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Brands, Categories, CartItems, ShoppingCarts, StoreLocation, Product, Review, Supplier, Order, Users, PaymentMethod, Payments, DeliveryMethod, Admin, Status, Owner ],
      autoLoadModels: true,
      logging: false,
    }),
    UsersModule,
    CategoriesModule,
    OrdersModule,
    ProductsModule,
    ReviewsModule,
    PaymentsModule,
    ShoppingCartsModule,
    CartItemsModule,
    BrandsModule,
    SuppliersModule,
    DeliveryMethodModule,
    PaymentMethodModule,
    StoreLocationModule,
    AdminModule,
    OwnerModule,
    StatusModule,
    MailModule,
    JwtModule
  ],
  providers: [MailService],
  exports: [JwtModule]
})
export class AppModule {}
