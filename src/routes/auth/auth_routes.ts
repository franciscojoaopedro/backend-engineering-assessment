import {FastifyInstance} from "fastify";
import auth_user_controller from "../../controllers/auth/auth_user_controller";
import reset_password_user_controller from "../../controllers/auth/reset_password_user";
import redefine_password_user_controller from "../../controllers/auth/redefine_passaword_user";


export default   function authRoutes (routes:FastifyInstance)  {
    routes.post("/user",auth_user_controller.execute);
    routes.post("/company",auth_user_controller.execute);
    routes.post("/reset-password-user",reset_password_user_controller.execute);
    routes.post("/redefine-password-user",redefine_password_user_controller.execute);
}
