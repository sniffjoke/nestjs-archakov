import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {AuthService} from "../auth.service";
import {Strategy} from "passport-local";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email'
        });
    }

    async validate(email: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(email, password)
        if (!user) {
            throw new UnauthorizedException('Неверный логин или пароль')
        }
        return user
    }
}

export const callback = (err, user, info) => {
    if (typeof info != 'undefined') {
        throw new UnauthorizedException(info.message)
    } else if (err || !user) {
        throw err || new UnauthorizedException();
    }
    return user;
}