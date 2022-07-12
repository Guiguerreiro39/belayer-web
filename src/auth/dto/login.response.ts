import { Field, ObjectType } from "@nestjs/graphql";
import { UserResponse } from "src/user/dto/user.response";

@ObjectType()
export class LoginResponse {
    @Field()
    token: string

    @Field(() => UserResponse)
    user: UserResponse
}