import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginCredentialsDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private jwtService:JwtService
    ){

    }
    signUp(authCredentials:AuthCredentialsDto){
        return this.userRepository.signUp(authCredentials);
    }

    async signIn(loginCredentialsDto:LoginCredentialsDto) : Promise<{ accessToken:string }>{
        const { email, id } =  await this.userRepository.validateUserPassword(loginCredentialsDto);

        if(!email){
            throw new UnauthorizedException("Invalid Credentials");
        }

        const payload = { email, id };
        const accessToken = this.jwtService.sign(payload);

        return { accessToken };
    }
}
