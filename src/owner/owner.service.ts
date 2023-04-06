import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Owner } from './models/owner.model';

@Injectable()
export class OwnerService {
  constructor(@InjectModel(Owner) private ownerRepo: typeof Owner) {}

  async create(createOwnerDto: CreateOwnerDto) {
    return await this.ownerRepo.create(createOwnerDto);
  }

  async findAll() {
    return await this.ownerRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.ownerRepo.findOne({where: {id}});
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return await this.ownerRepo.update(updateOwnerDto,{
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.ownerRepo.destroy({where: {id}});

  }
}
