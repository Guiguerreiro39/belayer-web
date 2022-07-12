import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LocationInput {
    @Field(type => String)
    address: string

    @Field(type => String)
    country: string
}