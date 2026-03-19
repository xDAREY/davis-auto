import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { AboutHero } from '@/components/about/AboutHero'
import { BrandStory } from '@/components/about/BrandStory'
// import { ValuesCards } from '@/components/about/ValuesCards'
import { TeamSection } from '@/components/about/TeamSection'

export const metadata = {
  title: 'About Us | Davis House of Automotive',
  description: 'Learn about our passion for luxury automotive excellence and meet our expert team.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navigation />
      <AboutHero />
      <BrandStory />
      {/* <ValuesCards /> */}
      <TeamSection />
      <Footer />
    </main>
  )
}