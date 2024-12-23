import AuthDao from "../../db-services/auth/auth.dao";

const auth = new AuthDao();

class AuthManager {
  data: any;
  user: any;
  constructor(request: any) {
    this.data = request?.body;
    this.user = request.user;
  }

  async me() {
    try {
      console.log("AuthManager me", this.user);
    } catch (error) {
      console.error("Unable to fetch data: ", error);
    }
  }

  async fetch() {
    try {
      console.log("AuthManager fetch", this.data);
    } catch (error) {
      console.error("Unable to fetch data: ", error);
    }
  }

  async create() {
    try {
      console.log("AuthManager create", this.data);
      return await auth.createUser(this.data);
    } catch (error) {
      console.error("Unable to fetch data: ", error);
    }
  }
}

export default AuthManager;
