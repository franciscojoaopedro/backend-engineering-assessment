import {CreateCompanyDto} from "../../types/entities/company.types";

export  default   class CompanyEntity{
    private constructor(private  readonly  company:CreateCompanyDto ) {}
    public  static  create(company:CreateCompanyDto ){
        return new CompanyEntity(company)
    }
    public  static  with(company:CreateCompanyDto ){
        return CompanyEntity.create(company)
    }
    public  get getCompany (){
        return this.company;
    }
}
