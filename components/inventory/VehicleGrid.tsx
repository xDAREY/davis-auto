'use client'

import { VehicleCard } from '@/components/common/VehicleCard'
import { useNavigation } from '@/app/providers'
import { useInventoryData } from '@/app/inventory-context'

export function VehicleGrid() {
  const { selectedFilters } = useNavigation()
  const { cars, isLoading, error, filterByType } = useInventoryData()

  const filteredCars = filterByType(selectedFilters)

  if (isLoading) {
    return (
      <div className="py-24 container-gutter max-w-7xl mx-auto flex justify-center">
        <div className="flex flex-col items-center gap-4">
          <div
            style={{
              width: 36, height: 36,
              border: '2px solid rgba(201,162,39,0.3)',
              borderTopColor: '#C9A227',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
          <p style={{ fontFamily: 'var(--mono, monospace)', fontSize: 11, letterSpacing: '0.2em', color: '#94A3B8', textTransform: 'uppercase' }}>
            Loading inventory…
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-24 container-gutter max-w-7xl mx-auto text-center">
        <p className="text-red-400 text-sm">Failed to load inventory. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="py-14 container-gutter max-w-7xl mx-auto">
      <p className="text-[11px] tracking-[0.15em] uppercase text-text-muted mb-8">
        {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''} available
      </p>

      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24">
          <p className="font-serif text-[1.5rem] text-text-primary mb-2">No vehicles found</p>
          <p className="text-[14px] text-text-muted">Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}