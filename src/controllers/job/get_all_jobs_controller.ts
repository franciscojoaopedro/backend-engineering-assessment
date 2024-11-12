import {FastifyReply, FastifyRequest} from "fastify";
import prisma from "../../infrastructure/db/prisma";
import {ErrorResponse} from "../../shared/utils/errorResponseController";

class GetAllJobController {
    async execute(request:FastifyRequest, reply:FastifyReply): Promise<FastifyReply> {

        try

        {
            const jobs =await  prisma.job.findMany({
               include:{
                   company:true
               }
            })
            return  reply.status(200)
                .send({
                    success:true,
                    message:"all jobs",
                    data:jobs
                })
        }

        catch (error) {
            return ErrorResponse(error,reply)
        }
    }
}

const get_all_job_favorite_controller=new GetAllJobController()
export  default( get_all_job_favorite_controller)