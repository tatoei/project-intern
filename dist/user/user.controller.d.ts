import { UserService } from './user.service';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { TUser } from './schema/user.schema';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(user: TUser): Promise<TUser[]>;
    me(user: TUser): TUser;
    createUser(createUser: CreateUserDto, user: TUser): Promise<TUser>;
    getUserId(id: string, user: TUser): Promise<TUser>;
    putUserId(id: string, dto: CreateUserDto, user: TUser): Promise<import("mongoose").Document<unknown, {}, TUser> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteUserHard(id: string, user: TUser): Promise<import("mongoose").Document<unknown, {}, TUser> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteUserSoft(id: string, user: TUser): Promise<import("mongoose").Document<unknown, {}, TUser> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
