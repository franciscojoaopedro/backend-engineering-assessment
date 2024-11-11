import jwt from "jsonwebtoken"

import  dotenv from "dotenv"
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET
const JWT_SECRET_RESET_PASSWORD="ujshuhsuhs9uh9h9h982y98299ty892hyiueyh982ye98y8ughui2"
export default function useJwt() {
    async function generateTokenUserLogin(data: any): Promise<string> {
        return jwt.sign(data, JWT_SECRET!)
    }
    async function generateTokenCompanyLogin(data: any):Promise<string> {
        return jwt.sign(data, JWT_SECRET!)
    }
    async function generateTokenResetPassword(data:any):Promise<string> {
        return jwt.sign(data, JWT_SECRET_RESET_PASSWORD,{
            expiresIn:"5m"
        })
    }

    return{
        generateTokenCompanyLogin,
        generateTokenUserLogin,
        generateTokenResetPassword
    }


}