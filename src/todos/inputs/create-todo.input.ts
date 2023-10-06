import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field({ nullable: true })
  id: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsBoolean()
  isDone: boolean;
}
