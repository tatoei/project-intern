import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { TUser } from '@/user/schema/user.schema';
import { Driver } from './schema/driver.schema';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    createFactory(dto: CreateDriverDto, user: TUser): Promise<Driver>;
    getFindAllDriver(user: TUser): Promise<Driver[]>;
    getFindOneDriver(_id: string, user: TUser): Promise<Driver>;
    putUpdateDriver(id: string, dto: CreateDriverDto, user: TUser): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteSoft(id: string, user: TUser): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
