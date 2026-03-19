import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-text-primary flex flex-col">
      <Navigation />
      <div className="flex-1 flex flex-col items-center justify-center container-gutter max-w-7xl mx-auto py-20">
        <h1 className="font-serif text-display-xl font-bold text-text-primary mb-4 text-center">
          Page Not Found
        </h1>
        <p className="text-body-lg text-text-muted max-w-2xl text-center mb-8">
          We couldn't find the page you're looking for. Let's get you back on track.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/" className="luxury-button-primary">
            Return to Home
          </Link>
          <Link href="/inventory" className="luxury-button-secondary">
            Browse Inventory
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
