import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { LoginCredentialsDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {

    constructor(
        private authService:AuthService
    ){

    }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto) : Promise<void>{
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) loginCredentialsDto:LoginCredentialsDto): Promise<{ accessToken:string }>{
       return this.authService.signIn(loginCredentialsDto);
    }

}
