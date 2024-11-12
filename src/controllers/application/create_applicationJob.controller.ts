import {FastifyReply, FastifyRequest} from "fastify";
import {ErrorResponse} from "../../shared/utils/errorResponseController";
import prisma from "../../infrastructure/db/prisma";
import {transport} from "../../services/email/config";


class  CreateApplicationJobController {


    async  execute(request:FastifyRequest,reply:FastifyReply):Promise<FastifyReply> {

        const {idUser,idJob}=request.params as {idUser:string,idJob:string}

        try{

            const user= await  prisma.user.findUnique({
                where:{id:idUser},
            })

            if(!user){
                return  reply.code(400)
                    .send({
                        success:false,
                        message:"user not found"
                    })
            }

            const job= await  prisma.job.findUnique({
                where:{id:idJob},
            })

            if(!job){
                return  reply.code(400)
                    .send({
                        success:false,
                        message:"job not found"
                    })
            }
            const application=await  prisma.application.create({
                data:{
                    job:{
                        connect:{id:idJob}
                    },
                    user:{
                        connect:{
                            id:idUser
                        }
                    }
                }
            })
        const sendMail= await  transport.sendMail({
            from:"myriam.huel@ethereal.emai",
            to:user.email,
            subject:"Appy job ",
            html:`<div>   
                                <h2> job ${job.title}</h2>
                                <p>description : ${job.description}  </p>
                                </div>
                        `
        })
        console.log("Message sent: %s", sendMail.envelope);


            return  reply.status(201)
                .send({
                    success:true,
                    message:"apply job successfully",
                })
        }



    catch(err){
            return ErrorResponse(err,reply)
        }
    }
}


export  const createApplicationJobController=new  CreateApplicationJobController()