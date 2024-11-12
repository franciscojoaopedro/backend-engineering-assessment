import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import prisma from "../../infrastructure/db/prisma";
import usePrisma from "../../shared/helpers/usePrisma";


 class AddFavoriteController {
    async execute(request:FastifyRequest, reply:FastifyReply): Promise<FastifyReply> {
        try{
            const {idUser,idJob}= request.body  as {idUser:string,idJob:string};
            const {verifyUserExisted,verifyJobExisted}=usePrisma()
            if(! await verifyUserExisted(idUser)){
               return  reply.code(401)
                    .send({
                        success:false,
                        message:"user not existed"
                    })
            }
            if(! await verifyJobExisted(idJob)){
             return    reply.code(401)
                    .send({
                        success:false,
                        message:"job not existed"
                    })
            }
            const favorites =await  prisma.jobFavorite.create({
                data:{
                    user:{
                        connect:{
                            id:idUser
                        }
                    },
                    job:{
                        connect:{
                            id:idJob
                        }
                    }
                }
            })
             return  reply.status(200)
            .send({
                success:true,
                message:"job added in favorite",
                data:favorites
            })
        }

        catch (error) {
            return ErrorResponse(error,reply)
        }
    }
}

const add_job_favorite_controller=new AddFavoriteController()
export  default( add_job_favorite_controller)