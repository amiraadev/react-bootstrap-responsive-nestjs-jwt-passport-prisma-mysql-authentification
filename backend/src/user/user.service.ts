import { Injectable } from '@nestjs/common';
import { UserPayloadDto } from './dto/user.dto';

const fakeUsers = [
  {
    id: 1,
    username: 'anson',
    password: 'password',
  },
  {
    id: 2,
    username: 'jack',
    password: 'password123',
  },
];

@Injectable()
export class UserService {
  testUser() {
    console.log('the test is working');
  }
  validateUser({ username, password }: UserPayloadDto) {
    console.log('inside validate user');
    const findUser = fakeUsers.find((user) => user.username === username);

    if (!findUser) return null;
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return user;
    }
  }
}
