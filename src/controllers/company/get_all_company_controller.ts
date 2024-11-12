import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import get_all_users_service from "../../core/services/user/get_all_users_service";
import get_all_company_service from "../../core/services/company/get_all_company_service";


export class GetAllUserController {
    async execute(request:FastifyRequest,reply:FastifyReply): Promise<FastifyReply> {
        try{
            const companies=await get_all_company_service .execute()

          return   reply.code(200)
                .send({
                    success:true,
                    message:"all companies",
                    data:companies
                })
        }
        catch(err){
            return  ErrorResponse(err,reply)
        }
    }
}


const get_all_company_controller=new GetAllUserController();
export default (get_all_company_controller);