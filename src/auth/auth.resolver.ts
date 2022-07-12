import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Logger, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginInput } from './dto/login.input';
import { UserInput } from 'src/user/dto/user.input';
import { GqlGuard } from './gql.guard';
import { UserResponse } from 'src/user/dto/user.response';

@Resolver()
export class AuthResolver {
    private logger = new Logger(AuthResolver.name);

    constructor(private authService: AuthService) {}

    @Mutation(() => LoginResponse)
    @UseGuards(GqlGuard)
    login(@Args('loginInput') _: LoginInput, @Context() context: any): Promise<LoginResponse> {
        return this.authService.login(context.user)
    }

    @Mutation(() => UserResponse)
    signup(@Args('userInput') userInput: UserInput): Promise<User> {
        this.logger.verbose(`Creating user '${userInput.email}...`)
        return this.authService.signup(userInput)
    }
}
