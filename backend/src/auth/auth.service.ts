 import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async register({ username, email, password }: SignUpDto) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return userExists;
    }

    const hashedPasswordToStore = await bcrypt.hash(password, 10);
    const user = await this.prismaService.user.create({
      data: {
        username,
        email,
        hashedPassword: hashedPasswordToStore,
      },
    });

    const { hashedPassword, ...userWithoutPassword } = user;
    return this.jwtService.sign(userWithoutPassword);
  }

  async validateUser({ email, password }: SignInDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new HttpException('Invalid Credentials', 400);
    }
    const hashedPasswordToStore = await user.hashedPassword;
    const isValidPassword = await bcrypt.compare(password, hashedPasswordToStore);
    if (!isValidPassword) {
      throw new HttpException('Invalid Credentials', 400);
    }
    const { hashedPassword, ...userWithoutPassword } = user;
    return this.jwtService.sign(userWithoutPassword);
  }


  async getUser(req: Request) {
    try {
      const cookie = req.cookies['token'];
      const data = await this.jwtService.verify(cookie, {
        secret: process.env.JWT_SECRET,
      });

     

      const user = await this.prismaService.user.findUnique({
        where: { id: data.id },
        select: { email: true }, //return only email
      });

      return user;
    } catch (error) {
      throw new BadRequestException('An unexpected error occurred !');
    }
  }


  async singOut(res: Response) {
    res.clearCookie('token');
    return res.send({ message: 'Logout successfully' });
  }
}




