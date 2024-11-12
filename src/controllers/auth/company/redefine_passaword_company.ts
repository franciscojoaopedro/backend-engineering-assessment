import {FastifyReply, FastifyRequest} from "fastify";
import jwt from "jsonwebtoken";
import  dotenv from "dotenv"
import prisma from "../../../infrastructure/db/prisma";
import Bcrypt from "../../../shared/utils/useBycriptJs";
dotenv.config()
const JWT_SECRET_RESET_PASSWORD=process.env.JWT_SECRET_RESET_PASSWORD!
class RedefinePasswordCompanyController {

    async execute(request:FastifyRequest,reply:FastifyReply){
        const {token}=request.params as {token:string};
        const {newPassword} = request.body as {newPassword:string};
        try{
            const decoded=jwt.verify(token,JWT_SECRET_RESET_PASSWORD) as {id:string,email:string}
            const {hashPassword}=Bcrypt()
            const hashedPassword =  await  hashPassword(newPassword);
            await prisma.user.update({
                where: { id: decoded.id },
                data: { password: hashedPassword },
            });

            return   reply.code(200).send({
                success:true,
                message:"new password defined successfully",
            })
        }
        catch(err){
            const error= err instanceof  Error
            return reply.code(400).send({
                success:false,
                message:"Token inválido ou expirado.",

            })
        }
    }
}

const redefine_password_company_controller= new RedefinePasswordCompanyController()
export  default  redefine_password_company_controller