import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService){}

    // Controlador que utiliza el servicio para crear usuarios nuevos
    @Post('/create')
    async create(@Body() createUser: any){
        return this.userService.create(createUser);
    }
}
