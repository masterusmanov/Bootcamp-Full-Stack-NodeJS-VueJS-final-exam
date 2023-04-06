import { Injectable } from '@nestjs/common';
import { CreateStoreLocationDto } from './dto/create-store_location.dto';
import { UpdateStoreLocationDto } from './dto/update-store_location.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StoreLocation } from './models/store_location.model';

@Injectable()
export class StoreLocationService {
  constructor(@InjectModel(StoreLocation) private storeLocationRepo: typeof StoreLocation){}

  async create(createStoreLocationDto: CreateStoreLocationDto) {
    return await this.storeLocationRepo.create(createStoreLocationDto);
  }

  async findAll() {
    return await this.storeLocationRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.storeLocationRepo.findOne({where: {id}});
  }

  async update(id: number, updateStoreLocationDto: UpdateStoreLocationDto) {
    return await this.storeLocationRepo.update(updateStoreLocationDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.storeLocationRepo.destroy({where: {id}});
  }
}
