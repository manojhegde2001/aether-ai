import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="bg-white/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
          <FileQuestion className="w-12 h-12 text-indigo-400" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-white">
          404 - Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          The agent you dispatched couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto">
            Return to Headquarters
          </Button>
        </Link>
      </div>
    </div>
  )
}
