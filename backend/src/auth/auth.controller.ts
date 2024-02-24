import { Controller ,Post,Body, HttpException, UseGuards,Get} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { LocalGuard } from './guards/local.guard';

@Controller('/auth')
export class AuthController {
    constructor(private readonly usersService: AuthService) {}

    @Post('/login')
    @UseGuards(LocalGuard)
    login(@Body() authPayload:AuthPayloadDto){
     const user = this.usersService.validateUser(authPayload);
     if(!user) throw new HttpException('Invalid Credentials', 401);
     return user;
    }

    @Get('status')
    status(@Req() req: Request){
        req.user
    }
}
