import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  saveFile(file: Express.Multer.File) {
    // คุณสามารถเพิ่ม logic การจัดการไฟล์ที่นี่ เช่น บันทึกข้อมูลไฟล์ใน database
    console.log('File saved:', file.originalname);
    return {
      filename: file.filename,
      originalname: file.originalname,
      path: file.path,
    };
  }
}
