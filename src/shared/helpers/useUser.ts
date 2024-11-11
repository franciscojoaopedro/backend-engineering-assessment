import userRepositoryPrisma from "../../infrastructure/repository/user_repository_prisma";
import CreateUserUseCase from "../../usecases/user/create_user_use_case";


export default  function  useUser(){
    const createUser=CreateUserUseCase.with(userRepositoryPrisma);





    return {
        createUser
    }
}