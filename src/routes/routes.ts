import {
    FastifyInstance,
}from "fastify";
import userRoutes from "./user/user.routes";
import authRoutes from "./auth/auth_routes";


const routes=(routes:FastifyInstance)=>{
    routes.register(userRoutes,{
        prefix:"/user",
        logLevel:"trace",

    })
    routes.register(authRoutes,{
        prefix:"/auth",
        logLevel:"trace",
    })
}

export default routes;