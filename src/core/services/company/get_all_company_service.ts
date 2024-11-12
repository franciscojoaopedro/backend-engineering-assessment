import useUser from "../../../shared/helpers/useUser";


class Get_All_user_service{
    async  execute(){
        const {getAllUsersUseCase}=useUser()
        return  await getAllUsersUseCase.execute();
    }
}

const get_all_user_service = new  Get_All_user_service();

export  default (get_all_user_service)