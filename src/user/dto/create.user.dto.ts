import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserRole } from "../schema/user.schema";


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

    @IsEnum(UserRole)
    role: UserRole;
}