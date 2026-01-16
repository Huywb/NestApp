import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

    constructor(private readonly jwtService: JwtService){}

    async login(data : CreateUserDTO){
        if(!data){
            throw new BadRequestException("Data is not valid")
        }
        const token = await this.jwtService.signAsync({email:data.email})
        if(!token){
            throw new BadRequestException()
        }
        return {
            email: data.email,
            password: data.password,
            token
        }
    }

    async verifileUser(data: CreateUserDTO){
        if(!data.email){
            throw new UnauthorizedException("Email is required")
        }
        return {
            email : data.email,
            password : data.password
        }
    }
}
