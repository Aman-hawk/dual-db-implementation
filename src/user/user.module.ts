/* eslint-disable prettier/prettier */
// src/user/user.module.ts
import { Module } from '@nestjs/common';
// Make sure the file exists at the specified path, or update the path if necessary
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { PostgresUserService } from './dao/postgres-user/postgres-user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMongo, UserMongoSchema } from './entities/user.mongo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { MongoUserService } from './dao/mongo-user/mongo-user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserMongo.name, schema: UserMongoSchema }]),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UserController],
  providers: [UserService, MongoUserService, PostgresUserService],
})
export class UserModule {}
