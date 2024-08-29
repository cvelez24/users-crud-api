import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  ValidationPipe,
  UsePipes,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@UsePipes(new ValidationPipe({ transform: true }))
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  //Endpoint para recuperar todos los usuarios existentes
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return await this.userService.findAll();
  }

  // Endpoint para recuperar un user específico
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }

  //Endpoint para modificar usuarios
  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() User: UpdateUserDto) {
    return await this.userService.update(id, User);
  }

  // Endpoint para eliminar un usuario específico
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: string) {
    await this.userService.deleteById(id);
  }
}
