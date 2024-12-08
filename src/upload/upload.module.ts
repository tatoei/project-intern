import { forwardRef, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from '@/auth/auth.service';
import { AuthController } from '@/auth/auth.controller';
import { JwtStrategy } from '@/auth/jwt.strategy';
import { AuthModule } from '@/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [
    forwardRef(() => UserModule), 
    MulterModule.register({
      dest: './uploads', // กำหนดตำแหน่งการเก็บไฟล์
    }),
    MongooseModule.forRoot('mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/'),
    AuthModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: 3600 },
    }),
  ],
  providers: [UploadService,AuthService,JwtStrategy],
  controllers: [UploadController,AuthController],
  exports: [UploadService], // สำหรับแชร์ service
})
export class UploadModule {}
