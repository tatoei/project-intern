import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from 'src/user/dto/login-user.dto';
import { RefreshTokenDto } from 'src/user/dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Register
  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    console.log('Create');
    return this.authService.register(dto);
  }

  // Login
  @Post('login')
  async login(@Body() dto: LoginDto) {
    console.log('Login');
    return this.authService.login(dto);
  }

  // Refresh
  @Post('refresh')
  async refreshTokens(@Body() dto: RefreshTokenDto) {
    console.log('Refresh');
    return this.authService.refreshTokens(dto);
  }
}
