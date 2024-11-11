import {FastifyReply} from "fastify";


 export function ErrorResponse(err:unknown,reply:FastifyReply){
    const error= err instanceof  Error
    return   reply.code(500).send({
        success:false,
        error:error?err.name:"Internal Server Error",
        message:error?err.message:"Internal Server Error",

    })

}