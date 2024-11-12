
import companyRepositoryPrisma from "../../infrastructure/repository/company_repository_prisma";
import CreateCompanyUseCase from "../../usecases/company/create_company_use_case";
import GetCompanyByIdUseCase from "../../usecases/company/get_company_by_id_usecase";
import GetAllCompaniesUseCase from "../../usecases/company/get_all_comapnies_usecase";


export default  function  useCompany(){
    const createCompanyUseCase=CreateCompanyUseCase.with(companyRepositoryPrisma);
    const getCompanyByIdUseCase=GetCompanyByIdUseCase.with(companyRepositoryPrisma);
    const getAllCompaniesUseCase=GetAllCompaniesUseCase.with(companyRepositoryPrisma);




    return {
        createCompanyUseCase,
        getAllCompaniesUseCase,
        getCompanyByIdUseCase
    }
}