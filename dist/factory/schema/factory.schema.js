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
exports.PackagesSchema = exports.coinHistorySchema = exports.DocumentsSchema = exports.FactorySchema = exports.LocationSchema = exports.Factory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let location = class location {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], location.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], location.prototype, "longitude", void 0);
location = __decorate([
    (0, mongoose_1.Schema)()
], location);
let documents = class documents {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], documents.prototype, "documentName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], documents.prototype, "documentUrl", void 0);
documents = __decorate([
    (0, mongoose_1.Schema)()
], documents);
let coinHistory = class coinHistory {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], coinHistory.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], coinHistory.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], coinHistory.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], coinHistory.prototype, "user", void 0);
coinHistory = __decorate([
    (0, mongoose_1.Schema)()
], coinHistory);
let packages = class packages {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], packages.prototype, "packageName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], packages.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], packages.prototype, "duration", void 0);
packages = __decorate([
    (0, mongoose_1.Schema)()
], packages);
let Factory = class Factory extends mongoose_2.Document {
};
exports.Factory = Factory;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Factory.prototype, "factoryCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Factory.prototype, "factoryName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Factory.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Factory.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: location }),
    __metadata("design:type", location)
], Factory.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: documents }),
    __metadata("design:type", documents)
], Factory.prototype, "documents", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: coinHistory }),
    __metadata("design:type", coinHistory)
], Factory.prototype, "coinHistory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: packages }),
    __metadata("design:type", packages)
], Factory.prototype, "packages", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Factory.prototype, "coins", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Factory.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Factory.prototype, "isActive", void 0);
exports.Factory = Factory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Factory);
exports.LocationSchema = mongoose_1.SchemaFactory.createForClass(location);
exports.FactorySchema = mongoose_1.SchemaFactory.createForClass(Factory);
exports.DocumentsSchema = mongoose_1.SchemaFactory.createForClass(documents);
exports.coinHistorySchema = mongoose_1.SchemaFactory.createForClass(coinHistory);
exports.PackagesSchema = mongoose_1.SchemaFactory.createForClass(packages);
//# sourceMappingURL=factory.schema.js.map