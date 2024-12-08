import { TUser } from '@/user/schema/user.schema';
export declare class UploadController {
    constructor();
    uploadFile(file: Express.Multer.File, user: TUser): Promise<{
        message: string;
        fileId: import("bson").ObjectId;
    }>;
}
