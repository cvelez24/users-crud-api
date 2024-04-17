import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    // Método para crear un nuevo usuario
    async create(user: any) {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }
}
