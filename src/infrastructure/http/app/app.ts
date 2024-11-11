import Fastify from 'fastify'
import cors from '@fastify/cors'

const app =Fastify({
    logger:true
})


app.register(cors, {
    origin: "*",
});

app.get("/",(request, reply)=>{
    reply.code(200).send({
        message:"Welcome to the API DevTest",

    })
})


export default app;