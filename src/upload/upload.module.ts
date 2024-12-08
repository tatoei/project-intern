import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // กำหนดตำแหน่งการเก็บไฟล์
    }),
    MongooseModule.forRoot('mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/'),
  ],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [UploadService], // สำหรับแชร์ service
})
export class UploadModule {}
