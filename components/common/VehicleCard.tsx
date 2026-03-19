'use client'

import { useRouter } from 'next/navigation'
import { Car } from '@/lib/types'

export function VehicleCard({ car }: { car: Car }) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/inventory/${car.id}`)}
      className="group cursor-pointer transition-all duration-300"
      style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,162,39,0.4)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {car.images?.[0] ? (
          <img
            src={car.images[0]}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <svg className="w-10 h-10 opacity-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12h.01M3 7l3-3h12l3 3v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" />
            </svg>
          </div>
        )}
        {car.badge && (
          <span className="absolute top-3 left-3 text-[9px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 bg-accent-gold text-background">
            {car.badge}
          </span>
        )}
        {car.status !== 'available' && (
          <span className={`absolute top-3 right-3 text-[9px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 ${
            car.status === 'reserved'
              ? 'border border-accent-gold text-accent-gold bg-background/80'
              : 'bg-red-500/90 text-white'
          }`}>
            {car.status}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, fontWeight: 600, color: '#F8F5EE', marginBottom: 6, lineHeight: 1.3 }}>
          {car.year} {car.make} {car.model}
        </h3>

        <div className="flex gap-0 flex-wrap mb-3">
          {[car.mileage, car.fuel_type, car.transmission?.split(' ')[0]]
            .filter(Boolean)
            .map((spec, i, arr) => (
              <span key={i} style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', paddingRight: i < arr.length - 1 ? 8 : 0, marginRight: i < arr.length - 1 ? 8 : 0, borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                {spec}
              </span>
            ))}
        </div>

        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.1rem', fontWeight: 700, color: '#C9A227' }}>
            ${car.price.toLocaleString()}
          </span>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,162,39,0.6)' }} className="group-hover:text-accent-gold transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </div>
  )
}