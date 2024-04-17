import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    // Método para crear un nuevo usuario
    async create(user: UserDto) {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async update(id: string, user: UserDto){
        return this.userModel.findByIdAndUpdate(id, user, {
            new: true,
        }).exec();
    }

    async findAll(){
        return this.userModel.find().exec();
    }

    async findOne(id: string){
        return this.userModel.findById(id).exec();
    }

    async deleteById(id: string){
        return this.userModel.findByIdAndDelete(id).exec();
    }
}
