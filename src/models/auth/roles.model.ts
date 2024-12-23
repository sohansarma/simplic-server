import { model, Schema } from "mongoose";

const RolesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      enum: ["ADMIN", "USER", "SUPERADMIN"],
    },
  },
  { timestamps: true }
);

const Roles = model("Roles", RolesSchema);
export default Roles;
