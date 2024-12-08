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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
const uri = 'mongodb+srv://toeiisararawee:toeiisararawee@cluster0.jodvh.mongodb.net/';
const client = new mongodb_1.MongoClient(uri);
const databaseName = 'uploadsDB';
const collectionName = 'tuser';
let UploadController = class UploadController {
    constructor() {
        client.connect().catch((err) => console.error('MongoDB connection error:', err));
    }
    async uploadFile(file) {
        if (!file) {
            throw new common_1.BadRequestException('File is undefined');
        }
        try {
            const base64String = file.buffer.toString('base64');
            const imageData = {
                originalname: file.originalname,
                mimetype: file.mimetype,
                size: file.size,
                base64: base64String,
                uploadDate: new Date(),
            };
            const db = client.db(databaseName);
            const collection = db.collection(collectionName);
            const result = await collection.insertOne(imageData);
            return {
                message: 'File uploaded and stored as Base64 in MongoDB',
                fileId: result.insertedId,
            };
        }
        catch (error) {
            console.error('Error saving file to MongoDB:', error);
            throw new common_1.BadRequestException('Failed to save file');
        }
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload a file and store as Base64 in MongoDB' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: (req, file, callback) => {
            const allowedMimeTypes = ['image/jpeg', 'image/png'];
            if (allowedMimeTypes.includes(file.mimetype)) {
                callback(null, true);
            }
            else {
                callback(new common_1.BadRequestException('Invalid file type'), false);
            }
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFile", null);
exports.UploadController = UploadController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [])
], UploadController);
//# sourceMappingURL=upload.controller.js.map