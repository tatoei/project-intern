import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { User } from 'src/user/schema/user.schema';
import { Driver } from './schema/driver.schema';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    createFactory(dto: CreateDriverDto, user: User): Promise<Driver>;
    getFindAllDriver(user: User): Promise<Driver[]>;
    getFindOneDriver(_id: string, user: User): Promise<Driver>;
    putUpdateDriver(id: string, dto: CreateDriverDto, user: User): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteSoft(id: string, user: User): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
