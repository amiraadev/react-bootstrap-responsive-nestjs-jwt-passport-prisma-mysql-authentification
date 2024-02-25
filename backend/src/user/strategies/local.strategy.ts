import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  validate(username: string, password: string) {
    //   console.log({ username: username, password: password });
    console.log('Inside LocalStrategyyyyyyyy');
    this.userService.testUser();
    const user = this.userService.validateUser({ username, password });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}