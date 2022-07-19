import { Field, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsHash } from 'class-validator';

@ObjectType()
export class UserResponse {
  @Field()
  id: string
  
  @Field()
  firstName: string

  @Field()
  lastName: string
  
  @Field()
  @IsEmail()
  email: string

  @Field()
  @IsHash("sha256")
  password: string

  @Field()
  level: Number

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date
}