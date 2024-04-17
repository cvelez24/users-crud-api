import { Body, Controller, Get, Param, Post, Put, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService){}

    // Controlador para crear usuarios nuevos
    @Post('/create')
    async create(@Body(new ValidationPipe()) createUser: UserDto){
        return this.userService.create(createUser);
    }

    //Controlador para modificar usuarios
    @Put('/update:id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) User: UserDto){
        return this.userService.update(id, User)
    }

    //Controlador para recuperar todos los usuarios existentes en la bd
    @Get('users')
    async findAll(){
        return this.userService.findAll();
    }

    // Controlador para recuperar un user específico
    @Get('/users:id')
    async findOne(@Param('id') id: string){
        return this.userService.findOne(id);
    }

    // Controlador para eliminar un usuario específico
    @Delete('/delete:id')
    async deleteById(@Param('id') id: string){
        return this.userService.deleteById(id);
    }
}
