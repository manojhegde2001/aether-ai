"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Cpu, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-16">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background"></div>
      <div className="absolute left-1/2 top-0 z-0 -ml-[35rem] h-[35rem] w-[70rem] opacity-30 sm:opacity-40 sm:ml-[-40rem] sm:w-[80rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 mb-8 backdrop-blur-sm"
          >
            <Zap className="mr-2 h-4 w-4" />
            <span>Next-Gen AI Agents are here</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            AI Agents That Actually{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Get Work Done
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Deploy autonomous, intelligent agents that handle your customer support, sales, and internal workflows. Scale your business infinitely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/register">
              <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full sm:w-auto shadow-lg shadow-indigo-500/25 border-0">
                Start Building Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base w-full sm:w-auto backdrop-blur-sm border-white/10 hover:bg-white/5">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 mx-auto max-w-5xl rounded-xl border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-xl sm:p-4"
        >
          <div className="rounded-lg overflow-hidden border border-white/5 bg-zinc-950 aspect-[16/9] relative flex items-center justify-center">
            {/* Minimal Mock Dashboard UI */}
            <div className="absolute inset-0 flex flex-col">
              {/* Header */}
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="h-5 w-48 bg-white/5 rounded mx-auto"></div>
              </div>
              {/* Body */}
              <div className="flex-1 flex p-4 gap-4">
                {/* Sidebar */}
                <div className="w-48 hidden sm:flex flex-col gap-2">
                  <div className="h-8 bg-indigo-500/20 rounded w-full border border-indigo-500/30"></div>
                  <div className="h-8 bg-white/5 rounded w-full"></div>
                  <div className="h-8 bg-white/5 rounded w-full"></div>
                </div>
                {/* Main */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-4 w-16 bg-white/10 rounded mb-2 mx-auto"></div>
                        <div className="h-8 w-24 bg-white/20 rounded mx-auto"></div>
                      </div>
                    </div>
                    <div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-4 w-16 bg-white/10 rounded mb-2 mx-auto"></div>
                        <div className="h-8 w-24 bg-white/20 rounded mx-auto"></div>
                      </div>
                    </div>
                    <div className="h-24 flex-1 bg-white/5 rounded-lg border border-white/5 hidden md:flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-4 w-16 bg-white/10 rounded mb-2 mx-auto"></div>
                        <div className="h-8 w-24 bg-white/20 rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                    <div className="p-4 flex items-center justify-between border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <Bot className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div>
                          <div className="h-4 w-32 bg-white/20 rounded mb-1"></div>
                          <div className="h-3 w-20 bg-white/10 rounded"></div>
                        </div>
                      </div>
                      <div className="h-6 w-16 rounded-full bg-green-500/20 border border-green-500/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
