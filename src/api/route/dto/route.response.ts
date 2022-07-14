import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RouteResponse {
    @Field()
    id: String

    @Field()
    level: number

    @Field()
    type: String

    @Field()
    locationId: String

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}