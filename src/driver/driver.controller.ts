import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateDriverDto } from './dto/create-driver.dto';
import { TUser } from '@/user/schema/user.schema';
import { GetUser } from '@/auth/get-user.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Driver } from './schema/driver.schema';

@ApiBearerAuth()
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
  // create driver
  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  createFactory(
    @Body() dto: CreateDriverDto,
    @GetUser() user: TUser, // Change driver to user
  ) {
    // ตรวจสอบว่า user ที่ยืนยันตัวตนแล้วมีข้อมูลหรือไม่
    if (!user) {
      throw new NotFoundException('Driver not found or token is invalid');
    }

    // ตรวจสอบ role ของ user ว่าเป็น 'admin' หรือไม่
    if (user.role !== 'admin') {
      throw new NotFoundException(
        'You do not have permission to access this resource',
      );
    }

    console.log('role', user.role); // แสดง role ของ user ที่ยืนยันตัวตนแล้ว

    // เรียกใช้ service ในการเพิ่ม driver
    return this.driverService.createDriver(dto);
  }

  // findAll
  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  async getFindAllDriver(@GetUser() user: TUser): Promise<Driver[]> {
    if (!user) {
      // หากไม่พบข้อมูลผู้ใช้หรือไม่สามารถยืนยันตัวตนได้
      throw new NotFoundException('User not found or token is invalid');
    }

    // ตรวจสอบ role ของ user
    if (user.role !== 'admin') {
      throw new NotFoundException(
        'You do not have permission to access this resource',
      );
    }
    return this.driverService.getFindAllDriver();
  }

  // findone
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getFindOneDriver(
    @Query('_id') _id: string,
    @GetUser() user: TUser,
  ): Promise<Driver> {
    if (!user) {
      // หากไม่พบข้อมูลผู้ใช้หรือไม่สามารถยืนยันตัวตนได้
      throw new NotFoundException('User not found or token is invalid');
    }

    // ตรวจสอบ role ของ user
    if (user.role !== 'admin') {
      throw new NotFoundException(
        'You do not have permission to access this resource',
      );
    }
    console.log('Received ID:', _id); // ตรวจสอบค่าที่ได้รับ
    return this.driverService.getFindOneDriver(_id);
  }

  // updatedriver
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async putUpdateDriver(
    @Param('id') id: string,
    @Body() dto: CreateDriverDto,
    @GetUser() user: TUser,
  ) {
    if (!user) {
      // หากไม่พบข้อมูลผู้ใช้หรือไม่สามารถยืนยันตัวตนได้
      throw new NotFoundException('User not found or token is invalid');
    }

    // ตรวจสอบ role ของ user
    if (user.role !== 'admin') {
      throw new NotFoundException(
        'You do not have permission to access this resource',
      );
    }
    return await this.driverService.putUpdateDriver(id, dto);
  }

  // delete soft
  @Delete('soft:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteSoft(@Param('id') id: string, @GetUser() user: TUser) {
    if (!user) {
      // หากไม่พบข้อมูลผู้ใช้หรือไม่สามารถยืนยันตัวตนได้
      throw new NotFoundException('User not found or token is invalid');
    }
    // ตรวจสอบ role ของ user
    if (user.role !== 'admin') {
      throw new NotFoundException(
        'You do not have permission to access this resource',
      );
    }
    console.log('Soft delete user with id:', id);
    return await this.driverService.deleteSoftById(id);
  }
}
