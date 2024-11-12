import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import prisma from "../../infrastructure/db/prisma";
import usePrisma from "../../shared/helpers/usePrisma";


class GetAllFavoriteController {
    async execute(request:FastifyRequest, reply:FastifyReply): Promise<FastifyReply> {
        try{
            const {idUser}= request.params  as {idUser:string};
            const {verifyUserExisted}=usePrisma()
            if(!verifyUserExisted(idUser)){
                reply.code(401)
                    .send({
                        success:false,
                        message:"user not existed"
                    })
            }
            const favorites =await  prisma.jobFavorite.findMany({
                where:{user:{ id:idUser}},
                include:{
                    job:true
                }
            })
            return  reply.status(200)
                .send({
                    success:true,
                    message:"favorites jobs",
                    data:favorites
                })
        }

        catch (error) {
            return ErrorResponse(error,reply)
        }
    }
}

const get_all_favorite_controller=new GetAllFavoriteController()
export  default (get_all_favorite_controller)