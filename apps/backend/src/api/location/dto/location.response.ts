import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LocationResponse {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  thumbnail: string;

  @Field()
  difficulty: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
