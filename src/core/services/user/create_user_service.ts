


class Create_user_service{

    async  execute(data:any){

        console.log(data);
    }
}

const create_user_service = new Create_user_service();

export  default (create_user_service)