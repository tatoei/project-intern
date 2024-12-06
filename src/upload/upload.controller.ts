import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';
import { diskStorage } from 'multer';
import * as path from 'path';

@ApiBearerAuth()
@Controller('upload')
@ApiBearerAuth()
export class UploadController {
  @Post()
  @ApiConsumes('multipart/form-data') // แจ้งว่าใช้ multipart/form-data
  @ApiOperation({ summary: 'Upload a file' }) // เพิ่มคำอธิบายเมธอด
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary', // ระบุว่าเป็นไฟล์
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const timestamp = Date.now();
          const fileExtension = path.extname(file.originalname);
          const baseName = path.basename(file.originalname, fileExtension);
          const newFileName = `${baseName}-${timestamp}${fileExtension}`;
          callback(null, newFileName);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png'];
        if (allowedMimeTypes.includes(file.mimetype)) {
          callback(null, true);
        } else {
          callback(new BadRequestException('Invalid file type'), false);
        }
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is undefined');
    }
    return {
      originalname: file.originalname,
      filename: file.filename,
      path: `/uploads/${file.filename}`,
    };
  }
}
