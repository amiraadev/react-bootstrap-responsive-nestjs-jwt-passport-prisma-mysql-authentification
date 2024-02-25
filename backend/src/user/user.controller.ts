import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }
}
