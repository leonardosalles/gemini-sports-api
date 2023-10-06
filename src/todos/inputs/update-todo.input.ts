import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateTodoInput } from './create-todo.input';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field({ nullable: true })
  id: string;
}
