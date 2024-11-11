import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";

import get_user_service from "../../core/services/user/get_user_service";


export class GetUserController {
    async execute(request:FastifyRequest,reply:FastifyReply): Promise<FastifyReply> {
        const {id}=request.params as {id:string};
        try{
            const user= await  get_user_service.execute(id)

            if (user){
            return   reply.code(200)
                .send({
                    success:true,
                    message:"user",
                    data:user
                })

            }

            return   reply.code(200)
                .send({
                    success:true,
                    message:"user not found",
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