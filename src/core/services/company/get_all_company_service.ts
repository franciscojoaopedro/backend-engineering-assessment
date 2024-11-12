import useUser from "../../../shared/helpers/useUser";
import useCompany from "../../../shared/helpers/useCompany";


class Get_All_Company_service{
    async  execute(){
        const {getAllCompaniesUseCase}=useCompany()
        return  await getAllCompaniesUseCase.execute();
    }
}

const get_all_company_service = new  Get_All_Company_service();

export  default (get_all_company_service)