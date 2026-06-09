"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Aether AI has completely transformed our customer support operations. We've reduced response times by 80% while maintaining high CSAT scores.",
    author: "Sarah Jenkins",
    role: "VP of Operations, TechFlow",
  },
  {
    quote: "Setting up the agents was incredibly intuitive. Within hours, we had an automated workflow handling our lead qualification process flawlessly.",
    author: "Marcus Chen",
    role: "Head of Growth, StartupInc",
  },
  {
    quote: "The level of transparency and control we have over the agents gives us the confidence to deploy them across sensitive internal processes.",
    author: "Elena Rodriguez",
    role: "CTO, SecureData",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Loved by innovative teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say about Aether AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    &quot;{t.quote}&quot;
                  </p>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
