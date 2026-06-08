import { Bot, Database, Shield, Zap, Code, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Services | Aether AI",
  description: "Expert services to accelerate your AI journey.",
};

const allServices = [
  {
    title: "Custom Agent Development",
    description: "We build tailor-made autonomous agents designed specifically for your unique business logic and workflows. From customer support to data analysis.",
    icon: <Bot className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Enterprise Integration",
    description: "Seamlessly connect Aether AI with your existing ERP, CRM, and internal databases with custom, secure connectors built by our team.",
    icon: <Database className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Security & Compliance Audits",
    description: "Comprehensive reviews of your AI infrastructure to ensure SOC2, GDPR, and HIPAA compliance, along with red-teaming your agents.",
    icon: <Shield className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Workflow Optimization",
    description: "Let our experts analyze your operations to identify the highest ROI opportunities for automation before you write a single line of prompt.",
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Custom Model Fine-tuning",
    description: "We fine-tune open-source models on your proprietary data so your agents have deep, domain-specific knowledge.",
    icon: <Code className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Team Training & Enablement",
    description: "Workshops and ongoing support to train your team on building, managing, and scaling autonomous agents.",
    icon: <Users className="w-8 h-8 text-indigo-400" />,
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/10 [mask-image:radial-gradient(ellipse_at_top,white,transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6">Professional Services</h1>
          <p className="text-xl text-muted-foreground mb-10">
            Accelerate your AI transformation with our world-class engineering team. We&apos;ll help you design, build, and deploy complex AI architectures.
          </p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => (
              <Card key={idx} className="bg-zinc-900/50 border-white/10 hover:border-indigo-500/30 transition-colors">
                <CardContent className="pt-8">
                  <div className="mb-6 bg-zinc-950 w-16 h-16 flex items-center justify-center rounded-xl border border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
