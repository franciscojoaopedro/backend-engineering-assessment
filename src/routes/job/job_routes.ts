import {FastifyInstance} from "fastify";

import get_job_controller from "../../controllers/job/get_job_controller";
import get_all_job_controller from "../../controllers/job/get_all_jobs_controller";
import add_job_controller from "../../controllers/job/add_job_controller";


export  default  function  jobRoutes(routes:FastifyInstance) {
    routes.post("/create",add_job_controller.execute);
    routes.get("/:idJob", get_job_controller.execute);
    routes.get("/all",get_all_job_controller.execute);
}