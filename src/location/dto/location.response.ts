import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LocationResponse {
    @Field()
    id: String

    @Field()
    address: String

    @Field()
    country: String

    @Field()
    difficulty: string

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}