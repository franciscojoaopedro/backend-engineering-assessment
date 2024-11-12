import {
    FastifyInstance,
}from "fastify";
import userRoutes from "./user/user.routes";
import authRoutes from "./auth/auth_routes";
import favoriteRoutes from "./favorite/favorite";
import companyRoutes from "./company/company";
import jobRoutes from "./job/job_routes";
import applicationRoutes from "./application/application";


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
    routes.register(jobRoutes,{
        prefix:"/job",
        logLevel:"trace",
    })

    routes.register(applicationRoutes,{
        prefix:"/application",
        logLevel:"trace",
    })

    routes.register(companyRoutes,{
        prefix:"/company",
        logLevel:"trace",
    })
}

export default routes;