import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUser() {
    return this.userService.findAll();
  }

  @Post()
  createUser() {
    return this.userService.create();
  }

}
