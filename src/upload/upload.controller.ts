import { GetUser } from '@/auth/get-user.decorator';
import { TUser } from '@/user/schema/user.schema';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';
import { MongoClient } from 'mongodb';
import * as multer from 'multer';

// MongoDB connection setup
const uri = 'mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/'; // Replace with your MongoDB URI
const client = new MongoClient(uri);
const databaseName = 'uploadsDB';
const collectionName = 'images';

@ApiBearerAuth()
@Controller('upload')
@UseGuards(AuthGuard('jwt'))
export class UploadController {
  constructor() {
    client.connect().catch((err) => console.error('MongoDB connection error:', err));
  }

  @Post()
  @ApiConsumes('multipart/form-data') // Specify multipart/form-data
  @ApiOperation({ summary: 'Upload a file and store as Base64 in MongoDB' }) // Method description
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary', // Specify file input
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(), // Ensure file is loaded into memory
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB file size limit
      },
      fileFilter: (req, file, callback) => {
        // Your existing file type validation
        const allowedMimeTypes = ['image/jpeg', 'image/png'];
        if (allowedMimeTypes.includes(file.mimetype)) {
          callback(null, true);
        } else {
          callback(new BadRequestException('Invalid file type'), false);
        }
      },
    })
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File, @GetUser() user: TUser) {
    // Log the received file for debugging
    console.log('Received file details:', {
      originalname: file?.originalname,
      mimetype: file?.mimetype,
      size: file?.size,
      bufferExists: !!file?.buffer,
      bufferLength: file?.buffer?.length
    });

    // ตรวจสอบว่ามีไฟล์ที่อัปโหลดมาหรือไม่
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    // ตรวจสอบว่า buffer ของไฟล์มีค่าหรือไม่
    if (!file.buffer) {
      throw new BadRequestException('File buffer is undefined');
    }
    if (!user) {
      throw new BadRequestException('User not authenticated');
    }

    try {
      // แปลง buffer ของไฟล์เป็น Base64
      const base64String = file.buffer.toString('base64');

      // สร้างข้อมูลไฟล์เพื่อเก็บใน MongoDB
      const imageData = {
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        base64: base64String,
        uploadDate: new Date(),
        uploadBy: user.firstname
      };

      // เก็บข้อมูลใน MongoDB
      const db = client.db(databaseName);
      const collection = db.collection(collectionName);
      const result = await collection.insertOne(imageData);

      return {
        message: 'File uploaded and stored as Base64 in MongoDB',
        fileId: result.insertedId,
      };
    } catch (error) {
      console.error('Error saving file to MongoDB:', error);
      throw new BadRequestException('Failed to save file');
    }
  }
}
