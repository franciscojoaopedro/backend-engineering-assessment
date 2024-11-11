import  {FastifyInstance} from "fastify";
import create_user_controller from "../../controllers/user/create_user_controller";
import get_all_users_controller from "../../controllers/user/get_all_users_controller";
import get_user_controller from "../../controllers/user/get_user_controller";


const userRoutes=(routes:FastifyInstance)=>{
    routes.post("/create",create_user_controller.execute)
    routes.get("/all", get_all_users_controller.execute)
    routes.get("/:id",get_user_controller.execute)
};
export default userRoutes;