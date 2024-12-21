interface ToDo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

class ToDoManager {
  private toDos: ToDo[] = [];
  private nextId: number = 1;

  createToDo(taskData: any): ToDo {
    const newToDo: any = {
      taskData,
    };
    this.toDos.push(newToDo);
    return newToDo;
  }

  getToDos(): ToDo[] {
    return this.toDos;
  }

  getToDoById(id: number): ToDo | undefined {
    return this.toDos.find((toDo) => toDo.id === id);
  }

  updateToDo(id: number, updatedToDo: Partial<ToDo>): ToDo | undefined {
    const toDo = this.getToDoById(id);
    if (toDo) {
      Object.assign(toDo, updatedToDo);
      return toDo;
    }
    return undefined;
  }

  deleteToDo(id: number): boolean {
    const index = this.toDos.findIndex((toDo) => toDo.id === id);
    if (index !== -1) {
      this.toDos.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default ToDoManager;
