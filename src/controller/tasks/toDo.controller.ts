import { Request, Response } from "express";
import ToDoManager from "../../manager/tasks/toDo.manager";

export async function getAllTasks(req: any, res: any, next: any) {
  const result = await new ToDoManager().getToDos();
  return res.status(200).json(result);
}

// export class ToDoController {
//   private toDoManager: ToDoManager;

//   constructor() {
//     this.toDoManager = new ToDoManager();
//   }

//   public async getAllTasks(req: Request, res: Response): Promise<void> {
//     try {
//       const tasks = await this.toDoManager.getToDos();
//       res.status(200).json(tasks);
//     } catch (error) {
//       res.status(500).json({ message: "Error retrieving tasks", error });
//     }
//   }

//   public async getTaskById(req: Request, res: Response): Promise<void> {
//     try {
//       const taskId: any = req.params.id;
//       const task = await this.toDoManager.getToDoById(taskId);
//       if (task) {
//         res.status(200).json(task);
//       } else {
//         res.status(404).json({ message: "Task not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: "Error retrieving task", error });
//     }
//   }

//   public async createTask(req: Request, res: Response): Promise<void> {
//     try {
//       const taskData = req.body;
//       const newTask = await this.toDoManager.createToDo(taskData);
//       res.status(201).json(newTask);
//     } catch (error) {
//       res.status(500).json({ message: "Error creating task", error });
//     }
//   }

//   public async updateTask(req: Request, res: Response): Promise<void> {
//     try {
//       const taskId: any = req.params.id;
//       const taskData = req.body;
//       const updatedTask = await this.toDoManager.updateToDo(taskId, taskData);
//       if (updatedTask) {
//         res.status(200).json(updatedTask);
//       } else {
//         res.status(404).json({ message: "Task not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: "Error updating task", error });
//     }
//   }

//   public async deleteTask(req: Request, res: Response): Promise<void> {
//     try {
//       const taskId: any = req.params.id;
//       const deleted = await this.toDoManager.deleteToDo(taskId);
//       if (deleted) {
//         res.status(200).json({ message: "Task deleted successfully" });
//       } else {
//         res.status(404).json({ message: "Task not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: "Error deleting task", error });
//     }
//   }
// }
