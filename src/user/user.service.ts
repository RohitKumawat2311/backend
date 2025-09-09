import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocment } from './schemas/user.schema';
import { Model } from 'mongoose';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async getUserAll(): Promise<User[]>{
        return this.userModel.find().exec();
    }

    async create(userCreateDto: UserCreateDto): Promise<User>{
        return this.userModel.create(userCreateDto);
    }

    async getUserById(id: string){
        const user_data = await this.userModel.findById(id);

        if (!user_data) {
        throw new NotFoundException('User not found');
        }
        return user_data;
    }

    async updateUser(id: string, userUpdateDto: UserUpdateDto): Promise<User | null>{
        return this.userModel.findByIdAndUpdate(id, userUpdateDto,{new: true});
    }

    async deleteUser(id: string): Promise<User | null>{
        return this.userModel.findByIdAndDelete(id);
    }
}
