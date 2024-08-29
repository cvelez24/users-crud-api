import { IsEmail,  IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserRole } from "../schemas/user.schema";

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsOptional()
    phone?: string;

    @IsNotEmpty()
    role: UserRole;
}