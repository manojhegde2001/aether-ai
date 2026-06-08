"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for exploring what Aether AI can do.",
    features: ["1 Agent", "1,000 tasks/month", "Community Support", "Basic Integrations"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For teams ready to automate their workflows.",
    features: ["5 Agents", "10,000 tasks/month", "Priority Support", "Advanced Integrations", "Custom Logic"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with complex requirements.",
    features: ["Unlimited Agents", "Unlimited tasks", "24/7 Dedicated Support", "On-premise Deployment", "SLA Guarantees"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative rounded-2xl border ${plan.popular ? 'border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.2)]' : 'border-white/10'} bg-zinc-900/50 p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground min-h-[40px]">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-indigo-400 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'border-white/20 text-white hover:bg-white/5'}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
