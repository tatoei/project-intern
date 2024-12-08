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
import { MongoClient } from 'mongodb';

// MongoDB connection setup
const uri = 'mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/'; // Replace with your MongoDB URI
const client = new MongoClient(uri);
const databaseName = 'uploadsDB';
const collectionName = 'tuser';

@ApiBearerAuth()
@Controller('upload')
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
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is undefined');
    }

    try {
      // Convert file buffer to Base64
      const base64String = file.buffer.toString('base64');

      // Prepare image data to store in MongoDB
      const imageData = {
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        base64: base64String,
        uploadDate: new Date(),
      };

      // Store in MongoDB
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