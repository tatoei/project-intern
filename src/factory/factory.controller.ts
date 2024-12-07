import {
  Controller,
  Post,
  UseGuards,
  Body,
  NotFoundException,
  Get,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { TUser } from '@/user/schema/user.schema';
import { GetUser } from '@/auth/get-user.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { FactoryService } from './factory.service';
import { Factory } from './schema/factory.schema';

@ApiBearerAuth()
@Controller('factory')
export class FactoryController {
  constructor(private readonly factoryService: FactoryService) {}

  // create factory
  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  createFactory(
    @Body() dto: CreateFactoryDto,
    @GetUser() user: TUser, // Change factory to user
  ) {
    // ตรวจสอบว่า user ที่ยืนยันตัวตนแล้วมีข้อมูลหรือไม่
    if (!user) {
      throw new NotFoundException('Factory not found or token is invalid');
    }

    // ตรวจสอบ role ของ user ว่าเป็น 'admin' หรือไม่
    if (user.role !== 'admin') {
      throw new NotFoundException(
        'You do not have permission to access this resource',
      );
    }

    console.log('role', user.role);
    // เรียกใช้ service ในการสร้างโรงงาน
    return this.factoryService.createFactory(dto);
  }

  // getfindall
  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  async getFindAllFactory(@GetUser() user: TUser): Promise<Factory[]> {
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
    return this.factoryService.getFindAllFactory();
  }

  // getfindone
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getFindOneFactory(
    @Query('_id') _id: string,
    @GetUser() user: TUser,
  ): Promise<Factory> {
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
    return this.factoryService.getFindOneFactory(_id);
  }

  // updatefactory
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async putUpdateFactory(
    @Param('id') id: string,
    @Body() dto: CreateFactoryDto,
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
    return await this.factoryService.putUpdateFactory(id, dto);
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
    return await this.factoryService.deleteSoftById(id);
  }
}
