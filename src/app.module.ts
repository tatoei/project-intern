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
    MongooseModule.forRoot('mongodb://atlas-sql-672c7ecd48246948735edb7a-bb5mg.a.query.mongodb.net/test?ssl=true&authSource=admin'),
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

// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserModule } from './user/user.module';
// import { AuthModule } from './auth/auth.module';
// import { JwtModule } from '@nestjs/jwt';
// import { UploadModule } from './upload/upload.module';
// import { FactoryModule } from './factory/factory.module';
// import { DriverModule } from './driver/driver.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot(), // For environment variable management
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         global: true,
//         secret: configService.get<string>('secret'),
//         signOptions: { expiresIn: '60m' }
//       })
//     }),
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         uri: configService.get<string>('mongodb://atlas-sql-672c7ecd48246948735edb7a-bb5mg.a.query.mongodb.net/test?ssl=true&authSource=admin')
//       })
//     }),
//     UserModule,
//     AuthModule,
//     UploadModule,
//     FactoryModule,
//     DriverModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}