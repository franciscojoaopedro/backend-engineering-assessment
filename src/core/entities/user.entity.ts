import {CreateUserDto} from "../../types/entities/user.types";


export  default   class UserEntity{
    private constructor(private  readonly  user:CreateUserDto ) {}

    public  static  create(user:CreateUserDto ){
        return new UserEntity(user)
    }

    public  static  with(user:CreateUserDto ){
        return UserEntity.create(user)
    }
    public  get getUser (){
        return this.user;
    }
}


