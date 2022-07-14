import { Field, ObjectType } from "@nestjs/graphql";
import { Difficulty } from "@prisma/client";

@ObjectType()
export class LocationResponse {
    @Field()
    id: string

    @Field()
    address: string

    @Field()
    country: string

    @Field()
    difficulty: Difficulty

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}