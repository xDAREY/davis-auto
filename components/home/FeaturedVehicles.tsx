'use client'

import { VehicleCard } from '@/components/common/VehicleCard'
import { useInventoryData } from '@/app/inventory-context'
import Link from 'next/link'

export function FeaturedVehicles() {
  const { featuredCars, isLoading } = useInventoryData()

  if (isLoading) {
    return (
      <section id="featured" className="py-16 md:py-24 container-gutter max-w-7xl mx-auto">
        <div className="flex justify-center py-16">
          <div
            style={{
              width: 36, height: 36,
              border: '2px solid rgba(201,162,39,0.3)',
              borderTopColor: '#C9A227',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
      </section>
    )
  }

  if (featuredCars.length === 0) return null

  return (
    // Section wrapper — reduce top padding on mobile
  <section id="featured" className="py-12 md:py-24 container-gutter max-w-7xl mx-auto">

    {/* Header row — stack on mobile */}
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-accent-gold" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-accent-gold font-medium">
            Handpicked Selection
          </span>
        </div>
        <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-bold text-text-primary leading-tight">
          Featured <em className="italic text-accent-gold not-italic font-serif">Vehicles</em>
        </h2>
      </div>
      <Link href="/inventory" className="self-start sm:self-auto flex items-center gap-2 border border-text-muted/40 text-text-primary text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 hover:border-accent-gold hover:text-accent-gold transition-all duration-300 whitespace-nowrap">
        View All <span className="ml-1">→</span>
      </Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredCars.map((car) => <VehicleCard key={car.id} car={car} />)}
    </div>
  </section>
  )
}