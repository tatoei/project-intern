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
exports.FactoryController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_factory_dto_1 = require("./dto/create-factory.dto");
const user_schema_1 = require("../user/schema/user.schema");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const swagger_1 = require("@nestjs/swagger");
const factory_service_1 = require("./factory.service");
let FactoryController = class FactoryController {
    constructor(factoryService) {
        this.factoryService = factoryService;
    }
    createFactory(dto, user) {
        if (!user) {
            throw new common_1.NotFoundException('Factory not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('role', user.role);
        return this.factoryService.createFactory(dto);
    }
    async getFindAllFactory(user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        return this.factoryService.getFindAllFactory();
    }
    async getFindOneFactory(_id, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('Received ID:', _id);
        return this.factoryService.getFindOneFactory(_id);
    }
    async putUpdateFactory(id, dto, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        return await this.factoryService.putUpdateFactory(id, dto);
    }
    async deleteSoft(id, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('Soft delete user with id:', id);
        return await this.factoryService.deleteSoftById(id);
    }
};
exports.FactoryController = FactoryController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_factory_dto_1.CreateFactoryDto,
        user_schema_1.User]),
    __metadata("design:returntype", void 0)
], FactoryController.prototype, "createFactory", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User]),
    __metadata("design:returntype", Promise)
], FactoryController.prototype, "getFindAllFactory", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Query)('_id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.User]),
    __metadata("design:returntype", Promise)
], FactoryController.prototype, "getFindOneFactory", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_factory_dto_1.CreateFactoryDto,
        user_schema_1.User]),
    __metadata("design:returntype", Promise)
], FactoryController.prototype, "putUpdateFactory", null);
__decorate([
    (0, common_1.Delete)('soft:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.User]),
    __metadata("design:returntype", Promise)
], FactoryController.prototype, "deleteSoft", null);
exports.FactoryController = FactoryController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('factory'),
    __metadata("design:paramtypes", [factory_service_1.FactoryService])
], FactoryController);
//# sourceMappingURL=factory.controller.js.map