import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import prisma from "../../infrastructure/db/prisma";


export  default  async function getAllApplicationJob(request:FastifyRequest,reply:FastifyReply):Promise<FastifyReply> {

const {idUser}= request.params   as  {idUser:string};

    try{
        const applications=await  prisma.application.findMany({
            where:{
                user:{
                    id:idUser
                }
            },
            include:{
                job:true
            }
        })

        if(!applications){

            return reply.status(401)
                .send({
                    success:true,
                    message:"applications not found",
                    data:{}
                })
        }


        return reply.status(200)
            .send({
                success:true,
                message:"applications found",
                data:applications
            })
    }
    catch (err){
        return  ErrorResponse(err,reply)
    }

}