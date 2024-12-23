import Users from "../../models/auth/user.model";

class AuthDao {
  async fetchUserByEmail(email: string) {
    try {
      return Users.find({ email });
    } catch (err) {
      console.log("Error in createToDo -->", err);
    }
  }

  async createUser(data: any) {
    try {
      return new Users(data).save();
    } catch (err) {
      console.log("Error in createToDo -->", err);
    }
  }
}
export default AuthDao;
