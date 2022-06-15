import { Query, Resolver, Mutation, Args} from "@nestjs/graphql"
import { UserInput } from "./dto/user.input"
import { User } from "./models/user.model"
import { UsersService } from "./users.service"

@Resolver(returns => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(returns => [User], { name: "users"})
    getAll(): Promise<User[]> {
        return this.usersService.findAll()
    }

    @Mutation(returns => User, { name: "createUser"})
    async create(@Args('userData') userData: UserInput): Promise<User> {
        const user = await this.usersService.create(userData)
        return user
    }
}