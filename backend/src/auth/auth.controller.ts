import { Controller ,Post,Body, HttpException, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
    constructor(private readonly usersService: AuthService) {}

    @Post('/login')
    @UseGuards(AuthGuard('local'))
    login(@Body() authPayload:AuthPayloadDto){
     const user = this.usersService.validateUser(authPayload);
     if(!user) throw new HttpException('Invalid Credentials', 401);
     return user;
    }
}
