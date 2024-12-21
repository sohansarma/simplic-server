import ToDo from "../../models/tasks/toDo.scheme";

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
