import { Schema, model, Document, Types } from "mongoose";

interface IToDo extends Document {
  userId: Types.ObjectId;
  title: string;
  description: string;
  completed: boolean;
  pinned: boolean;
}

const ToDoSchema = new Schema<IToDo>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    pinned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ToDo = model<IToDo>("ToDo", ToDoSchema);

export default ToDo;
