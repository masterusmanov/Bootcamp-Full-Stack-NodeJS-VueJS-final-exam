import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreLocationService } from './store_location.service';
import { CreateStoreLocationDto } from './dto/create-store_location.dto';
import { UpdateStoreLocationDto } from './dto/update-store_location.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Store location')
@Controller('store-location')
export class StoreLocationController {
  constructor(private readonly storeLocationService: StoreLocationService) {}

  @ApiOperation({ summary: 'Add store location'})
  @Post()
  create(@Body() createStoreLocationDto: CreateStoreLocationDto) {
    return this.storeLocationService.create(createStoreLocationDto);
  }

  @ApiOperation({ summary: 'Get all store location'})
  @Get()
  findAll() {
    return this.storeLocationService.findAll();
  }

  @ApiOperation({ summary: 'Get one store location'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeLocationService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update store location'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreLocationDto: UpdateStoreLocationDto) {
    return this.storeLocationService.update(+id, updateStoreLocationDto);
  }

  @ApiOperation({ summary: 'Delete store location'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeLocationService.remove(+id);
  }
}
