import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LocationInput {
  @Field()
  address: string;

  @Field()
  name: string;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field()
  thumbnail: string;
}
