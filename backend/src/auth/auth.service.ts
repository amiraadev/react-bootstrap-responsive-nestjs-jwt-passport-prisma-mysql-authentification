import { Injectable } from '@nestjs/common';
import { AuthPayloadDto, SignUpDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

const fakeUsers = [
  {
    id: 1,
    username: 'mounir',
    password: 'password',
  },
  {
    id: 2,
    username: 'anson',
    password: 'password',
  },
];
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  constructor(private prismaService: Prisma) {}


  register({ username, email, password }: SignUpDto) {
    const user = this.prismaService.findUmi
  }

  validateUser({ username, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) {
      return null;
    }
    if (password === findUser.password) {
      const { password, ...userWithoutPassord } = findUser;
      return this.jwtService.sign(userWithoutPassord);
    }
  }
}
