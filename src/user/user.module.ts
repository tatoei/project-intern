import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { TUser, UserSchema } from '@/user/schema/user.schema';
import { UserService } from './user.service';
import { AuthModule } from '@/auth/auth.module';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { AuthController } from '@/auth/auth.controller';
import { JwtStrategy } from '@/auth/jwt.strategy';
import { AuthService } from '@/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TUser.name, schema: UserSchema }]),
    MongooseModule.forRoot('mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/'), 
    AuthModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: 3600 },
    }),
  ],
  providers: [UserService,AuthService, JwtStrategy,],
  controllers: [UserController,AuthController],
  exports: [UserService,MongooseModule], // Only add controllers here
})
export class UserModule {}

