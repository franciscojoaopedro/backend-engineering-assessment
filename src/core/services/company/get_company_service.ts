import {CreateUserDto} from "../../../types/entities/user.types";
import useUser from "../../../shared/helpers/useUser";


class Get_user_service{
    async  execute(id:string){
        const {getUserByIdUseCase}=useUser()
        return  await getUserByIdUseCase.execute({id});

    }
}

const get_user_service = new  Get_user_service();

export  default (get_user_service)