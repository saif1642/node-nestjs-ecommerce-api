import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { LoginCredentialsDto } from "./dto/login.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async signUp(authCredentialsDto:AuthCredentialsDto) : Promise<any>{
        const { name, password, email, age, gender} = authCredentialsDto;

        const user = new User();
        user.name = name;
        user.email = email;
        user.age = age;
        user.gender = gender;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password,user.salt);


        try{
            await user.save();

            return {
               'success': true,
               'message': 'User Registration Successfull'
            }

        }catch(err){
            if(err.code === '23505'){
                throw new ConflictException("Username already exits");
            }else{
                throw new InternalServerErrorException();
            }
        }
        

    }

    async validateUserPassword(loginCredentialsDto:LoginCredentialsDto) : Promise<any>{
        const { email , password } = loginCredentialsDto;

        const user = await User.findOne({email});

        if(user && await user.validatePassword(password)){
            return {
                email:user.email,
                id:user.id
            };
        }else{
            return null;
        }


    }

    private async hashPassword(password: string,salt: string) : Promise<string>{
        return await bcrypt.hash(password,salt);
    }

}