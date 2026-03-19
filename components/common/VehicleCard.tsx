'use client'

import { useNavigation } from '@/app/providers'
import { Car } from '@/lib/types'

export function VehicleCard({ car }: { car: Car }) {
  const { setSelectedCar, setModalOpen } = useNavigation()

  const handleClick = () => {
    setSelectedCar(car)
    setModalOpen(true)
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-secondary/40 border border-tertiary/30 hover:border-accent-gold/40 transition-all duration-300"
    >
      {/* Image — tighter aspect ratio on mobile */}
      <div className="relative overflow-hidden aspect-[16/9] md:aspect-[4/3]">
        {car.images?.[0] ? (
          <img
            src={car.images[0]}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-tertiary/20 flex items-center justify-center">
            <span className="text-3xl opacity-20">🚗</span>
          </div>
        )}

        {/* Badge */}
        {car.badge && (
          <div className="absolute top-3 left-3">
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 bg-accent-gold text-background">
              {car.badge}
            </span>
          </div>
        )}

        {/* Status — only show if not available */}
        {car.status !== 'available' && (
          <div className="absolute top-3 right-3">
            <span className={`text-[9px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 ${
              car.status === 'reserved'
                ? 'border border-accent-gold text-accent-gold bg-background/80'
                : 'bg-red-500/90 text-white'
            }`}>
              {car.status}
            </span>
          </div>
        )}
      </div>

      {/* Content — reduced padding on mobile */}
      <div className="p-4 md:p-5">
        {/* Make / Model */}
        <div className="mb-3">
          <h3 className="font-serif text-base md:text-lg font-semibold text-text-primary leading-tight">
            {car.year} {car.make}
          </h3>
          <p className="text-sm text-accent-gold">{car.model}</p>
        </div>

        {/* Quick specs — 3 pills */}
        <div className="flex gap-2 flex-wrap mb-4">
          {car.mileage && (
            <span className="text-[10px] tracking-[0.1em] uppercase text-text-muted border border-tertiary/40 px-2 py-0.5">
              {car.mileage}
            </span>
          )}
          {car.transmission && (
            <span className="text-[10px] tracking-[0.1em] uppercase text-text-muted border border-tertiary/40 px-2 py-0.5">
              {car.transmission.split(' ')[0]}
            </span>
          )}
          {car.fuel_type && (
            <span className="text-[10px] tracking-[0.1em] uppercase text-text-muted border border-tertiary/40 px-2 py-0.5">
              {car.fuel_type}
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-tertiary/20">
          <div className="font-serif text-lg md:text-xl font-bold text-accent-gold">
            ${car.price.toLocaleString()}
          </div>
          <button className="text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 border border-accent-gold/40 text-accent-gold hover:bg-accent-gold hover:text-background transition-all duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}