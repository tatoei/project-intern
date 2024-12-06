"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('refresh-jwt', () => ({
    secret: process.env.REFRESH_JWT_SECRET || 'default-refresh-secret-key',
    expiresIn: process.env.REFRESH_JWT_EXPIRE_IN || '7d',
}));
//# sourceMappingURL=refresh-jwt.config.js.map