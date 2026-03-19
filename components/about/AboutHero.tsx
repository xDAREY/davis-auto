'use client'

import { useEffect } from 'react'
import { useNavigation } from '@/app/providers'

export function AboutHero() {
  const { setActiveSection } = useNavigation()

  useEffect(() => {
    setActiveSection('about')
  }, [setActiveSection])

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden bg-background flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80"
          alt="Luxury vehicle"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-gutter max-w-7xl mx-auto pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-6 md:w-8 h-px bg-accent-gold" />
          <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
            Our Story
          </span>
        </div>
        <h1 className="font-serif text-[clamp(2.2rem,6vw,5rem)] font-light text-text-primary leading-[1.05]">
          Your Trusted Partner
          <br />
          in <em className="italic text-accent-gold">Premium Vehicles</em>
        </h1>
      </div>
    </section>
  )
}