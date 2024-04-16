import { Controller, Get } from "@nestjs/common";

@Controller()
export class UserController{

    @Get('/users')
    getAllUsers(){
        /**
         * Aquí puedo incluir cualquier tipo de lógica como conexiones a bd o peticiones a otras API
         */
        return 'Lista de usuarios'
    }
}