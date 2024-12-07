import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { Factory } from './schema/factory.schema';

@Injectable()
export class FactoryService {
  constructor(
    @InjectModel(Factory.name) private factoryModel: Model<Factory>,
  ) {}

  // สร้างโรงงานใหม่
  async createFactory(dto: CreateFactoryDto): Promise<Factory> {
    const {
      factoryCode,
      factoryName,
      phone,
      email,
      location,
      coins,
      images,
      documents,
      coinHistory,
      packages,
    } = dto;
    console.log('สร้างโรงงาน');

    // ตรวจสอบว่า factoryCode มีการใช้งานอยู่ในฐานข้อมูลแล้วหรือไม่
    const existingFactory = await this.factoryModel.findOne({ factoryCode });
    if (existingFactory) {
      throw new BadRequestException('factoryCode already in use');
    }

    try {
      // สร้างโรงงานใหม่
      return await this.factoryModel.create({
        factoryCode,
        factoryName,
        phone,
        email,
        location,
        coins,
        images,
        documents,
        coinHistory,
        packages,
        isActive: true,
      });
    } catch (error: any) {
      console.error('Error:', error);

      if (error.code === 11000) {
        throw new BadRequestException(
          'Factory with this factoryCode already exists',
        );
      }
      throw error;
    }
  }

  // getfindall
  async getFindAllFactory(): Promise<Factory[]> {
    return this.factoryModel.find({ isActive: true });
  }

  // getfindone
  async getFindOneFactory(_id: string): Promise<Factory> {
    return this.factoryModel.findOne({ _id }); // ค้นหาจากฐานข้อมูล
  }

  // updatefactory
  async putUpdateFactory(id: string, dto: CreateFactoryDto) {
    const factory = await this.factoryModel.findById(id);
    if (!factory) {
      throw new NotFoundException(`Factory with id ${id} not found`);
    }
    return this.factoryModel.findByIdAndUpdate(
      id,
      { $set: dto },
      { new: true, runValidators: true },
    );
  }

  // deleteSoft
  async deleteSoftById(id: string) {
    const factory = await this.factoryModel.findById(id);
    if (!factory) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    // Update the isDeleted field to true
    factory.isActive = false;
    return await factory.save();
  }
}
