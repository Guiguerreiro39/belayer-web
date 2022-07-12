import { UseGuards } from "@nestjs/common"
import { Query, Resolver, Args} from "@nestjs/graphql"
import { User } from "@prisma/client"

import { JwtGuard } from "src/auth/jwt.guard"
import { UserService } from "./user.service"
import { UserResponse } from './dto/user.response';

@Resolver(() => UserResponse)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [UserResponse], { name: "getAllUsers" })
    @UseGuards(JwtGuard)
    getAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Query(() => UserResponse, { name: "getUserByEmail" })
    @UseGuards(JwtGuard)
    get(@Args("email") email: string): Promise<User> {
        return this.userService.findByEmail(email)
    }
}