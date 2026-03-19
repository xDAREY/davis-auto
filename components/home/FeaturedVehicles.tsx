'use client'

import { VehicleCard } from '@/components/common/VehicleCard'
import { useInventoryData } from '@/app/inventory-context'
import Link from 'next/link'

export function FeaturedVehicles() {
  const { cars, isLoading } = useInventoryData()

  const displayCars = [
    ...cars.filter((c) => c.featured),
    ...cars.filter((c) => !c.featured),
  ].slice(0, 6)

  if (isLoading) {
    return (
      <section id="featured" className="py-12 md:py-24">
        <div className="flex justify-center py-16">
          <div style={{ width: 36, height: 36, border: '2px solid rgba(201,162,39,0.3)', borderTopColor: '#C9A227', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        </div>
      </section>
    )
  }

  if (displayCars.length === 0) return null

  return (
    <section id="featured" className="relative py-14 md:py-24 overflow-hidden">

      {/* Background — blurred GLK image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=1400&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'blur(3px)', transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.88)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-gutter max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-accent-gold" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent-gold font-medium">
                Handpicked Selection
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-bold text-white leading-tight">
              Featured <em className="italic text-accent-gold not-italic font-serif">Vehicles</em>
            </h2>
          </div>
          <Link
            href="/inventory"
            className="self-start sm:self-auto flex items-center gap-2 border border-white/20 text-white text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 hover:border-accent-gold hover:text-accent-gold transition-all duration-300 whitespace-nowrap"
          >
            View All <span className="ml-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayCars.map((car) => <VehicleCard key={car.id} car={car} />)}
        </div>
      </div>
    </section>
  )
}