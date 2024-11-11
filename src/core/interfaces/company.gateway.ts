


export interface CompanyGateway{
    createUser(company:string):Promise<void>;
    getUserById(id:string):Promise<void>;
    getUserByEmail(id:string):Promise<void>;
    getAllUsers():Promise<void>;
}