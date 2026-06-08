const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/aether-ai";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    const adminPassword = await bcrypt.hash("Password123!", 10);
    const userPassword = await bcrypt.hash("Password123!", 10);

    const users = [
      {
        name: "Admin User",
        email: "admin@aether.ai",
        password: adminPassword,
        role: "ADMIN"
      },
      {
        name: "Test User",
        email: "user@aether.ai",
        password: userPassword,
        role: "USER"
      }
    ];

    for (const u of users) {
      const exists = await User.findOne({ email: u.email });
      if (!exists) {
        await User.create(u);
        console.log(`Created user: ${u.email}`);
      } else {
        console.log(`User ${u.email} already exists.`);
      }
    }

    console.log("Seeding completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
