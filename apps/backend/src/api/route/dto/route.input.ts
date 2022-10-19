import { Field, InputType } from '@nestjs/graphql';
import { ClimbType } from '@prisma/client';

@InputType()
export class RouteInput {
  @Field()
  level: number;

  @Field()
  location: string;

  @Field()
  type: ClimbType;
}
