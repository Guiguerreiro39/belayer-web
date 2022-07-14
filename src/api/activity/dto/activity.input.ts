import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class ActivityInput {
  @Field()
  title: string

  @Field(() => [String])
  users: string[]

  @Field()
  @IsOptional()
  location: string
}
