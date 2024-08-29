import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export type UserRole = 'ADMIN' | 'COMMON_USER' | 'GUEST';

@Schema({})
export class User {
  @Prop({ required: true })
  @IsString()
  name: string;

  @Prop()
  @IsString()
  lastName: string;

  @Prop()
  @IsString()
  email: string;

  @Prop()
  @IsString()
  phone: string;

  @Prop({ required: true })
  @Type(() => String)
  role: UserRole;
}

// Define la creación del modelo en la base de datos
export const userSchema = SchemaFactory.createForClass(User);
