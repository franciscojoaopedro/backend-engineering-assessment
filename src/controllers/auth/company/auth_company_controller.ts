import {FastifyReply, FastifyRequest} from "fastify";
import usePrisma from "../../../shared/helpers/usePrisma";
import useJwt from "../../../shared/helpers/useJwt";
import Bcrypt from "../../../shared/utils/useBycriptJs";


class AuthCompanyController {

    async execute(request:FastifyRequest,reply:FastifyReply){
        const {email, password} = request.body as {email:string,password:string};
        try{
            const {verifyCompanyLogin}=usePrisma()
            const {generateTokenCompanyLogin}=useJwt()
            const {verifyPassword}=Bcrypt()
            const company=await verifyCompanyLogin(email)
            if(!company){
                return   reply.code(401).send({
                    success:false,
                    message:"company not existed"
                })
            }
            if(!await verifyPassword(password,company.password)){
                return   reply.code(401).send({
                    success:false,
                    message:"password incorrect"
                })
            }

            const data={
                id:company.id,
                email:company.email,
                name:company.name,

            }

            const token=await generateTokenCompanyLogin(data)
            return   reply.code(200).send({
                success:true,
                message:"login success",
                token:token
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

const auth_company_controller= new AuthCompanyController()
export  default  auth_company_controller