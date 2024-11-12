import {UserGateway} from "../../core/interfaces/user.gateway";
import {UserDto} from "../../types/entities/user.types";
export  default  class  GetAllUsersUseCase{
    private constructor(private  readonly gateway:UserGateway) {}

    public  static create(gateway:UserGateway){
        return new  GetAllUsersUseCase(gateway)
    }
    public  static  with(gateway:UserGateway) {
        return   GetAllUsersUseCase.create(gateway)
    }

    async  execute(): Promise<UserDto[] |[]> {
        return await  this.gateway.getAllUsers();
    }
}