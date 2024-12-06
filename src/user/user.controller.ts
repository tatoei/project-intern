import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  NotFoundException,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/auth/get-user.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // get all user
  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getAllUsers(@GetUser() user: User) {
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
    return this.userService.getAllUsers();
  }

  // get token
  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  me(@GetUser() user: any) {
    return user;
  }

  // create user
  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  createUser(@Body() createUser: CreateUserDto, @GetUser() user: User) {
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

    console.log('usercretes', user); // แสดงข้อมูลของผู้ใช้ที่ได้รับการยืนยันแล้ว
    return this.userService.createUser(createUser);
  }

  // get id
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  getUserId(@Param('id') id: string, @GetUser() user: User) {
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
    console.log('getId :', id);
    return this.userService.getUserById(id); // ส่ง id ไปยัง service
  }

  // put id
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async putUserId(
    @Param('id') id: string,
    @Body() dto: CreateUserDto,
    @GetUser() user: User,
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
    console.log('Updating user with id:', id);
    return await this.userService.putUserById(id, dto);
  }

  // delete hard
  @Delete('hard:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteUserHard(@Param('id') id: string, @GetUser() user: User) {
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
    console.log('Delete user with id:', id);
    return await this.userService.deleteUserHardById(id);
  }

  // delete soft
  @Delete('soft:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteUserSoft(@Param('id') id: string, @GetUser() user: User) {
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
    return await this.userService.deleteUserSoftById(id);
  }
}
