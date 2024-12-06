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
exports.FactoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const factory_schema_1 = require("./schema/factory.schema");
let FactoryService = class FactoryService {
    constructor(factoryModel) {
        this.factoryModel = factoryModel;
    }
    async createFactory(dto) {
        const { factoryCode, factoryName, phone, email, location, coins, images, documents, coinHistory, packages, } = dto;
        console.log('สร้างโรงงาน');
        const existingFactory = await this.factoryModel.findOne({ factoryCode });
        if (existingFactory) {
            throw new common_1.BadRequestException('factoryCode already in use');
        }
        try {
            return await this.factoryModel.create({
                factoryCode,
                factoryName,
                phone,
                email,
                location,
                coins,
                images,
                documents,
                coinHistory,
                packages,
                isActive: true,
            });
        }
        catch (error) {
            console.error('Error:', error);
            if (error.code === 11000) {
                throw new common_1.BadRequestException('Factory with this factoryCode already exists');
            }
            throw error;
        }
    }
    async getFindAllFactory() {
        return this.factoryModel.find({ isActive: true });
    }
    async getFindOneFactory(_id) {
        return this.factoryModel.findOne({ _id });
    }
    async putUpdateFactory(id, dto) {
        const factory = await this.factoryModel.findById(id);
        if (!factory) {
            throw new common_1.NotFoundException(`Factory with id ${id} not found`);
        }
        return this.factoryModel.findByIdAndUpdate(id, { $set: dto }, { new: true, runValidators: true });
    }
    async deleteSoftById(id) {
        const factory = await this.factoryModel.findById(id);
        if (!factory) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        factory.isActive = false;
        return await factory.save();
    }
};
exports.FactoryService = FactoryService;
exports.FactoryService = FactoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(factory_schema_1.Factory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FactoryService);
//# sourceMappingURL=factory.service.js.map