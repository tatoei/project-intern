import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import refreshJwtConfig from './config/refresh-jwt.config';
import { UserModule } from '@/user/user.module';
import { UserService } from '@/user/user.service';
import { TUser, UserSchema } from '@/user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TUser.name, schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost/nest_test'), 
    PassportModule,
    ConfigModule.forFeature(refreshJwtConfig),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: 3600 },
    }),
    forwardRef(() => UserModule), // Use forwardRef to handle cyclic dependency
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserService],
  exports: [JwtStrategy, AuthService], // Export services you need in other modules
})
export class AuthModule {}
