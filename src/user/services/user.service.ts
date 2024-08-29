import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<CreateUserDto[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<CreateUserDto> {
    return await this.userModel.findById(id);
  }

  async create(user: CreateUserDto): Promise<CreateUserDto> {
    return await this.userModel.create(user);
  }

  async update(id: string, user: UpdateUserDto): Promise<UpdateUserDto> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteById(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
