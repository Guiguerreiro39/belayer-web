import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { comparePassword } from 'src/common/crypt/hash.crypt';
import { LoginResponse } from './dto/login.response';
import { UserInput } from 'src/user/dto/user.input';
import { User } from 'src/user/models/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    private logger = new Logger(AuthService.name);
    
    constructor(
        private userService: UserService, 
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<User | undefined> {
        try {
            const user = await this.userService.findByUsername(username)

            if (!user) throw new NotFoundException(`User does not exist.`)
    
            if (await comparePassword(password, user.password)) {
                const { password, ...res} = user;
                return res as User
            }

            this.logger.error(`Wrong password input for the user '${username}'.`)
            return undefined
        } catch(error) {
            this.logger.error(`Failed to validate the user '${username}'.`, error.stack)
        }
    }

    async login(user: User): Promise<LoginResponse> {
        return {
            token: this.jwtService.sign({ username: user.username, sub: user._id}),
            user
        }
    }

    async signup(userInput: UserInput): Promise<User> {
        return this.userService.create(userInput)
    }
}
