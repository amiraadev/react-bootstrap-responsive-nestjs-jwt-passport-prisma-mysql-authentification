import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from '../dto/auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  validate(email: string, password: string) {
    console.log('Inside LocalStrategyyyyyyyy');
    // this.authService.testUser();
    // const user = this.authService.validateUser({ username, password });
    // if (!user) throw new UnauthorizedException();
    // return user;
  }
}





