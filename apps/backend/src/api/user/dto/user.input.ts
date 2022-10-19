import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, Length, MaxLength } from "class-validator";

@InputType()
export class UserInput {
  @Field()
  @MaxLength(40)
  firstName: string;

  @Field()
  @MaxLength(40)
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(8, 50)
  password: string;
}
