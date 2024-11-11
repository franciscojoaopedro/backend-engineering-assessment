import {FastifyReply, FastifyRequest} from "fastify";
import create_user_service from "../../core/services/user/create_user_service";
import {CreateUserDto} from "../../types/entities/user.types";
import Bcrypt from "../../shared/utils/useBycriptJs";
import usePrisma from "../../shared/helpers/usePrisma";
import {ErrorResponse} from "../../shared/utils/errorResponseController";

class Create_company_controller {
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
             return  ErrorResponse(err,reply)
        }

    }
}

const create_user_controller=new Create_company_controller();
export default (create_user_controller);