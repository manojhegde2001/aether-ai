"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Database, Shield, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Custom Agent Development",
    description: "We build tailor-made autonomous agents designed specifically for your unique business logic and workflows.",
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "Enterprise Integration",
    description: "Seamlessly connect Aether AI with your existing ERP, CRM, and internal databases with custom connectors.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Security & Compliance Audits",
    description: "Comprehensive reviews of your AI infrastructure to ensure SOC2, GDPR, and HIPAA compliance.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Workflow Optimization",
    description: "Let our experts analyze your operations to identify the highest ROI opportunities for automation.",
    icon: <Zap className="w-6 h-6" />
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Expert services to accelerate your AI journey</h2>
            <p className="text-lg text-muted-foreground">
              Need more than just the platform? Our world-class engineering team is here to help you design, build, and deploy complex AI architectures.
            </p>
          </div>
          <Link href="/services" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            View all services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-950 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
