import mongoose from "mongoose";

class DBService {
  connection: mongoose.Connection | null;

  constructor() {
    this.connection = null;
  }

  async connect() {
    try {
      mongoose.Promise = global.Promise;
      await mongoose.connect("mongodb://localhost:27017/test", {
        autoIndex: true,
      });
      this.connection = mongoose.connection;
    } catch (error) {}
  }
}

const dbService = new DBService();

export default dbService;
