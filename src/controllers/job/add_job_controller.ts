import {FastifyReply, FastifyRequest} from "fastify";
import usePrisma from "../../shared/helpers/usePrisma";
import prisma from "../../infrastructure/db/prisma";
import {ErrorResponse} from "../../shared/utils/errorResponseController";



type JobType= "internship"| "volunteer"| "full_time"| "contract"| "temporary"| "part_time";


interface  IAddJobController {
    idCompany:string,
    title:string,
    jobtype:JobType,
    location:string,
    description:string,
    salary:string,
    workmode:"hybrid"|"remote"|"on_site"
}

class AddJobController {
    async execute(request:FastifyRequest, reply:FastifyReply): Promise<FastifyReply> {
        try{
            const {idCompany,
                title,
                jobtype,
                location,
                description,
                salary,
                workmode
            }= request.body  as IAddJobController;
            const {verifyCompanyExisted}=usePrisma()
            if(! await verifyCompanyExisted(idCompany)){
                return  reply.code(401)
                    .send({
                        success:false,
                        message:"company not existed"
                    })
            }
            const job =await  prisma.job.create({
                data:{
                    company:{
                        connect:{
                            id:idCompany
                        }
                    },
                    title,
                    jobtype,
                    location,
                    description,
                    salary: Number(salary),
                    workmode
                }
            })
            return  reply.status(200)
                .send({
                    success:true,
                    message:"job added",
                    data:job
                })
        }

        catch (error) {
            return ErrorResponse(error,reply)
        }
    }
}

const add_job_controller=new AddJobController()
export  default( add_job_controller)