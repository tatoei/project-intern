import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/schema/user.schema';
import { LoginDto } from 'src/user/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from 'src/user/dto/refresh-token.dto';
export declare class AuthService {
    private UserModel;
    private jwtService;
    constructor(UserModel: Model<User>, jwtService: JwtService);
    register(dto: CreateUserDto): Promise<{
        message: string;
        user: {
            email: string;
            username: string;
            role: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        isNewUser: boolean;
    }>;
    generateUserTokens(user: User): Promise<{
        accessToken: string;
        refreshToken: string;
        isNewUser: boolean;
    }>;
    refreshTokens(dto: RefreshTokenDto): Promise<{
        accessToken: string;
    }>;
}
