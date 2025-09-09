import { IsNotEmpty, IsNumber } from "class-validator"

export class UserCreateDto{
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNumber()
    age: number;

}