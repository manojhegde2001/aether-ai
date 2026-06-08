"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Tasks Automated", value: "10M+" },
  { label: "Hours Saved", value: "500k+" },
  { label: "Uptime", value: "99.99%" },
  { label: "Customer Satisfaction", value: "4.9/5" },
];

export function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
