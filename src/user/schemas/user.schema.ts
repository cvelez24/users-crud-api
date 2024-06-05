import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// Define el rol del usuario
export enum UserRole {
  ADMIN = 'ADMIN',
  COMMON_USER = 'COMMON_USER',
  GUEST = 'GUEST',
}

@Schema({})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop({
    default: UserRole.GUEST,
    required: true,
  })
  role: UserRole;
}

// Define la creación del modelo en la base de datos
export const userSchema = SchemaFactory.createForClass(User);
