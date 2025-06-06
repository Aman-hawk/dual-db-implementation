/* eslint-disable prettier/prettier */
 
// src/user/service/user.service.ts
import { Injectable } from '@nestjs/common';
// Update the import path if the file exists elsewhere, for example:
import { MongoUserService } from '../../dao/mongo-user/mongo-user.service';
// Or, if the file is missing, create it at the expected path.
import { PostgresUserService } from '../../dao/postgres-user/postgres-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private mongoService: MongoUserService,
    private postgresService: PostgresUserService,
  ) {}

  async createUser(user: CreateUserDto) {
     await this.postgresService.create(user);

  // Save to MongoDB
  await this.mongoService.create(user);

  return { message: 'User created in both databases' };
 
  }
}
