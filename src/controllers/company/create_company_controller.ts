import {FastifyReply, FastifyRequest} from "fastify";

import Bcrypt from "../../shared/utils/useBycriptJs";
import usePrisma from "../../shared/helpers/usePrisma";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import {CreateCompanyDto} from "../../types/entities/company.types";
import create_company_service from "../../core/services/company/create_company_service";

class Create_company_controller {
    async execute(request:FastifyRequest,reply:FastifyReply):Promise<FastifyReply> {
        const {
            email,
            password,
            name,
            website,
            location,
            description
        }=request.body as CreateCompanyDto;


        try{

            const {verifyUserExisted}=usePrisma()
            const {hashPassword}=Bcrypt()
            if(await verifyUserExisted(email)){
                return reply.code(200).send({
                    success:false,
                    message:"email already exists"
                })
            }
            const company=await create_company_service.execute({
            email,
            password: await  hashPassword(password),
                name,
                website,
                location,
                description
        })
        return  reply.code(200)
            .send({
                success:true,
                message:"company created",
                data:company
            });
        }
        catch (err){
             return  ErrorResponse(err,reply)
        }

    }
}

const create_company_controller=new Create_company_controller();
export default (create_company_controller);