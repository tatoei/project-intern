import { Model } from 'mongoose';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { Factory } from './schema/factory.schema';
export declare class FactoryService {
    private factoryModel;
    constructor(factoryModel: Model<Factory>);
    createFactory(dto: CreateFactoryDto): Promise<Factory>;
    getFindAllFactory(): Promise<Factory[]>;
    getFindOneFactory(_id: string): Promise<Factory>;
    putUpdateFactory(id: string, dto: CreateFactoryDto): Promise<import("mongoose").Document<unknown, {}, Factory> & Factory & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteSoftById(id: string): Promise<import("mongoose").Document<unknown, {}, Factory> & Factory & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
