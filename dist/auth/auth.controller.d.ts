import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user//dto/login-user.dto';
import { RefreshTokenDto } from '../user/dto/refresh-token.dto';
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
    login(dto: LoginUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
        isNewUser: boolean;
    }>;
    refreshTokens(dto: RefreshTokenDto): Promise<{
        accessToken: string;
    }>;
}
