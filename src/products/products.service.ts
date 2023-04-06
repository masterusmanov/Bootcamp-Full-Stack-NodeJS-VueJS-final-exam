import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { FilesService } from '../files/files.service';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productRepo: typeof Product, private readonly fileService: FilesService){}

  async create(createProductDto: CreateProductDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const newProduct = await this.productRepo.create({
      ...createProductDto,
      user_photo: fileName
    });
    return newProduct;
  };

  async findAll() {
    return await this.productRepo.findAll({include: {all: true}});
  };

  async findOne(id: number) {
    return await this.productRepo.findOne({where: {id}});
  };

 async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepo.update(updateProductDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.productRepo.destroy({where: {id}});
  }
}
