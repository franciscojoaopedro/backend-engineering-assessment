import {FastifyReply, FastifyRequest} from "fastify";
import create_user_service from "../../services/user/create_user_service";

class Create_user_controller {
    async execute(request:FastifyRequest,reply:FastifyReply):Promise<FastifyReply> {
        const data=request.body;
        const service=await create_user_service.execute(data)

        return  reply.code(200)
            .send(service);

    }
}