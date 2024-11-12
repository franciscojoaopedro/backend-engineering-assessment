import {Gender} from "@prisma/client";




export type CompanyDto={
    id:string;
    name:string
    description:string
    website:string
    location:string
    email    :string
}
export type CreateCompanyDto = {
    name:string
    description:string
    website:string
    location:string
    email    :string
    password :string
};