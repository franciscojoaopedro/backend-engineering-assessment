import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import get_all_users_service from "../../core/services/user/get_all_users_service";


export class GetAllUserController {
    async execute(request:FastifyRequest,reply:FastifyReply): Promise<FastifyReply> {
        try{
            const users=await get_all_users_service.execute()

          return   reply.code(200)
                .send({
                    success:true,
                    message:"all users",
                    data:users
                })
        }
        catch(err){
            return  ErrorResponse(err,reply)
        }
    }
}


const get_all_company_controller=new GetAllUserController();
export default (get_all_company_controller);