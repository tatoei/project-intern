"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryModule = void 0;
const common_1 = require("@nestjs/common");
const factory_service_1 = require("./factory.service");
const factory_controller_1 = require("./factory.controller");
const mongoose_1 = require("@nestjs/mongoose");
const factory_schema_1 = require("./schema/factory.schema");
let FactoryModule = class FactoryModule {
};
exports.FactoryModule = FactoryModule;
exports.FactoryModule = FactoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: factory_schema_1.Factory.name, schema: factory_schema_1.FactorySchema }]),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/'),
            FactoryModule,
        ],
        providers: [factory_service_1.FactoryService],
        controllers: [factory_controller_1.FactoryController],
        exports: [factory_service_1.FactoryService],
    })
], FactoryModule);
//# sourceMappingURL=factory.module.js.map