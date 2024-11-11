import {UserGateway} from "../../core/interfaces/user.gateway";
import Usecase from "../use_case";
import {UserDto} from "../../types/entities/user.types";

interface IUser {
    id: string
}

class  GetUserByIdUseCase implements  Usecase<IUser, UserDto>{
    private constructor(private  readonly gateway:UserGateway) {}


    public  static create(gateway:UserGateway){
        return new  GetUserByIdUseCase(gateway)
    }
    public  static  with(gateway:UserGateway) {
        return   GetUserByIdUseCase.create(gateway)
    }

   async  execute(input: IUser): Promise<UserDto> {
     return await  this.gateway.getUserById(input.id);
    }
}