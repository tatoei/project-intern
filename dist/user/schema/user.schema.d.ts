export type UserDocument = TUser & Document;
export declare class TUser {
    email: string;
    firstname: string;
    password: string;
    role: string;
    lastname: string;
    username: string;
    phone: string;
    imageUrl: string;
    isActive: boolean;
    isNewUser: boolean;
}
export declare const UserSchema: import("mongoose").Schema<TUser, import("mongoose").Model<TUser, any, any, any, import("mongoose").Document<unknown, any, TUser> & TUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TUser, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TUser>> & import("mongoose").FlatRecord<TUser> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
