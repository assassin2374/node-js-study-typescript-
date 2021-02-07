import { Todo } from "../../model/Todo";
import { TodoService } from "../TodoService";
import { TodoRepository } from "../../repository/TodoRepository";

export class TodoServiceImpl implements TodoService{
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository){
    this.todoRepository = todoRepository;
  }

  async getAll(): Promise<Todo[]>{
    return await this.todoRepository.getAll();
  }
  async get(id:number): Promise<Todo>{
    return await this.todoRepository.get(id);
  }
  async create(todo: Todo): Promise<string>{
    return await this.todoRepository.create(todo);
  }
  async updata(id: number, todo: Todo): Promise<string>{
    return await this.todoRepository.updata(id, todo);
  }
  async delete(id: number): Promise<string>{
    return await this.todoRepository.delete(id);
  }
}