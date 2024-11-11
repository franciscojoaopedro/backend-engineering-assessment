import UserEntity from "../entities/user.entity";
import {UserDto} from "../../types/entities/user.types";


export interface UserGateway{
    createUser(user:UserEntity):Promise<UserDto>;
    getUserById(id:string):Promise<UserDto| null>;
    getUserByEmail(email:string):Promise<UserDto| null>;
    getAllUsers():Promise<UserDto[]|[]>;
}