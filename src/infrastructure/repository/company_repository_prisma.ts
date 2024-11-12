import {PrismaClient} from "@prisma/client"
import {CompanyGateway} from "../../core/interfaces/company.gateway";
import CompanyEntity from "../../core/entities/company.enitity";
import {CompanyDto} from "../../types/entities/company.types";


class CompanyRepositoryPrisma  implements  CompanyGateway{
    private constructor(private readonly  prisma:PrismaClient) {}

   async createCompany(company: CompanyEntity): Promise<CompanyDto> {
      const data={
          name:company.getCompany.name,
          email:company.getCompany.email,
          description:company.getCompany.description,
          password:company.getCompany.password,
          website:company.getCompany.website,
          location:company.getCompany.location
      }

      const newCompany=await this.prisma.company.create({
          data:{
              name:data.name,
              email:data.email,
              description:data.description,
              password:data.password,
              website:data.website,
              location:data.location
          }
      })

       return {
          id:newCompany.id,
           name:newCompany.name,
           email:newCompany.email,
           description:newCompany.description,
           location:newCompany.location,
           website:newCompany.website
       }
    }

   async getAllCompany(): Promise<CompanyDto[] | []> {
      const data= await  this.prisma.company.findMany()
       return  data.map(company => {
           return {
               id: company.id,
               name: company.name,
               email: company.email,
               description: company.description,
               location: company.location,
               website: company.website
           }
       })
    }

   async getCompanyById(id: string): Promise<CompanyDto | null> {

        const company=await  this.prisma.company.findUnique({
            where:{id:id}
        })

       if(company){
           return  {
               id: company.id,
               name: company.name,
               email: company.email,
               description: company.description,
               location: company.location,
               website: company.website
           }
       }
       return  null

    }

}