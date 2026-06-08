"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Unhandled Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="bg-red-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/20">
          <AlertTriangle className="w-12 h-12 text-red-400" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-white">
          A System Error Occurred
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Our agents have logged this issue and are working to resolve it. Please try again.
        </p>
        <Button 
          size="lg" 
          onClick={() => reset()} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
