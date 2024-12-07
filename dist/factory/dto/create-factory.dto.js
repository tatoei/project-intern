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
exports.CreateFactoryDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class LocationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "longitude", void 0);
class DocumentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentDto.prototype, "documentName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentDto.prototype, "documentUrl", void 0);
class CoinHistoryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CoinHistoryDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CoinHistoryDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CoinHistoryDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CoinHistoryDto.prototype, "user", void 0);
class PackageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PackageDto.prototype, "packageName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PackageDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PackageDto.prototype, "duration", void 0);
class CreateFactoryDto {
}
exports.CreateFactoryDto = CreateFactoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFactoryDto.prototype, "factoryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFactoryDto.prototype, "factoryName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFactoryDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateFactoryDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LocationDto),
    __metadata("design:type", LocationDto)
], CreateFactoryDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFactoryDto.prototype, "coins", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFactoryDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => DocumentDto),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", DocumentDto)
], CreateFactoryDto.prototype, "documents", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CoinHistoryDto),
    __metadata("design:type", CoinHistoryDto)
], CreateFactoryDto.prototype, "coinHistory", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: '' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PackageDto),
    __metadata("design:type", PackageDto)
], CreateFactoryDto.prototype, "packages", void 0);
//# sourceMappingURL=create-factory.dto.js.map