import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/models/user.model";

@ObjectType()
export class LoginResponse {
    @Field()
    token: string

    @Field(() => User)
    user: User
}