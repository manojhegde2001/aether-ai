"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Home, Users, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  role?: string;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Agents", href: "/dashboard/agents", icon: Bot },
  ];

  if (role === "ADMIN") {
    links.push({ name: "Users", href: "/dashboard/users", icon: Users });
  }

  links.push({ name: "Settings", href: "/dashboard/settings", icon: Settings });

  return (
    <div className="flex h-full w-64 flex-col border-r border-border/40 bg-background/95 backdrop-blur hidden md:flex">
      <div className="flex h-14 items-center border-b border-border/40 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-indigo-500" />
          <span className="font-bold text-lg bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Aether AI
          </span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname.startsWith(link.href));
            const Icon = link.icon;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
