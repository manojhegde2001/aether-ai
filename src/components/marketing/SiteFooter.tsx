import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2 text-center md:text-left">
          <p className="text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <span className="font-medium text-foreground">Aether AI</span>.
            The source code is available on GitHub.
          </p>
        </div>
        <div className="flex gap-4 text-sm font-medium text-muted-foreground">
          <Link href="/terms" className="hover:underline hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="hover:underline hover:text-foreground">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
