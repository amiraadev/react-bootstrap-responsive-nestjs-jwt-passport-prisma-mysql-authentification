import { Controller ,Post,Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Controller('/auth')
export class AuthController {
    constructor(private readonly usersService: AuthService) {}

    @Post('/login')
    login(@Body() authPayload:AuthPayloadDto){
     return this.usersService.validateUser(authPayload);
    }
}
