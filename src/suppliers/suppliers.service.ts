import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Supplier } from './models/supplier.model';

@Injectable()
export class SuppliersService {
  constructor(@InjectModel(Supplier) private supplierRepo: typeof Supplier) {}

  async create(createSupplierDto: CreateSupplierDto) {
    return await this.supplierRepo.create(createSupplierDto);
  }

  async findAll() {
    return await this.supplierRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.supplierRepo.findOne({where: {id}});
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return await this.supplierRepo.update(updateSupplierDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.supplierRepo.destroy({where: {id}});
  }
}
