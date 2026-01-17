import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export type User = {
    userId: number,
    username: string,
    password:string
}

const users: User[] = [
    {
        userId: 1,
        username: "Huy",
        password: '123'
    },
    {
        userId: 2,
        username:"Hang",
        password: '123123'
    }
]
@Injectable()
export class UserService {

    async findUserByName(username: string) : Promise<User | undefined> {
        return users.find((user)=>user.username == username)
    }

}
