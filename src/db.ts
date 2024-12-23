import mongoose from "mongoose";

class DBService {
  connection: mongoose.Connection | null;

  constructor() {
    this.connection = null;
  }

  async connect() {
    try {
      mongoose.Promise = global.Promise;
      await mongoose.connect(
        "mongodb+srv://sohan28sarma:sTSEokj1CJjpgqgw@tasknest-cluster.wjzvz.mongodb.net/TaskNest?retryWrites=true&w=majority&appName=TaskNest-cluster",
        {
          autoIndex: true,
        }
      );
      this.connection = mongoose.connection;
      console.log("Connected to DB");
    } catch (error) {
      console.log("Error in connecting to DB -->", error);
    }
  }
}

const dbService = new DBService();

export default dbService;
