import mongoose from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
