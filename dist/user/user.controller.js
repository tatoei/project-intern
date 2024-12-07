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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_schema_1 = require("./schema/user.schema");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers(user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        return this.userService.getAllUsers();
    }
    me(user) {
        return user;
    }
    createUser(createUser, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('usercretes', user);
        return this.userService.createUser(createUser);
    }
    getUserId(id, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('getId :', id);
        return this.userService.getUserById(id);
    }
    async putUserId(id, dto, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('Updating user with id:', id);
        return await this.userService.putUserById(id, dto);
    }
    async deleteUserHard(id, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('Delete user with id:', id);
        return await this.userService.deleteUserHardById(id);
    }
    async deleteUserSoft(id, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('Soft delete user with id:', id);
        return await this.userService.deleteUserSoftById(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.TUser]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.TUser]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "me", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, user_schema_1.TUser]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.TUser]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserId", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.CreateUserDto,
        user_schema_1.TUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "putUserId", null);
__decorate([
    (0, common_1.Delete)('hard:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.TUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUserHard", null);
__decorate([
    (0, common_1.Delete)('soft:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.TUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUserSoft", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map