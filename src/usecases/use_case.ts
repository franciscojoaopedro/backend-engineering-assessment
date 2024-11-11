import {UserDto} from "../types/entities/user.types";

export  default interface Usecase<input,output>{
    execute(input: input):Promise<UserDto | null>
}