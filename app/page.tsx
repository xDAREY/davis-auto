import { Hero } from '@/components/home/Hero'
import { Marquee } from '@/components/home/Marquee'
import { FeaturedVehicles } from '@/components/home/FeaturedVehicles'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Testimonials } from '@/components/home/Testimonials'
import { CTABanner } from '@/components/home/CTABanner'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { VehicleModal } from '@/components/inventory/VehicleModal'

export const metadata = {
  title: 'Davis House of Automotive | Luxury Vehicle Brokerage',
  description:
    'Discover curated luxury and high-performance vehicles. Quality automotive brokerage specializing in rare finds.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navigation />
      <Hero />
      <Marquee />
      <FeaturedVehicles />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
      <Footer />
      {/* <VehicleModal /> */}
    </main>
  )
}
