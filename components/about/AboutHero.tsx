'use client'

import { useEffect } from 'react'
import Link from 'next/link'
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
          src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1600&q=80"
          alt="Toyota Camry"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-gutter max-w-7xl mx-auto w-full pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Breadcrumb — left aligned via container-gutter */}
        <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <Link href="/" style={{ color: 'rgba(201,162,39,0.6)', textDecoration: 'none' }} className="hover:text-accent-gold transition-colors">Home</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
          <span style={{ color: '#CBD5E1' }}>About Us</span>
        </nav>

        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-6 md:w-8 h-px bg-accent-gold" />
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A227', fontWeight: 500 }}>
            Our Story
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(2.2rem,6vw,4.5rem)', fontWeight: 700, color: '#F8F5EE', lineHeight: 1.1 }}>
          Your Trusted Partner
          <br />
          <span style={{ color: '#C9A227' }}>in Premium Vehicles</span>
        </h1>
      </div>
    </section>
  )
}