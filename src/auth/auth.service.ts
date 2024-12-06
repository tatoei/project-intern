import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/user/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from 'src/user/dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  // register
  async register(dto: CreateUserDto) {
    const {
      email,
      password = '12345678',
      firstname,
      lastname,
      role = 'user',
      username,
      imageUrl,
      phone,
    } = dto;

    // ตรวจสอบว่าอีเมลซ้ำหรือไม่
    const emailInUse = await this.UserModel.findOne({ email });
    if (emailInUse) {
      throw new BadRequestException('Email already in use');
    }

    // ตรวจสอบว่า username ซ้ำหรือไม่
    const usernameInUse = await this.UserModel.findOne({ username });
    if (usernameInUse) {
      throw new BadRequestException('Username already in use');
    }

    console.log('Create Success!', dto);

    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);

    // สร้างข้อมูลผู้ใช้ใหม่ในฐานข้อมูล
    const newUser = new this.UserModel({
      email,
      username,
      password: hashedPassword,
      firstname,
      lastname,
      role,
      imageUrl,
      phone,
      isNewUser: true,
    });

    await newUser.save();

    return {
      message: 'User successfully created',
      user: {
        email: newUser.email,
        username: newUser.username,
        role: newUser.role,
      },
    };
  }

  // login
  async login(dto: LoginDto) {
    const { email, password } = dto;
    // find if user exit by email
    const user = await this.UserModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Wrong credentials Email');
    }
    // compare enter password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Wrong credentials Password');
    }
    console.log('Login Success!', dto);
    // Generate Jwt Token
    return this.generateUserTokens(user);
  }

  //accessToken,refreshToken
  async generateUserTokens(user: User) {
    const { isNewUser } = user;
    const payload = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
    console.log('Access Token :', accessToken);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    console.log('Refresh Token :', refreshToken);

    return {
      accessToken,
      refreshToken,
      isNewUser,
    };
  }

  // นำ refreshTokens ไปขอ accessTokens
  async refreshTokens(dto: RefreshTokenDto): Promise<{ accessToken: string }> {
    // Extract the token from the DTO
    const { refreshToken } = dto;

    const payload = this.jwtService.verify(refreshToken);

    console.log('payload-refreshTokens', payload);

    const user = await this.UserModel.findOne({
      email: payload.email,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Generate a new access token with the full payload
    const newAccessToken = this.jwtService.sign(
      {
        email: payload.email,
        firstname: payload.firstname,
        lastname: payload.lastname,
        role: payload.role,
      },
      { expiresIn: '1h' },
    );
    console.log('newAccessToken :', newAccessToken);
    return {
      accessToken: newAccessToken,
    };
  }
}
