export declare class UploadController {
    uploadFile(file: Express.Multer.File): {
        originalname: string;
        filename: string;
        path: string;
    };
}
