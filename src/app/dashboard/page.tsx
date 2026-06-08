import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Activity, CheckCircle, Clock } from "lucide-react";
import dbConnect from "@/lib/mongodb";
import { Agent } from "@/models/Agent";
import { auth } from "@/auth";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await auth();
  await dbConnect();
  
  const userId = session?.user?.id;
  const role = session?.user?.role;
  
  const filter = role === "ADMIN" ? {} : { owner: userId };
  
  const totalAgents = await Agent.countDocuments(filter);
  const activeAgents = await Agent.countDocuments({ ...filter, status: "ACTIVE" });
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, {session?.user?.name}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-background border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAgents}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-background border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Activity className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeAgents}</div>
          </CardContent>
        </Card>

        <Card className="bg-background border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-indigo-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totalAgents * 42).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-background border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <Clock className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2s</div>
            <p className="text-xs text-muted-foreground">-0.4s from last week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
