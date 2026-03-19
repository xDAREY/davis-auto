'use client'

import { useEffect } from 'react'
import { useNavigation } from '@/app/providers'

export function InventoryHero() {
  const { setActiveSection } = useNavigation()

  useEffect(() => {
    setActiveSection('inventory')
  }, [setActiveSection])

  return (
    <section className="relative w-full overflow-hidden" style={{ paddingTop: 0 }}>
      {/* Blurred background — collage of regular cars */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1400&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'blur(4px)', transform: 'scale(1.06)' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.88)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: 'linear-gradient(to bottom, transparent, #0F172A)' }} />
      </div>

      <div className="relative z-10 container-gutter max-w-7xl mx-auto pt-36 pb-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase text-text-muted mb-6">
          <a href="/" className="hover:text-accent-gold transition-colors">Home</a>
          <span className="opacity-30">›</span>
          <span className="text-accent-gold">Inventory</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent-gold" />
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A227', fontWeight: 500 }}>
            Our Collection
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, color: '#F8F5EE', lineHeight: 1.1, marginBottom: 12 }}>
          Available Inventory
        </h1>
        <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, color: '#94A3B8', maxWidth: 480, lineHeight: 1.7 }}>
          Browse our current selection of thoroughly inspected vehicles. Updated regularly.
        </p>
      </div>
    </section>
  )
}