import {FastifyReply, FastifyRequest} from "fastify";
import prisma from "../../infrastructure/db/prisma";
import {ErrorResponse} from "../../shared/utils/errorResponseController";

class GetJobController {
    async execute(request:FastifyRequest, reply:FastifyReply): Promise<FastifyReply> {

        const {idJob}=request.params as {idJob:string}
        try

        {
            const job =await  prisma.job.findUnique({
                where:{id:idJob},
                include:{
                    company:true
                }
            })
            return  reply.status(200)
                .send({
                    success:true,
                    message:"job found",
                    data:job
                })
        }

        catch (error) {
            return ErrorResponse(error,reply)
        }
    }
}

const get_job_favorite_controller=new GetJobController()
export  default( get_job_favorite_controller)