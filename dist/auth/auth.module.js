"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_strategy_1 = require("./jwt.strategy");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const refresh_jwt_config_1 = require("./config/refresh-jwt.config");
const user_module_1 = require("../user/user.module");
const user_service_1 = require("../user/user.service");
const user_schema_1 = require("../user/schema/user.schema");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.TUser.name, schema: user_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/nest_test'),
            passport_1.PassportModule,
            config_1.ConfigModule.forFeature(refresh_jwt_config_1.default),
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: 3600 },
            }),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, user_service_1.UserService],
        exports: [jwt_strategy_1.JwtStrategy, auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map