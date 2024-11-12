import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";

import get_user_service from "../../core/services/user/get_user_service";
import get_company_service from "../../core/services/company/get_company_service";


export class GetUserController {
    async execute(request:FastifyRequest,reply:FastifyReply): Promise<FastifyReply> {
        const {idCompany}=request.params as {idCompany:string};
        try{
            const company= await   get_company_service.execute(idCompany)

            if (company){
            return   reply.code(200)
                .send({
                    success:true,
                    message:"company",
                    data:company
                })

            }

            return   reply.code(200)
                .send({
                    success:true,
                    message:"company not found",
                    data:{}
                })
        }
        catch(err){
            return  ErrorResponse(err,reply)
        }
    }
}


const get_company_controller=new GetUserController();
export default (get_company_controller);