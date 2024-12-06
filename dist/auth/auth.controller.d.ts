import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from 'src/user/dto/login-user.dto';
import { RefreshTokenDto } from 'src/user/dto/refresh-token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    refreshTokens(dto: RefreshTokenDto): Promise<{
        accessToken: string;
    }>;
}
