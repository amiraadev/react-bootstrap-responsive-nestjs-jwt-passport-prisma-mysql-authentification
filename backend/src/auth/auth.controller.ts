import {  Controller, Get, Post, Req, UseGuards,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('/auth')
export class AuthController {
    constructor(private readonly usersService: AuthService) {}

  @Post('register')
  register(@Body() req: Request) {
    return req.user;
  }
  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request) {
      console.log('Inside AuthController status method');
      console.log(req.user);
      return req.user;
    }
}
