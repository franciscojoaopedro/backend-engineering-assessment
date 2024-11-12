import CompanyEntity from "../entities/company.enitity";
import {CompanyDto} from "../../types/entities/company.types";


export interface CompanyGateway{
    createCompany(company:CompanyEntity):Promise<CompanyDto>;
    getCompanyById(id:string):Promise<CompanyDto | null>;
    getAllCompany():Promise<CompanyDto[]|[]>;
}