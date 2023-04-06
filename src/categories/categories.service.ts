import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from './models/category.model';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Categories) private categoriesRepo: typeof Categories){}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoriesRepo.create(createCategoryDto);
  }

  async findAll() {
    return await this.categoriesRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.categoriesRepo.findOne({where: {id}});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriesRepo.update(updateCategoryDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.categoriesRepo.destroy({where: {id}});

  }
}
