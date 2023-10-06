import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from './entities/todo.entity';
import { CreateTodoInput } from './inputs/create-todo.input';
import { UpdateTodoInput } from './inputs/update-todo.input';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>,
  ) {}

  async findAll(): Promise<Todos[]> {
    return await this.todosRepository.find();
  }

  findOne(id: string): Promise<Todos> {
    return this.todosRepository.findOne({ where: { id } });
  }

  async create(todo: CreateTodoInput) {
    const todoEntity = this.todosRepository.create(todo);
    const createdTodoEntity = await this.todosRepository.save(todoEntity);
    return createdTodoEntity;
  }

  async update(id: string, todo: UpdateTodoInput) {
    const result = await this.todosRepository.update(id, {
      description: todo.description,
      isDone: todo.isDone,
    });

    if (result.affected === 0) {
      return null;
    }

    return {
      id,
    };
  }

  async remove(id: string) {
    const result = await this.todosRepository.delete(id);

    if (result.affected === 0) {
      return null;
    }

    return {
      id,
    };
  }
}
