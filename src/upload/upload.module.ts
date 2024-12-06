import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // กำหนดตำแหน่งการเก็บไฟล์
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [UploadService], // สำหรับแชร์ service
})
export class UploadModule {}
