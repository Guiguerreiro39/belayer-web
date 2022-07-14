import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ActivityResponse {
    @Field()
    id: string

    @Field()
    title: string

    @Field()
    locationId: string

    @Field(() => [String])
    userIds: string[]

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}