import {CreateUserDto} from "../../../types/entities/user.types";
import useUser from "../../../shared/helpers/useUser";
import useCompany from "../../../shared/helpers/useCompany";
import {CreateCompanyDto} from "../../../types/entities/company.types";


class Create_company_service {
    async  execute(data:CreateCompanyDto){
        const {createCompanyUseCase}=useCompany()
            return  await createCompanyUseCase.execute(data);

    }
}

const create_company_service = new Create_company_service();

export  default (create_company_service )