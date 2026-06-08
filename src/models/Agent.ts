import mongoose from "mongoose";

export interface IAgent {
  _id: string;
  name: string;
  description: string;
  category: string;
  status: "ACTIVE" | "INACTIVE" | "MAINTENANCE";
  owner: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const agentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "MAINTENANCE"],
      default: "ACTIVE",
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

// Indexes for faster queries
agentSchema.index({ owner: 1 });
agentSchema.index({ status: 1 });

export const Agent = mongoose.models.Agent || mongoose.model("Agent", agentSchema);
