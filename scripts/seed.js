/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable inside .env");
  process.exit(1);
}

// User Schema match
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    const passwordHash = await bcrypt.hash("Password123!", 10);

    const adminUser = {
      name: "Admin User",
      email: "admin@aether.ai",
      password: passwordHash,
      role: "ADMIN",
    };

    const normalUser = {
      name: "Demo User",
      email: "user@aether.ai",
      password: passwordHash,
      role: "USER",
    };

    // Delete existing users if they exist to avoid unique constraint errors during re-seeding
    await User.deleteMany({ email: { $in: [adminUser.email, normalUser.email] } });

    await User.create([adminUser, normalUser]);

    console.log("Successfully seeded database with test accounts:");
    console.log(`Admin: ${adminUser.email} / Password123!`);
    console.log(`User: ${normalUser.email} / Password123!`);
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
