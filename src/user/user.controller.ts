import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('/create')
    async create(@Body() createUser: any){
        return this.userService.create(createUser);
    }
}
