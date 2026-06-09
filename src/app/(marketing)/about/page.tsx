import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Zap } from "lucide-react";

export const metadata = {
  title: "About Us | Aether AI",
  description: "Learn about our mission to democratize AI agents.",
};

export default function AboutPage() {
  const values = [
    { title: "Innovation", description: "Pushing the boundaries of what AI agents can achieve.", icon: <Lightbulb className="w-6 h-6 text-yellow-500" /> },
    { title: "Reliability", description: "Enterprise-grade infrastructure you can count on.", icon: <Zap className="w-6 h-6 text-blue-500" /> },
    { title: "Transparency", description: "Clear, understandable AI decision making processes.", icon: <Target className="w-6 h-6 text-green-500" /> },
    { title: "Collaboration", description: "Building tools that augment, not replace, human creativity.", icon: <Users className="w-6 h-6 text-purple-500" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Our Mission</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We believe that autonomous AI agents are the next major paradigm shift in computing. Our mission is to make this technology accessible, secure, and infinitely scalable for businesses of all sizes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">The Aether Story</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Founded in 2024, Aether AI started with a simple observation: while large language models are incredibly powerful, they require too much manual prompting and orchestration to be truly useful in complex business workflows.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We set out to build a platform where AI doesn&apos;t just answer questions, but takes action. Today, thousands of companies use our infrastructure to deploy agents that work 24/7, resolving tickets, finding leads, and managing operations.
          </p>
        </div>
        <div className="relative h-64 md:h-full rounded-2xl bg-zinc-900 overflow-hidden border border-white/10 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
          <div className="text-center relative z-10">
            <div className="text-6xl font-bold text-white mb-2">10M+</div>
            <div className="text-indigo-200">Tasks Automated</div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {values.map((value, i) => (
          <Card key={i} className="bg-white/5 border-white/10">
            <CardContent className="pt-6">
              <div className="mb-4">{value.icon}</div>
              <h3 className="font-bold text-lg mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
