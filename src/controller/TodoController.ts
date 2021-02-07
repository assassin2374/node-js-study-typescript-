import { NextFunction, Request, Response, Router } from "express";
import { TodoService } from "../Serviice/TodoService";

export class TodoController {
  router: Router;
  private todoService: TodoService;

  constructor(todoService: TodoService){
    this.router = Router();
    this.todoService = todoService;

    this.router.get('/todos', async (req: Request, res: Response, next: NextFunction) => {
      const todos = await todoService.getAll().catch((err)=>{
        console.log(err);
        res.status(500).send(err);
        return;
      });
      res.json(todos);
    });

    this.router.get("/todos/:id", async (req: Request, res: Response, next: NextFunction) => {
      const id = parseInt(req.params.id);
      const todo = await todoService.get(id).catch((err)=>{
        console.log(err);
        res.status(500).send(err);
        return;
      });
      res.json(todo);
    });

    this.router.post("/todos", async (req: Request, res: Response, next: NextFunction) => {
      const todo = req.body;
      const result = await todoService.create(todo);
      res.status(201).json(result);
    });

    this.router.put("/todos/:id", async (req: Request, res: Response, next: NextFunction) => {
      const id = parseInt(req.params.id);
      const todo = req.body;
      await todoService.updata(id, todo);
      res.status(200).send();
    });

    this.router.delete("/todos/:id", async (req: Request, res: Response, next: NextFunction) => {
      const id = parseInt(req.params.id);
      await todoService.delete(id);
      res.status(204).send();
    });
  }
}