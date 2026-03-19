'use client'

import { useEffect } from 'react'
import { useNavigation } from '@/app/providers'

export function InventoryHero() {
  const { setActiveSection } = useNavigation()

  useEffect(() => {
    setActiveSection('inventory')
  }, [setActiveSection])

  return (
    <section className="w-full bg-secondary/30 border-b border-accent-gold/20">
      <div className="container-gutter max-w-7xl mx-auto pt-32 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-accent-gold" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
            Our Collection
          </span>
        </div>
        <h1 className="font-serif text-[clamp(2.2rem,6vw,5rem)] font-light text-text-primary leading-tight mb-3 md:mb-4">
          Available <em className="italic text-accent-gold">Inventory</em>
        </h1>
        <p className="text-[14px] text-text-muted max-w-xl leading-relaxed">
          Browse our current selection of premium, thoroughly inspected vehicles. Updated regularly.
        </p>
      </div>
    </section>
  )
}