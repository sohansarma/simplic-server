import { model, Schema } from "mongoose";

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    contact: {
      type: Number,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Users = model("Users", UsersSchema);
export default Users;
