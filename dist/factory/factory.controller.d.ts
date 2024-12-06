import { CreateFactoryDto } from './dto/create-factory.dto';
import { User } from 'src/user/schema/user.schema';
import { FactoryService } from './factory.service';
import { Factory } from './schema/factory.schema';
export declare class FactoryController {
    private readonly factoryService;
    constructor(factoryService: FactoryService);
    createFactory(dto: CreateFactoryDto, user: User): Promise<Factory>;
    getFindAllFactory(user: User): Promise<Factory[]>;
    getFindOneFactory(_id: string, user: User): Promise<Factory>;
    putUpdateFactory(id: string, dto: CreateFactoryDto, user: User): Promise<import("mongoose").Document<unknown, {}, Factory> & Factory & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteSoft(id: string, user: User): Promise<import("mongoose").Document<unknown, {}, Factory> & Factory & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
