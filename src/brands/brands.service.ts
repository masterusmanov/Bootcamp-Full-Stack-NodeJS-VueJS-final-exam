import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Brands } from './models/brand.model';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brands) private brandsRepo: typeof Brands){}

  async create(createBrandDto: CreateBrandDto) {
    return await this.brandsRepo.create(createBrandDto);
  };

  async findAll() {
    return await this.brandsRepo.findAll({include: {all: true}});
  };

  async findOne(id: number) {
    return await this.brandsRepo.findOne({where: {id}});
  };

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    return await this.brandsRepo.update(updateBrandDto, {
      where: {id},
      returning: true
    });
  };

  async remove(id: number) {
    return await this.brandsRepo.destroy({where: {id}});
  };
};
