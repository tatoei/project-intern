"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../user/schema/user.schema");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(UserModel, jwtService) {
        this.UserModel = UserModel;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const { email, password = '12345678', firstname, lastname, role = 'user', username, imageUrl, phone, } = dto;
        const emailInUse = await this.UserModel.findOne({ email });
        if (emailInUse) {
            throw new common_1.BadRequestException('Email already in use');
        }
        const usernameInUse = await this.UserModel.findOne({ username });
        if (usernameInUse) {
            throw new common_1.BadRequestException('Username already in use');
        }
        console.log('Create Success!', dto);
        const hashedPassword = await bcrypt.hash(password, 10);
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
    async login(dto) {
        const { email, password } = dto;
        const user = await this.UserModel.findOne({ email });
        if (!user) {
            throw new common_1.UnauthorizedException('Wrong credentials Email');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException('Wrong credentials Password');
        }
        console.log('Login Success!', dto);
        return this.generateUserTokens(user);
    }
    async generateUserTokens(user) {
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
    async refreshTokens(dto) {
        const { refreshToken } = dto;
        const payload = this.jwtService.verify(refreshToken);
        console.log('payload-refreshTokens', payload);
        const user = await this.UserModel.findOne({
            email: payload.email,
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const newAccessToken = this.jwtService.sign({
            email: payload.email,
            firstname: payload.firstname,
            lastname: payload.lastname,
            role: payload.role,
        }, { expiresIn: '1h' });
        console.log('newAccessToken :', newAccessToken);
        return {
            accessToken: newAccessToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.TUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map