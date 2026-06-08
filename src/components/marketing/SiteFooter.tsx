import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight mb-4 inline-block">Aether AI</Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Deploying autonomous, intelligent agents that handle your operations so you can focus on growth.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aether AI Inc. All rights reserved.</p>
          <div className="flex gap-4">
            Built for the future.
          </div>
        </div>
      </div>
    </footer>
  );
}
