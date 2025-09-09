import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User, UserDocment } from './schemas/user.schema';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async getUserAll(): Promise<User[]>{
        return this.userService.getUserAll();
    }

    @Post()
    async createUser(@Body() userCreateDto: UserCreateDto): Promise<User>{
        return this.userService.create(userCreateDto);
    }

    @Get(':id')
    async getUserById(@Param('id') id : string){
        return this.userService.getUserById(id);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string,@Body() userUpdateDto: UserUpdateDto): Promise<User | null>{
        return this.userService.updateUser(id, userUpdateDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string){
        return this.userService.deleteUser(id);
    }
}
