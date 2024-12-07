"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const upload_service_1 = require("./upload/upload.service");
const upload_module_1 = require("./upload/upload.module");
const factory_controller_1 = require("./factory/factory.controller");
const factory_module_1 = require("./factory/factory.module");
const driver_module_1 = require("./driver/driver.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({ global: true, secret: '123' }),
            mongoose_1.MongooseModule.forRoot('mongodb://atlas-sql-672c7ecd48246948735edb7a-bb5mg.a.query.mongodb.net/test?ssl=true&authSource=admin'),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            upload_module_1.UploadModule,
            factory_module_1.FactoryModule,
            driver_module_1.DriverModule,
        ],
        controllers: [app_controller_1.AppController, factory_controller_1.FactoryController],
        providers: [app_service_1.AppService, upload_service_1.UploadService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map