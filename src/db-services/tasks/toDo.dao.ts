import ToDo from "../../models/tasks/toDo.model";

class ToDoDao {
  async createToDo() {
    try {
      return new ToDo().save();
    } catch (err) {
      console.log("Error in createToDo -->", err);
    }
  }
}
export default ToDoDao;
