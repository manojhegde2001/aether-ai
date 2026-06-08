import { auth } from "@/auth";
import dbConnect from "@/lib/mongodb";
import { Agent } from "@/models/Agent";
import AgentsClient from "./AgentsClient";

export const metadata = {
  title: "Agents | Aether AI",
};

export default async function AgentsPage() {
  const session = await auth();
  await dbConnect();

  const userId = session?.user?.id;
  const role = session?.user?.role;
  
  const filter = role === "ADMIN" ? {} : { owner: userId };
  const agents = await Agent.find(filter).sort({ createdAt: -1 });

  // Convert to plain objects for client component
  const serializedAgents = agents.map(agent => ({
    id: agent._id.toString(),
    name: agent.name,
    description: agent.description,
    category: agent.category,
    status: agent.status,
    createdAt: agent.createdAt.toISOString()
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Agents</h1>
        <p className="text-muted-foreground">Manage your AI agents and workflows.</p>
      </div>
      <AgentsClient initialAgents={serializedAgents} />
    </div>
  );
}
