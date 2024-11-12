import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import prisma from "../../infrastructure/db/prisma";
import usePrisma from "../../shared/helpers/usePrisma";


 class UserController {

    async addJobFavorete(request:FastifyRequest, reply:FastifyReply): Promise<FastifyReply> {

        try{
            const {idUser,idJob}= request.body  as {idUser:string,idJob:string};
            const {verifyUserExisted}=usePrisma()
            if(!verifyUserExisted(idUser)){
                reply.code(401)
                    .send({
                        success:false,
                        message:"user not existed"
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
            })
        }



        catch (error) {
            return ErrorResponse(error,reply)
        }
    }
}

const user_controller=new UserController()
export  default  user_controller