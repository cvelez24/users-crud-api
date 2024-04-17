import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService){}

    // Controlador que utiliza el servicio para crear usuarios nuevos
    @Post('/create')
    async create(@Body(new ValidationPipe()) createUser: CreateUserDto){
        return this.userService.create(createUser);
    }
}
