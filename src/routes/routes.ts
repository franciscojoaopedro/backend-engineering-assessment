import {
    FastifyInstance,
}from "fastify";
import userRoutes from "./user/user.routes";
import authRoutes from "./auth/auth_routes";
import favoriteRoutes from "./favorite/favorite";


const routes=(routes:FastifyInstance)=>{
    routes.register(userRoutes,{
        prefix:"/user",
        logLevel:"trace",

    })
    routes.register(authRoutes,{
        prefix:"/auth",
        logLevel:"trace",
    })

    routes.register(favoriteRoutes,{
        prefix:"/favorite",
        logLevel:"trace",
    })
    routes.register(favoriteRoutes,{
        prefix:"/job",
        logLevel:"trace",
    })

    routes.register(favoriteRoutes,{
        prefix:"/application",
        logLevel:"trace",
    })

    routes.register(favoriteRoutes,{
        prefix:"/company",
        logLevel:"trace",
    })
}

export default routes;