import {Gender} from "@prisma/client";



export type UserDto ={
    id:string;
    name:string;
    email:string;
    phone:string;
    country:string;
    age:number
    gender:string;
}
export type CreateUserDto = {
    country: string,
    email: string,
    gender: Gender;
    age: number;
    name: string,
    password: string;
    phone: string,

};