import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserRole } from "../schema/user.schema";

// Dto para uso en validaciones de campos al crear un nuevo user
export class UserDto{

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