import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver } from './schema/driver.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DriverService {
  @InjectModel(Driver.name) private DriverModule: Model<Driver>;
  // createdriver
  async createDriver(dto: CreateDriverDto): Promise<Driver> {
    const {
      driverCode,
      firstName,
      lastName,
      username,
      password,
      phone,
      email,
      company,
      driverType,
      idCardNumber,
      licenseNumber,
      address,
      profileImage,
    } = dto;
    console.log('Driver Success');

    // ตรวจสอบว่า driver มีการใช้งานอยู่ในฐานข้อมูลแล้วหรือไม่
    const existingDriver = await this.DriverModule.findOne({ driverCode });
    if (existingDriver) {
      throw new BadRequestException('driverCode already in use');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      // createdriver new
      return await this.DriverModule.create({
        driverCode,
        firstName,
        lastName,
        username,
        password: hashedPassword,
        phone,
        email,
        company,
        driverType,
        idCardNumber,
        licenseNumber,
        address,
        profileImage,
        isActive: true,
      });
    } catch (error) {
      console.error('Error:', error);

      if (error.code === 11000) {
        throw new BadRequestException(
          'Driver with this driverCode already exists',
        );
      }
      throw error;
    }
  }

  // findall
  async getFindAllDriver(): Promise<Driver[]> {
    return this.DriverModule.find({ isActive: true });
  }

  // findone id
  async getFindOneDriver(_id: string): Promise<Driver> {
    return this.DriverModule.findOne({ _id }); // ค้นหาจากฐานข้อมูล
  }

  // updatedriver
  async putUpdateDriver(id: string, dto: CreateDriverDto) {
    const factory = await this.DriverModule.findById(id);
    if (!factory) {
      throw new NotFoundException(`Factory with id ${id} not found`);
    }
    return this.DriverModule.findByIdAndUpdate(
      id,
      { $set: dto },
      { new: true, runValidators: true },
    );
  }

  // deleteSoft
  async deleteSoftById(id: string) {
    const factory = await this.DriverModule.findById(id);
    if (!factory) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    // Update the isDeleted field to true
    factory.isActive = false;
    return await factory.save();
  }
}
