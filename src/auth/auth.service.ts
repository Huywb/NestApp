import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

type AuthInput = {username: string, password: string}
type SignInData = { userId: number, username:string}
type ResutData = {accessToken: string, userId: number, username:string}

@Injectable()
export class AuthService {
    
    constructor(private userService: UserService,
                private jwtService : JwtService
    ){}

    async authenticate(input : AuthInput) : Promise<ResutData>{
        const user = await this.validateUser(input)
        if(!user){
            throw new UnauthorizedException()
        }
        return this.login(user)
    }

    async validateUser(input: AuthInput) : Promise<SignInData | null> {
        const user = await this.userService.findUserByName(input.username)

        if(user && user.password === input.password){
            return {
                userId: user.userId,
                username: user.username
            }
        }
        return null
    }

    async login(input: SignInData) : Promise<ResutData>{
        const tokenPayload = {
            sub: input.userId,
            username: input.username
        }

        const accessToken = await this.jwtService.signAsync(tokenPayload)

        return {
            accessToken: accessToken,
            userId: input.userId,
            username: input.username
        }

    }
}
