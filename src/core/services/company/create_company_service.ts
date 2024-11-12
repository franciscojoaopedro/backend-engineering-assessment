import {CreateUserDto} from "../../../types/entities/user.types";
import useUser from "../../../shared/helpers/useUser";


class Create_user_service{
    async  execute(data:CreateUserDto){
        const {createUserUseCase}=useUser()
            return  await createUserUseCase.execute(data);

    }
}

const create_user_service = new Create_user_service();

export  default (create_user_service)