import {FastifyInstance} from "fastify";

import get_all_favorite_controller from "../../controllers/favorite/get_all_favorite_controller";
import add_favorite_controller from "../../controllers/favorite/add_favorite_controller";
import add_job_favorite_controller from "../../controllers/favorite/add_favorite_controller";




export  default  function favoriteRoutes (routes:FastifyInstance) {
    routes.post("/add",add_job_favorite_controller.execute)
    routes.get("/user/:idUser",get_all_favorite_controller.execute)
}