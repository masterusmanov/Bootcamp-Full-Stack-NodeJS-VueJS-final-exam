import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpCode, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/loginAdmin.dto';
import { LogoutAdminDto } from './dto/logoutAdmin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './models/admin.model';
import { Response } from 'express';
import { JwtAuthGuard } from '../guards/jwt.auth.guard';
import { UserSelfGuard } from '../guards/user-self.guard';
import { ActivateAdminDto } from './dto/activatedAdmin.dto';


@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'register Admin'})
  @ApiResponse({ status: 201, type: Admin})
  @Post('signup')
  registration(@Body() createCustomerDto: CreateAdminDto,
  @Res({ passthrough: true }) res: Response) {
    return this.adminService.registration(createCustomerDto);
  }

  @ApiOperation({ summary: 'login User'})
  @ApiResponse({ status: 200, type: Admin})
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  singin(@Body() loginUserDto: LoginAdminDto,
  @Res({ passthrough: true }) res: Response) {
    return this.adminService.sigin(loginUserDto);
  }

  @ApiOperation({summary: 'logout User'})
  @ApiResponse({status: 2000, type: Admin})
  @HttpCode(HttpStatus.OK)
  @Post(':id/signout')
  singout(@Param('id') id: string, @Body() logoutUserDto: LogoutAdminDto,
  @Res({ passthrough: true }) res: Response) {
    return this.adminService.singout(+id, logoutUserDto);
  }

  @ApiOperation({summary: 'Activate Creator'})
  @Post('activate')
  activateUser(@Body() activateUserDto: ActivateAdminDto){
    return this.adminService.creatorUser(activateUserDto)
  }

  @ApiOperation({summary: 'Deactivate Creator'})
  @Post('deactivate')
  deactivateUser(@Body() activateUserDto: ActivateAdminDto){
    return this.adminService.decreatoradmin(activateUserDto)
  }

  @ApiOperation({summary: 'Get all admin'})
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({summary: 'Get one admin'})
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({summary: 'Update admin'})
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({summary: 'Delete admin'})
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
