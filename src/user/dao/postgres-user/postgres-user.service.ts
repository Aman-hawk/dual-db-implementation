/* eslint-disable prettier/prettier */
// src/user/dao/postgres-user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class PostgresUserService {
   
  constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) {}

  async create(user: CreateUserDto) {
     
    return await this.repo.save(user);
  }
}
