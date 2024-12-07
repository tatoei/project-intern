export type DriverDocument = Driver & Document;
export declare class Driver {
    driverCode: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    phone: string;
    email: string;
    company: string;
    driverType: string;
    idCardNumber: string;
    licenseNumber: string;
    address: string;
    profileImage: string;
    isActive: boolean;
}
export declare const DriverSchema: import("mongoose").Schema<Driver, import("mongoose").Model<Driver, any, any, any, import("mongoose").Document<unknown, any, Driver> & Driver & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Driver, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Driver>> & import("mongoose").FlatRecord<Driver> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
