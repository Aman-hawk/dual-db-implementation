/* eslint-disable prettier/prettier */
 
 
// src/user/controller/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user/service/user/user.service';
import { CreateUserDto } from './user/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
     
    return this.userService.createUser(dto);
  }
}
