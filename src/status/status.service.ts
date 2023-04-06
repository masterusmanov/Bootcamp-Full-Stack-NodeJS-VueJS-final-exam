import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './models/status.model';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepo: typeof Status){}

  async create(createStatusDto: CreateStatusDto) {
    return await this.statusRepo.create(createStatusDto);
  }

  async findAll() {
    return await this.statusRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.statusRepo.findOne({where: {id}});
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  async remove(id: number) {
    return await this.statusRepo.destroy({where: {id}});
  }
}
