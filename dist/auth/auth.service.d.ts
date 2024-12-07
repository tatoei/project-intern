import { Model } from 'mongoose';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { TUser } from '@/user/schema/user.schema';
import { LoginUserDto } from '@/user//dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from '@/user/dto/refresh-token.dto';
export declare class AuthService {
    private UserModel;
    private jwtService;
    constructor(UserModel: Model<TUser>, jwtService: JwtService);
    register(dto: CreateUserDto): Promise<{
        message: string;
        user: {
            email: string;
            username: string;
            role: string;
        };
    }>;
    login(dto: LoginUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
        isNewUser: boolean;
    }>;
    generateUserTokens(user: TUser): Promise<{
        accessToken: string;
        refreshToken: string;
        isNewUser: boolean;
    }>;
    refreshTokens(dto: RefreshTokenDto): Promise<{
        accessToken: string;
    }>;
}
