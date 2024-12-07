import { TUser } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<TUser>, jwtService: JwtService);
    createUser(dto: CreateUserDto): Promise<TUser>;
    getAllUsers(): Promise<TUser[]>;
    getUserById(id: string): Promise<TUser>;
    putUserById(id: string, dto: Partial<CreateUserDto>): Promise<import("mongoose").Document<unknown, {}, TUser> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteUserHardById(id: string): Promise<import("mongoose").Document<unknown, {}, TUser> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    deleteUserSoftById(id: string): Promise<import("mongoose").Document<unknown, {}, TUser> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
