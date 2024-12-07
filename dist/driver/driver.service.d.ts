import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver } from './schema/driver.schema';
export declare class DriverService {
    private DriverModule;
    createDriver(dto: CreateDriverDto): Promise<Driver>;
    getFindAllDriver(): Promise<Driver[]>;
    getFindOneDriver(_id: string): Promise<Driver>;
    putUpdateDriver(id: string, dto: CreateDriverDto): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteSoftById(id: string): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
