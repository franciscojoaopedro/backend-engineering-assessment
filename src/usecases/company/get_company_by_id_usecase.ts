
import Usecase from "../use_case";
import {CompanyGateway} from "../../core/interfaces/company.gateway";
import {CompanyDto} from "../../types/entities/company.types";

interface ICompany {
    id: string
}

export  default  class  GetCompanyByIdUseCase implements  Usecase<ICompany, CompanyDto>{
    private constructor(private  readonly gateway:CompanyGateway) {}
    public  static create(gateway:CompanyGateway){
        return new  GetCompanyByIdUseCase(gateway)
    }
    public  static  with(gateway:CompanyGateway) {
        return   GetCompanyByIdUseCase.create(gateway)
    }
    // @ts-ignore
   async execute(input: ICompany): Promise<CompanyDto | null> {
     return await  this.gateway.getCompanyById(input.id);
    }
}