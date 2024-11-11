import Usecase from "../use_case";
import {UserGateway} from "../../core/interfaces/user.gateway";
import {CreateUserDto, UserDto} from "../../types/entities/user.types";
import UserEntity from "../../core/entities/user.entity";


export  default  class CreateUserUseCase implements  Usecase<CreateUserDto, UserDto>{
    private constructor(private readonly  gateway:UserGateway) {}
    public  static  create(gateway:UserGateway) {
        return new CreateUserUseCase(gateway);
    }
    public  static  with(gateway:UserGateway) {
        return CreateUserUseCase.create(gateway);
    }
     async execute(input: CreateUserDto): Promise<UserDto | null> {
       const user=UserEntity.with(input)
         return  await this.gateway.createUser(user);
    }
}