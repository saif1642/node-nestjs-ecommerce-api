import { IsString, MinLength, MaxLength, Matches, IsEmail, IsNumber } from "class-validator";

export class AuthCredentialsDto{
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string;

    @IsEmail()
    email: string;

    @IsNumber()
    age: number;

    @MinLength(4)
    @MaxLength(6)
    gender: string;

}