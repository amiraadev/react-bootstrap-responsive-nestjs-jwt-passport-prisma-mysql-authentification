import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

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

constructor(private jwtService:JwtService ){}

  testService() {
    console.log("success");
    
  }

  validateUser({username,password}: AuthPayloadDto) {
    
     const findUser = fakeUsers.find((user) => user.username === username);
     if(!findUser){
        return null;
     }
     if(password === findUser.password){
        const {password,...userWithoutPassord} = findUser;
       return this.jwtService.sign(userWithoutPassord)
     }
  }
}
