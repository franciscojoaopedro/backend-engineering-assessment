import  {createTransport} from "nodemailer"




export const transport = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "myriam.huel@ethereal.email",
        pass: "bZwUn7D3e1zSsYX2Ae"
    }
});