import { auth } from "@/auth";
import dbConnect from "@/lib/mongodb";
import { User } from "@/models/User";
import UsersClient from "./UsersClient";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Users Management | Aether AI",
};

export default async function UsersPage() {
  const session = await auth();
  
  if (session?.user?.role !== "ADMIN") {
    redirect("/dashboard");
  }

  await dbConnect();
  
  const users = await User.find().sort({ createdAt: -1 }).select("-password");

  const serializedUsers = users.map(user => ({
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt.toISOString()
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">Manage platform users and access roles.</p>
      </div>
      <UsersClient initialUsers={serializedUsers} />
    </div>
  );
}
