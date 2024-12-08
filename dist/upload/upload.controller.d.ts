export declare class UploadController {
    constructor();
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
        fileId: import("bson").ObjectId;
    }>;
}
