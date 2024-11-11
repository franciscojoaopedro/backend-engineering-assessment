import userRepositoryPrisma from "../../infrastructure/repository/user_repository_prisma";
import CreateUserUseCase from "../../usecases/user/create_user_use_case";
import GetUserByIdUseCase from "../../usecases/user/get_user_by_id_usecase";
import GetAllUsersUseCase from "../../usecases/user/get_all_users_usecase";


export default  function  useUser(){
    const createUserUseCase=CreateUserUseCase.with(userRepositoryPrisma);
    const getUserByIdUseCase=GetUserByIdUseCase.with(userRepositoryPrisma);
    const getAllUsersUseCase=GetAllUsersUseCase.with(userRepositoryPrisma);




    return {
        createUserUseCase,
        getAllUsersUseCase,
        getUserByIdUseCase
    }
}