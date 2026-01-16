import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

    constructor(private readonly jwtService: JwtService){}

    async findAllUser(){
        return {
            alldata: 'success'
        }
    }
    
    async updateUser(id: string,data : []){
        if(!id){
            throw new BadRequestException()
        }
        return {
            data: id,
            value : data,
            message:"Update data sucess"
        }
    }

    async deleteUser(id: string){
        if(!id){
            throw new BadRequestException()
        }
        return {
            data: id,
            message:"Delete data sucess"
        }
    }
}
