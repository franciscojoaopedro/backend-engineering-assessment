import {FastifyInstance} from "fastify";
import get_all_company_controller from "../../controllers/company/get_all_company_controller";
import get_company_controller from "../../controllers/company/get_company_controller";
import create_company_controller from "../../controllers/company/create_company_controller";


export  default  function  companyRoutes(routes:FastifyInstance) {
    routes.post("/create",create_company_controller.execute);
    routes.get("/:idCompany",get_company_controller.execute);
    routes.get("/all",get_all_company_controller.execute);
}