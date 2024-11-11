import {FastifyReply, FastifyRequest} from "fastify";
import usePrisma from "../../shared/helpers/usePrisma";
import useJwt from "../../shared/helpers/useJwt";
import Bcrypt from "../../shared/utils/useBycriptJs";


class AuthUserController {

    async execute(request:FastifyRequest,reply:FastifyReply){
        const {email, password} = request.body as {email:string,password:string};
        try{
            const {verifyUserLogin}=usePrisma()
            const {generateTokenUserLogin}=useJwt()
            const {verifyPassword}=Bcrypt()
            const user=await verifyUserLogin(email)
            if(!user){
              return   reply.code(401).send({
                    success:false,
                    message:"user not existed"
                })
            }
            if(!await verifyPassword(password,user.password)){
                return   reply.code(401).send({
                    success:false,
                    message:"password incorrect"
                })
            }



            const data={
                id:user.id,
                email:user.email,
                gender:user.gender,
                age:user.age,
                phone:user.phone,
                country:user.country
            }

            const token=await generateTokenUserLogin(data)
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

const auth_user_controller= new AuthUserController()
export  default  auth_user_controller