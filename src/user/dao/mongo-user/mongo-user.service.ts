/* eslint-disable prettier/prettier */
// src/user/dao/mongo-user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserMongo, UserMongoDocument } from '../../entities/user.mongo';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class MongoUserService {
  constructor(
     
    @InjectModel(UserMongo.name) private model: Model<UserMongoDocument>,
  ) {}

  async create(user: CreateUserDto) {
     
    return await new this.model(user).save();
  }
}
