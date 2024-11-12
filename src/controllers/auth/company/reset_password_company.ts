import {FastifyReply, FastifyRequest} from "fastify";
import usePrisma from "../../../shared/helpers/usePrisma";
import useJwt from "../../../shared/helpers/useJwt";


class ResetPasswordCompanyController {

    async execute(request:FastifyRequest,reply:FastifyReply){
        const {email} = request.body as {email:string};
        try{
            const {verifyCompanyLogin}=usePrisma()
            const {generateTokenResetPassword}=useJwt()
            const company=await verifyCompanyLogin(email)
            if(!company){
                return   reply.code(401).send({
                    success:false,
                    message:"company not existed"
                })
            }
            const data={
                id:company.id,
                email:company.email,
                name:company.name,
                website:company.website
            }
            const token=await generateTokenResetPassword(data)
            const resetLink=`http://localhost:5000/resetPassword?token=${token}`;


            return   reply.code(200).send({
                success:true,
                message:"link  reset password sent successfully",
                token:resetLink
            })

        }
        catch(err){
            const error= err instanceof  Error
            return reply.code(500).send({
                success:false,
                error:error?err.name:"Internal Server Error",
                message:error?err.message:"Internal Server Error",

            })
        }
    }
}

const reset_password_company_controller= new  ResetPasswordCompanyController()
export  default  reset_password_company_controller