import prisma from "../../infrastructure/db/prisma";


export  default  function  usePrisma(){
    async function  verifyUserExisted(email:string){
        const user=await  prisma.user.findUnique({
            where:{email:email},
        })
        return !!user
    }

    async function  verifyJobExisted(id:string){
        const job=await  prisma.job.findUnique({
            where:{id:id},
        })
        return !!job
    }

    async function  verifyCompanyExisted(id:string){
        const job=await  prisma.company.findUnique({
            where:{id:id},
        })
        return !!job
    }

    async  function verifyUserLogin(email:string){
        const user=await  prisma.user.findUnique({
            where:{email:email},
        })
        if(!user){
            return  null
        }
        return user
    }

    async  function verifyCompanyLogin(email:string){
        const company=await  prisma.company.findUnique({
            where:{
                email:email
            },
        })
        if(!company){
            return  null
        }
        return company
    }
    return{
        verifyUserExisted,
        verifyUserLogin,
        verifyJobExisted,
        verifyCompanyExisted,
        verifyCompanyLogin
    }
}