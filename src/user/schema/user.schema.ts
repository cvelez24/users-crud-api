import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// Define el rol del usuario
export enum UserRole  {
    ADMIN = 'ADMIN',
    COMMON_USER = 'COMMON_USER',
    GUEST = 'GUEST'
}
// Modelo de usuario con sus respectivas propiedades
@Schema()
export class User {

    @Prop()
    name: string;

    @Prop()
    lastName: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop({ default: UserRole.GUEST })
    role: UserRole;
}

// Define la creación del modelo en la base de datos
export const UserSchema = SchemaFactory.createForClass(User);