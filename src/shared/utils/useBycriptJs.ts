import bcrypt from "bcrypt"

export default function  Bcrypt(){
    async  function hashPassword(password:string){
        return await bcrypt.hash(password, 12);
    }

    async  function verifyPassword(password:string,hashedPassword:string){
        return await bcrypt.compare(password, hashedPassword);
    }

    return{
        hashPassword,
        verifyPassword
    }
}