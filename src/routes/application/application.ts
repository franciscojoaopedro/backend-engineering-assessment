import {FastifyInstance} from "fastify";
import {createApplicationJobController} from "../../controllers/application/create_applicationJob.controller";
import getApplicationJob from "../../controllers/application/get_applicationJob.controller";
import getAllApplicationJob from "../../controllers/application/get_all_applications_user.controller";


export  default  function  applicationRoutes (routes:FastifyInstance){
    routes.post("/apply",createApplicationJobController.execute);
    routes.get("/:id",getApplicationJob);
    routes.get("/user/:idUser",getAllApplicationJob);
}