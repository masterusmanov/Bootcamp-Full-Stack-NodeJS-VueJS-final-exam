import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './models/review.model';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Review) private reviewRepo: typeof Review){}

  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewRepo.create(createReviewDto);
  }

  async findAll() {
    return await this.reviewRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.reviewRepo.findOne({where: {id}});
  }

  async remove(id: number) {
    return await this.reviewRepo.destroy({where: {id}});
  }
}
