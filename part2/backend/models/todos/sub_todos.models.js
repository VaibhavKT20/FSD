import mongoose from "mongoose";
import { User } from "./user.models";
const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
});
export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
