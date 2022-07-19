import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LocationInput {
    @Field()
    address: string

    @Field()
    country: string
}