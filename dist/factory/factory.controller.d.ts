import { CreateFactoryDto } from './dto/create-factory.dto';
import { TUser } from '@/user/schema/user.schema';
import { FactoryService } from './factory.service';
import { Factory } from './schema/factory.schema';
export declare class FactoryController {
    private readonly factoryService;
    constructor(factoryService: FactoryService);
    createFactory(dto: CreateFactoryDto, user: TUser): Promise<Factory>;
    getFindAllFactory(user: TUser): Promise<Factory[]>;
    getFindOneFactory(_id: string, user: TUser): Promise<Factory>;
    putUpdateFactory(id: string, dto: CreateFactoryDto, user: TUser): Promise<import("mongoose").Document<unknown, {}, Factory> & Factory & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteSoft(id: string, user: TUser): Promise<import("mongoose").Document<unknown, {}, Factory> & Factory & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
