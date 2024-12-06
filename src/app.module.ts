import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';
import { FactoryController } from './factory/factory.controller';
import { FactoryModule } from './factory/factory.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [
    JwtModule.register({ global: true, secret: '123' }),
    MongooseModule.forRoot('mongodb://localhost:27017/my_database'),
    UserModule,
    AuthModule,
    UploadModule,
    FactoryModule,
    DriverModule,
  ],
  controllers: [AppController, FactoryController],
  providers: [AppService, UploadService],
})
export class AppModule {}
