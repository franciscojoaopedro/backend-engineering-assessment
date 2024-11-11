import Fastify from 'fastify'
import cors from '@fastify/cors'
import routes from "../../../routes/routes";

const app =Fastify({logger:true})


app.register(cors, {
    origin: "*",
});

app.get("/",(request, reply)=>{
    reply.code(200).send({message:"Welcome to the API DevTest",})
})

app.get("/api",(request, reply)=>{
    reply.code(200).send({message:"Welcome to the API DevTest",})
})
app.register(routes,{
    prefix:"/api"
})


export default app;