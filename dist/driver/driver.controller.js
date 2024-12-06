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
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const driver_service_1 = require("./driver.service");
const passport_1 = require("@nestjs/passport");
const create_driver_dto_1 = require("./dto/create-driver.dto");
const user_schema_1 = require("../user/schema/user.schema");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const swagger_1 = require("@nestjs/swagger");
let DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    createFactory(dto, user) {
        if (!user) {
            throw new common_1.NotFoundException('Driver not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('role', user.role);
        return this.driverService.createDriver(dto);
    }
    async getFindAllDriver(user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        return this.driverService.getFindAllDriver();
    }
    async getFindOneDriver(_id, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('Received ID:', _id);
        return this.driverService.getFindOneDriver(_id);
    }
    async putUpdateDriver(id, dto, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        return await this.driverService.putUpdateDriver(id, dto);
    }
    async deleteSoft(id, user) {
        if (!user) {
            throw new common_1.NotFoundException('User not found or token is invalid');
        }
        if (user.role !== 'admin') {
            throw new common_1.NotFoundException('You do not have permission to access this resource');
        }
        console.log('Soft delete user with id:', id);
        return await this.driverService.deleteSoftById(id);
    }
};
exports.DriverController = DriverController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_driver_dto_1.CreateDriverDto,
        user_schema_1.User]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "createFactory", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "getFindAllDriver", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Query)('_id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.User]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "getFindOneDriver", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_driver_dto_1.CreateDriverDto,
        user_schema_1.User]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "putUpdateDriver", null);
__decorate([
    (0, common_1.Delete)('soft:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.User]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "deleteSoft", null);
exports.DriverController = DriverController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('driver'),
    __metadata("design:paramtypes", [driver_service_1.DriverService])
], DriverController);
//# sourceMappingURL=driver.controller.js.map