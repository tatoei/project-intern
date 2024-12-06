import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(user: User): Promise<User[]>;
    me(user: any): any;
    createUser(createUser: CreateUserDto, user: User): Promise<User>;
    getUserId(id: string, user: User): Promise<User>;
    putUserId(id: string, dto: CreateUserDto, user: User): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteUserHard(id: string, user: User): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteUserSoft(id: string, user: User): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
