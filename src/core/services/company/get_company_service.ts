import {CreateUserDto} from "../../../types/entities/user.types";
import useUser from "../../../shared/helpers/useUser";
import useCompany from "../../../shared/helpers/useCompany";


class Get_company_service {
    async  execute(id:string){
        const {getCompanyByIdUseCase}=useCompany()
        return  await getCompanyByIdUseCase.execute({id});

    }
}

const get_company_service = new  Get_company_service();

export  default (get_company_service)