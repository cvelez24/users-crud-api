import { Body, Controller, Get, Param, Post, Put, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService){}

    // Controlador que utiliza el servicio para crear usuarios nuevos
    @Post('/create')
    async create(@Body(new ValidationPipe()) createUser: UserDto){
        return this.userService.create(createUser);
    }

    @Put('/update:id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) User: UserDto){
        return this.userService.update(id, User)
    }

    @Get('users')
    async findAll(){
        return this.userService.findAll();
    }

    @Get('/users:id')
    async findOne(@Param('id') id: string){
        return this.userService.findOne(id);
    }

    @Delete('/delete:id')
    async deleteById(@Param('id') id: string){
        return this.userService.deleteById(id);
    }
}
