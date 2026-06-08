"use client";

import { motion } from "framer-motion";
import { Settings, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "1. Connect Your Data",
    description: "Integrate your existing tools, databases, and APIs in minutes with our plug-and-play connectors.",
    icon: <Settings className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "2. Configure Your Agent",
    description: "Define the rules, tone, and objectives. Our AI learns your business logic instantly.",
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "3. Deploy & Scale",
    description: "Launch your autonomous agent and watch it handle thousands of tasks simultaneously with complete transparency.",
    icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deploying your first autonomous AI agent is easier than you think. Get started in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
