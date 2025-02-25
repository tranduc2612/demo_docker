import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUser() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() req) {
    return this.userService.create(req);
  }

}
