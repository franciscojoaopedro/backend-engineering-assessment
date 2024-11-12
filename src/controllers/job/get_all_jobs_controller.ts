import {FastifyReply, FastifyRequest} from "fastify";
import prisma from "../../infrastructure/db/prisma";
import {ErrorResponse} from "../../shared/utils/errorResponseController";

class GetAllJobController {
    async execute(request:FastifyRequest, reply:FastifyReply): Promise<FastifyReply> {
        const {
            search,
            page = 1,
            limit = 10,
            jobTitle,
            companyName
        } = request.query as any;

        const skip = (page - 1) * limit;
        const take = Number(limit);
        try

        {


            const where: any = {};

            if (search) {
                where.OR = [
                    { title: { contains: search, mode: 'insensitive' } },
                    { company: { name: { contains: search, mode: 'insensitive' } } }
                ];
            }

            if (jobTitle) {
                where.title = { contains: jobTitle, mode: 'insensitive' };
            }

            if (companyName) {
                where.company = { name: { contains: companyName, mode: 'insensitive' } };
            }
            

            const jobs = await prisma.job.findMany({
                where,
                include: {
                    company: true
                },
                skip,
                take,
                orderBy:{
                    createdAt:"desc"
                }
            });
            const totalJobs = await prisma.job.count({ where });

            return reply.status(200).send({
                success: true,
                message: "All jobs retrieved successfully",
                data: {
                    jobs,
                    pagination: {
                        total: totalJobs,
                        page: Number(page),
                        limit: take,
                        totalPages: Math.ceil(totalJobs / take)
                    }
                }
            });
        }

        catch (error) {
            return ErrorResponse(error,reply)
        }
    }
}

const get_all_job_controller=new GetAllJobController()
export  default( get_all_job_controller)