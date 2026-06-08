import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cpu, LineChart, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Autonomous Execution",
      description: "Agents capable of making decisions and executing complex workflows without human intervention.",
      icon: <Cpu className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Secure & Compliant",
      description: "Enterprise-grade security with role-based access control and full audit logs for every action.",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Custom Personalities",
      description: "Train agents on your company data to reflect your brand voice and internal knowledge.",
      icon: <Bot className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Real-time Analytics",
      description: "Monitor agent performance, success rates, and ROI with beautiful, comprehensive dashboards.",
      icon: <LineChart className="h-6 w-6 text-pink-500" />,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need to scale</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides the infrastructure, security, and tools needed to deploy production-ready AI agents in minutes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
