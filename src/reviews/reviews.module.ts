import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './models/review.model';
import { Product } from '../products/models/product.model';
import { Users } from '../users/models/user.models';

@Module({
  imports: [SequelizeModule.forFeature([Review, Product, Users])],
  controllers: [ReviewsController],
  providers: [ReviewsService]
})
export class ReviewsModule {}
