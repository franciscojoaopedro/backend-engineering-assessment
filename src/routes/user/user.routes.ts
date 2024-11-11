import  {FastifyInstance} from "fastify";
import create_user_controller from "../../controllers/user/create_user_controller";


const userRoutes=(routes:FastifyInstance)=>{
    routes.get("/create",create_user_controller.execute)
    routes.post("/create",create_user_controller.execute)
    routes.get("/getUser",create_user_controller.execute)

};




export default userRoutes;