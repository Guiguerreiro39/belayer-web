import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Logger, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginInput } from './dto/login.input';
import { UserInput } from 'src/user/dto/user.input';
import { GqlGuard } from './gql.guard';
import { User } from 'src/user/models/user.model';

@Resolver()
export class AuthResolver {
    private logger = new Logger(AuthResolver.name);

    constructor(private authService: AuthService) {}

    @Mutation(() => LoginResponse)
    @UseGuards(GqlGuard)
    login(@Args('loginInput') _: LoginInput, @Context() context: any): Promise<LoginResponse> {
        return this.authService.login(context.user)
    }

    @Mutation(() => User)
    signup(@Args('userInput') userInput: UserInput): Promise<User> {
        this.logger.verbose(`Creating user '${userInput.username}...`)
        return this.authService.signup(userInput)
    }
}
