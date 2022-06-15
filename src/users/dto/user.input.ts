import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator"

@InputType()
export class UserInput {
    @Field(type => String, {nullable: true})
    @MaxLength(200)
    @IsOptional()
    name: string

    @Field(type => String)
    @Length(5, 20)
    username: string

    @Field(type => String)
    @Length(8, 50)
    password: string
}