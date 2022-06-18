import { UseGuards } from "@nestjs/common"
import { Query, Resolver, Mutation, Args} from "@nestjs/graphql"

import { JwtGuard } from "src/auth/jwt.guard"
import { UserInput } from "./dto/user.input"
import { User } from "./models/user.model"
import { UserService } from "./user.service"

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User], { name: "getUsers"})
    @UseGuards(JwtGuard)
    getAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Query(() => User)
    @UseGuards(JwtGuard)
    getUserByUsername(@Args("username") username: string): Promise<User> {
        return this.userService.findByUsername(username)
    }

    @Mutation(() => User, { name: "createUser"})
    async create(@Args('userInput') userInput: UserInput): Promise<User> {
        const user = await this.userService.create(userInput)
        return user
    }
}