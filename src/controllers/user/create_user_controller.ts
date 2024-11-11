import {FastifyReply, FastifyRequest} from "fastify";
import create_user_service from "../../core/services/user/create_user_service";
import {CreateUserDto} from "../../types/entities/user.types";
import Bcrypt from "../../shared/utils/useBycriptJs";
import usePrisma from "../../shared/helpers/usePrisma";

class Create_user_controller {
    async execute(request:FastifyRequest,reply:FastifyReply):Promise<FastifyReply> {
        const {
            gender,
            name,
            password,
            email,
            age,
            country,
            phone
        }=request.body as CreateUserDto;


        try{

            const {verifyUserExisted}=usePrisma()
            const {hashPassword}=Bcrypt()
            if(await verifyUserExisted(email)){
                return reply.code(200).send({
                    success:false,
                    message:"email already exists"
                })
            }
            const user=await create_user_service.execute({
            email,
            name,
            password: await  hashPassword(password),
            gender,
            age,
            country,
            phone
        })
        return  reply.code(200)
            .send({
                success:true,
                message:"user created",
                data:user
            });
        }
        catch (err){
            const error= err instanceof  Error
            return reply.code(500).send({
                success:false,
                error:error?err.name:"Internal Server Error",
                message:error?err.message:"Internal Server Error",

            })
        }

    }
}

const create_user_controller=new Create_user_controller();
export default (create_user_controller);