"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModule = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const upload_controller_1 = require("./upload.controller");
const upload_service_1 = require("./upload.service");
const mongoose_1 = require("@nestjs/mongoose");
const auth_service_1 = require("../auth/auth.service");
const auth_controller_1 = require("../auth/auth.controller");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const auth_module_1 = require("../auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("../user/user.module");
let UploadModule = class UploadModule {
};
exports.UploadModule = UploadModule;
exports.UploadModule = UploadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/'),
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: 3600 },
            }),
        ],
        providers: [upload_service_1.UploadService, auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        controllers: [upload_controller_1.UploadController, auth_controller_1.AuthController],
        exports: [upload_service_1.UploadService],
    })
], UploadModule);
//# sourceMappingURL=upload.module.js.map