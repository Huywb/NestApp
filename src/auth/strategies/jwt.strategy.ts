import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { ExtractJwt, Strategy } from 'passport-jwt'
import { JWT_SERCRET } from "src/configs/jwt-sercret";
@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SERCRET,
        })
    }

    async validate(payload: any){
        return payload
    }
}