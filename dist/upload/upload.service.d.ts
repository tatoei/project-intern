export declare class UploadService {
    saveFile(file: Express.Multer.File): {
        filename: string;
        originalname: string;
        path: string;
    };
}
