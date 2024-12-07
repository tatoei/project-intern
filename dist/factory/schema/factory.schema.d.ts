import { Document } from 'mongoose';
declare class location {
    latitude: number;
    longitude: number;
}
declare class documents {
    documentName: string;
    documentUrl: string;
}
declare class coinHistory {
    amount: number;
    date: Date;
    description: string;
    user: string;
}
declare class packages {
    packageName: string;
    price: number;
    duration: number;
}
export declare class Factory extends Document {
    factoryCode: string;
    factoryName: string;
    phone: string;
    email: string;
    location: location;
    documents: documents;
    coinHistory: coinHistory;
    packages: packages;
    coins: number;
    images: string;
    isActive: boolean;
}
export declare const LocationSchema: import("mongoose").Schema<location, import("mongoose").Model<location, any, any, any, Document<unknown, any, location> & location & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, location, Document<unknown, {}, import("mongoose").FlatRecord<location>> & import("mongoose").FlatRecord<location> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const FactorySchema: import("mongoose").Schema<Factory, import("mongoose").Model<Factory, any, any, any, Document<unknown, any, Factory> & Factory & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Factory, Document<unknown, {}, import("mongoose").FlatRecord<Factory>> & import("mongoose").FlatRecord<Factory> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare const DocumentsSchema: import("mongoose").Schema<documents, import("mongoose").Model<documents, any, any, any, Document<unknown, any, documents> & documents & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, documents, Document<unknown, {}, import("mongoose").FlatRecord<documents>> & import("mongoose").FlatRecord<documents> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const coinHistorySchema: import("mongoose").Schema<coinHistory, import("mongoose").Model<coinHistory, any, any, any, Document<unknown, any, coinHistory> & coinHistory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, coinHistory, Document<unknown, {}, import("mongoose").FlatRecord<coinHistory>> & import("mongoose").FlatRecord<coinHistory> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PackagesSchema: import("mongoose").Schema<packages, import("mongoose").Model<packages, any, any, any, Document<unknown, any, packages> & packages & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, packages, Document<unknown, {}, import("mongoose").FlatRecord<packages>> & import("mongoose").FlatRecord<packages> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export {};
