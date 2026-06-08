import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aether AI - Autonomous AI Agents for Enterprises",
    template: "%s | Aether AI"
  },
  description: "Deploy autonomous, intelligent agents that handle your operations so you can focus on growth.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aether.ai",
    title: "Aether AI - Autonomous AI Agents",
    description: "Deploy autonomous, intelligent agents that handle your operations so you can focus on growth.",
    siteName: "Aether AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether AI - Autonomous AI Agents",
    description: "Deploy autonomous, intelligent agents that handle your operations so you can focus on growth.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
