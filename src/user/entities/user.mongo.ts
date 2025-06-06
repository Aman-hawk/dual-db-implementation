/* eslint-disable prettier/prettier */
// src/user/entities/user.mongo.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserMongoDocument = UserMongo & Document;

@Schema({ collection: 'users' }) // <-- specify collection name
export class UserMongo {
  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const UserMongoSchema = SchemaFactory.createForClass(UserMongo);
