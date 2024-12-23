import { model, Schema } from "mongoose";

const UserRolesSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    rolesId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Roles",
    },
  },
  { timestamps: true }
);

const UserRoles = model("UserRoles", UserRolesSchema);
export default UserRoles;
