import {FastifyInstance} from "fastify";
import auth_user_controller from "../../controllers/auth/auth_user_controller";
import reset_password_user_controller from "../../controllers/auth/reset_password_user";
import redefine_password_user_controller from "../../controllers/auth/redefine_passaword_user";
import redefine_password_company_controller from "../../controllers/auth/company/redefine_passaword_company";
import reset_password_company_controller from "../../controllers/auth/company/reset_password_company";
import auth_company_controller from "../../controllers/auth/company/auth_company_controller";

export default   function authRoutes (routes:FastifyInstance)  {
    routes.post("/user",auth_user_controller.execute);
    routes.post("/user/reset-password",reset_password_user_controller.execute);
    routes.put("/user/redefine-password/:token",redefine_password_user_controller.execute);


    routes.post("/company", auth_company_controller.execute);
    routes.post("/company/reset-password",  reset_password_company_controller.execute);
    routes.put("/company/redefine-password/:token", redefine_password_company_controller.execute);
}
