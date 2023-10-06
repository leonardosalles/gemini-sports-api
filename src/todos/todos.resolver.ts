import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoDto } from './dto/todo.dto';
import { CreateTodoInput } from './inputs/create-todo.input';
import { UpdateTodoInput } from './inputs/update-todo.input';
import { TodosService } from './todos.service';

@Resolver(() => TodoDto)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [TodoDto], { name: 'todos' })
  async findAll() {
    return await this.todosService.findAll();
  }

  @Query(() => TodoDto, { name: 'todo', nullable: true })
  findOne(@Args('id') id: string) {
    return this.todosService.findOne(id) ?? {};
  }

  @Mutation(() => TodoDto)
  createTodo(@Args('data') data: CreateTodoInput) {
    return this.todosService.create(data);
  }

  @Mutation(() => TodoDto, { nullable: true })
  updateTodo(@Args('data') data: UpdateTodoInput) {
    return this.todosService.update(data.id, data);
  }

  @Mutation(() => TodoDto, { nullable: true })
  removeTodo(@Args('id') id: string) {
    return this.todosService.remove(id);
  }
}
