import prisma from "../../infrastructure/db/prisma";


export  default  function  usePrisma(){
    async function  verifyUserExisted(email:string){
        const user=await  prisma.user.findUnique({
            where:{email:email},
        })
        return !!user
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
    return{
        verifyUserExisted,
        verifyUserLogin
    }
}