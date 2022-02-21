import { IsString, MinLength, MaxLength, Matches, IsEmail, IsNumber } from "class-validator";

export class LoginCredentialsDto{
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string;

    @IsEmail()
    email: string;
}