import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Logger, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { UserInput } from 'src/api/user/dto/user.input';
import { GqlGuard } from './gql.guard';
import { UserResponse } from 'src/api/user/dto/user.response';
import { JwtGuard } from './jwt.guard';

@Resolver()
export class AuthResolver {
  private logger = new Logger(AuthResolver.name);

  constructor(private authService: AuthService) {}

  @Mutation(() => UserResponse)
  @UseGuards(GqlGuard)
  async login(
    @Args('loginInput') _: LoginInput,
    @Context() context: any,
  ): Promise<UserResponse> {
    const { user, token } = await this.authService.login(context.user);
    context.res.cookie('auth-token', token, { httpOnly: true})
    return user
  }

  @Mutation(() => UserResponse)
  @UseGuards(JwtGuard)
  logout(@Context() context: any) : Promise<User> {
    const token = context.req.cookies['auth-token']
    context.res.clearCookie('auth-token', { httpOnly: true })
    return this.authService.me(token)
  }

  @Mutation(() => UserResponse)
  signup(@Args('userInput') userInput: UserInput): Promise<User> {
    this.logger.verbose(`Creating user '${userInput.email}...`);
    return this.authService.signup(userInput);
  }

  @Query(() => UserResponse)
  @UseGuards(JwtGuard)
  getMe(@Context() context: any): Promise<User> {
    return this.authService.me(context.req.cookies['auth-token'] ?? undefined);
  }
}
