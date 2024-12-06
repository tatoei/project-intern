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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const driver_schema_1 = require("./schema/driver.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let DriverService = class DriverService {
    async createDriver(dto) {
        const { driverCode, firstName, lastName, username, password, phone, email, company, driverType, idCardNumber, licenseNumber, address, profileImage, } = dto;
        console.log('Driver Success');
        const existingDriver = await this.DriverModule.findOne({ driverCode });
        if (existingDriver) {
            throw new common_1.BadRequestException('driverCode already in use');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            return await this.DriverModule.create({
                driverCode,
                firstName,
                lastName,
                username,
                password: hashedPassword,
                phone,
                email,
                company,
                driverType,
                idCardNumber,
                licenseNumber,
                address,
                profileImage,
                isActive: true,
            });
        }
        catch (error) {
            console.error('Error:', error);
            if (error.code === 11000) {
                throw new common_1.BadRequestException('Driver with this driverCode already exists');
            }
            throw error;
        }
    }
    async getFindAllDriver() {
        return this.DriverModule.find({ isActive: true });
    }
    async getFindOneDriver(_id) {
        return this.DriverModule.findOne({ _id });
    }
    async putUpdateDriver(id, dto) {
        const factory = await this.DriverModule.findById(id);
        if (!factory) {
            throw new common_1.NotFoundException(`Factory with id ${id} not found`);
        }
        return this.DriverModule.findByIdAndUpdate(id, { $set: dto }, { new: true, runValidators: true });
    }
    async deleteSoftById(id) {
        const factory = await this.DriverModule.findById(id);
        if (!factory) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        factory.isActive = false;
        return await factory.save();
    }
};
exports.DriverService = DriverService;
__decorate([
    (0, mongoose_1.InjectModel)(driver_schema_1.Driver.name),
    __metadata("design:type", mongoose_2.Model)
], DriverService.prototype, "DriverModule", void 0);
exports.DriverService = DriverService = __decorate([
    (0, common_1.Injectable)()
], DriverService);
//# sourceMappingURL=driver.service.js.map