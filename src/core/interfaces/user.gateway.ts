import UserEntity from "../entities/user.entity";
import {UserDto} from "../../types/entities/user.types";


export interface UserGateway{
    createUser(user:UserEntity):Promise<UserDto>;
    getUserById(id:string):Promise<UserDto>;
    getUserByEmail(id:string):Promise<void>;
    getAllUsers():Promise<UserDto[]>;
}