import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoDto {
  @Field({ nullable: true })
  id: string;

  @Field()
  description: string;

  @Field()
  isDone: boolean;
}
