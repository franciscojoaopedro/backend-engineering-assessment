import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import prisma from "../../infrastructure/db/prisma";


export  default  async function getApplicationJob(request:FastifyRequest,reply:FastifyReply):Promise<FastifyReply> {

    const {id}=request.params as {id:string}

    try{
        const application=await  prisma.application.findUnique({
            where:{id:id}
        })

        if(!application){

            return reply.status(401)
                .send({
                    success:true,
                    message:"application not found",
                    data:{}
                })
        }


        return reply.status(200)
            .send({
                success:true,
                message:"application found",
                data:application
            })
    }
    catch (err){
        return  ErrorResponse(err,reply)
    }

}