
import {CompanyGateway} from "../../core/interfaces/company.gateway";
import {CompanyDto} from "../../types/entities/company.types";
export  default  class  GetAllCompaniesUseCase{
    private constructor(private  readonly gateway:CompanyGateway) {}

    public  static create(gateway:CompanyGateway){
        return new  GetAllCompaniesUseCase(gateway)
    }
    public  static  with(gateway:CompanyGateway) {
        return   GetAllCompaniesUseCase.create(gateway)
    }

    async  execute(): Promise<CompanyDto[] |[]> {
        return await  this.gateway.getAllCompany();
    }
}