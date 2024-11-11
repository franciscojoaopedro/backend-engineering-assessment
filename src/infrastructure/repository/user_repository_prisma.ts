import {UserGateway} from "../../core/interfaces/user.gateway";
import {PrismaClient} from "@prisma/client"
import {CreateUserDto, UserDto} from "../../types/entities/user.types";
import UserEntity from "../../core/entities/user.entity";
import prisma from "../db/prisma";

class User_repository_prisma implements  UserGateway{

    private constructor( private  readonly  prisma:PrismaClient) {}

    public  static  create(prisma:PrismaClient) {
        return new  User_repository_prisma(prisma)
    }

    public  static  with(prisma:PrismaClient){
        return User_repository_prisma.create(prisma)
    }

   async createUser(user: UserEntity): Promise<UserDto> {
       const data:CreateUserDto={
           name: user.getUser.name,
           email:user.getUser.email,
           gender:user.getUser.gender,
           age:user.getUser.age,
           password:user.getUser.password,
           country:user.getUser.country,
           phone:user.getUser.phone

       }

       console.info("info criar user",data)
       const newUser = await this.prisma.user.create({
           data:data,
       })



       return  {
           id: newUser.id,
           name: newUser.name,
           email: newUser.email,
           age: newUser.age,
           country: newUser.country,
           phone: newUser.phone,
           gender: newUser.gender,
       }
    }

    getAllUsers(): Promise<void> {
        return Promise.resolve(undefined);
    }

    getUserByEmail(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    getUserById(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }


}
const userRepositoryPrisma= User_repository_prisma.with(prisma)
export  default userRepositoryPrisma