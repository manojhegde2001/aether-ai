import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadphonesIcon, Search, TrendingUp, Workflow } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | Aether AI",
  description: "Explore our specialized AI agent services.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Customer Support Agents",
      description: "Deploy highly-trained agents that resolve customer queries instantly 24/7 across all your channels.",
      features: ["Omnichannel support", "CRM integration", "Sentiment analysis", "Auto-escalation"],
      icon: <HeadphonesIcon className="w-8 h-8 text-indigo-400" />,
      color: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      title: "Research Agents",
      description: "Accelerate your R&D with agents that can parse thousands of documents and summarize key findings.",
      features: ["Web scraping", "Document parsing", "Data synthesis", "Competitor tracking"],
      icon: <Search className="w-8 h-8 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-500/5",
    },
    {
      title: "Sales Agents",
      description: "Automate top-of-funnel outreach and lead qualification so your human team can focus on closing.",
      features: ["Lead enrichment", "Personalized outreach", "Meeting scheduling", "Follow-up automation"],
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      title: "Workflow Automation",
      description: "Custom internal agents that connect your disparate SaaS tools and automate repetitive tasks.",
      features: ["API orchestration", "Data entry automation", "Custom triggers", "Approval workflows"],
      icon: <Workflow className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-purple-500/5",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Our Agent Ecosystem</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose from our library of specialized agents or build your own custom workflows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <Card key={i} className={`bg-gradient-to-br ${service.color} border-white/10 overflow-hidden flex flex-col`}>
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base text-foreground/80 mt-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0">Deploy Agent</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
