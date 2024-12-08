"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schema/user.schema");
const user_service_1 = require("./user.service");
const auth_module_1 = require("../auth/auth.module");
const user_controller_1 = require("./user.controller");
const jwt_module_1 = require("@nestjs/jwt/dist/jwt.module");
const auth_controller_1 = require("../auth/auth.controller");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const auth_service_1 = require("../auth/auth.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.TUser.name, schema: user_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/'),
            auth_module_1.AuthModule,
            jwt_module_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: 3600 },
            }),
        ],
        providers: [user_service_1.UserService, auth_service_1.AuthService, jwt_strategy_1.JwtStrategy,],
        controllers: [user_controller_1.UserController, auth_controller_1.AuthController],
        exports: [user_service_1.UserService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map