import { Injectable } from '@nestjs/common';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryMethod } from './models/delivery_method.model';

@Injectable()
export class DeliveryMethodService {
  constructor(@InjectModel(DeliveryMethod) private deliveryMethodRepo: typeof DeliveryMethod){}

  async create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return await this.deliveryMethodRepo.create(createDeliveryMethodDto);
  }

  async findAll() {
    return await this.deliveryMethodRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.deliveryMethodRepo.findOne({where: {id}});
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return await this.deliveryMethodRepo.update(updateDeliveryMethodDto, {
      where: {id},
      returning: true
    });
  };

  async remove(id: number) {
    return await this.deliveryMethodRepo.destroy({where: {id}});
  }
}
