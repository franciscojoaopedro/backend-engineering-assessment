import Usecase from "../use_case";
import {CompanyGateway} from "../../core/interfaces/company.gateway";
import {CompanyDto, CreateCompanyDto} from "../../types/entities/company.types";
import CompanyEntity from "../../core/entities/company.enitity";

export  default  class CreateCompanyUseCase implements  Usecase<CreateCompanyDto, CompanyDto>{
    private constructor(private readonly  gateway: CompanyGateway) {}
    public  static  create(gateway: CompanyGateway) {
        return new CreateCompanyUseCase(gateway);
    }
    public  static  with(gateway: CompanyGateway) {
        return CreateCompanyUseCase.create(gateway);
    }

    // @ts-ignore
    async execute(input: CreateCompanyDto): Promise<CompanyDto> {
        const company=CompanyEntity.with(input)
        return  await this.gateway.createCompany(company);
    }
}