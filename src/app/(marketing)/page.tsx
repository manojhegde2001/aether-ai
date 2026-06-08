import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";

export const metadata = {
  title: "Aether AI - AI Agents That Actually Get Work Done",
  description: "Deploy autonomous, intelligent agents that handle your customer support, sales, and internal workflows.",
};

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Trusted By Section */}
      <section className="border-y border-white/5 bg-black/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logos placeholders */}
            <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 rounded-sm bg-white"></div> Acme Corp</div>
            <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 rounded-full bg-white"></div> Globex</div>
            <div className="flex items-center gap-2 font-bold text-xl"><div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-white"></div> Soylent</div>
            <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 rounded-sm bg-white rotate-45"></div> Initech</div>
          </div>
        </div>
      </section>

      <Features />
      
      {/* CTA Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold sm:text-5xl mb-6">Ready to automate your workflows?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already using Aether AI to scale their operations.
          </p>
          <a href="/register" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-white/90">
            Get Started for Free
          </a>
        </div>
      </section>
    </div>
  );
}
