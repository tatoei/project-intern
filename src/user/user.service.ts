import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TUser } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(@InjectModel(TUser.name) private userModel: Model<TUser>,private jwtService: JwtService ) {}

  // createuser
  async createUser(dto: CreateUserDto): Promise<TUser> {
    const {
      email,
      password,
      firstname,
      role,
      lastname,
      username,
      factory,
      phone,
      imageUrl,
    } = dto;

    // Check email uniqueness
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      return await this.userModel.create({
        email,
        password: hashedPassword,
        firstname,
        role,
        lastname,
        username,
        factory,
        phone,
        imageUrl,
        isActive: true,
      });
    } catch (error) {
      console.log('error', error);

      if (error.code === 11000) {
        throw new BadRequestException('Email already exists');
      }
      throw error;
    }
  }

  // getalluser
  async getAllUsers(): Promise<TUser[]> {
    return this.userModel.find({ isActive: true });
  }

  // getuserid
  async getUserById(id: string): Promise<TUser> {
    return this.userModel.findById(id).exec();
  }

  // putuserid

  async putUserById(id: string, dto: Partial<CreateUserDto>) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    // ตรวจสอบว่ามีการส่ง password มาหรือไม่
    if (dto.password) {
      // แฮ็ชรหัสผ่านก่อนอัปเดต
      const salt = await bcrypt.genSalt();
      dto.password = await bcrypt.hash(dto.password, salt);
    }

    // ใช้ findByIdAndUpdate พร้อมอัปเดตเฉพาะฟิลด์ที่ส่งมา
    return this.userModel.findByIdAndUpdate(
      id,
      { $set: dto },
      { new: true, runValidators: true },
    );
  }

  // delete user hard
  async deleteUserHardById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.userModel.findByIdAndDelete(id);
  }

  // delete user soft
  async deleteUserSoftById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    // Update the isDeleted field to true
    user.isActive = false;
    return await user.save();
  }
}
