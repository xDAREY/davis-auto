'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useInventoryData } from '@/app/inventory-context'
import { VehicleCard } from '@/components/common/VehicleCard'
import { useNavigation } from '@/app/providers'

export function VehicleGrid() {
  const { selectedFilters, setSelectedFilters } = useNavigation()
  const { cars, isLoading, error, filterByType } = useInventoryData()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const q = searchParams.get('search')
    const reset = searchParams.get('reset')

    // If coming from hero search, always clear any active type filter
    // so results aren't accidentally hidden by a stale filter
    if (reset === '1') {
      setSelectedFilters([])
    }

    if (q) setSearch(q)
  }, [searchParams])

  const filtered = filterByType(selectedFilters).filter((car) => {
    if (!search) return true
    const q = search.toLowerCase()
    return (
      car.make.toLowerCase().includes(q) ||
      car.model.toLowerCase().includes(q) ||
      (car.color ?? '').toLowerCase().includes(q) ||
      (car.vin ?? '').toLowerCase().includes(q)
    )
  })

  if (isLoading) {
    return (
      <div className="py-24 container-gutter max-w-7xl mx-auto flex justify-center">
        <div style={{
          width: 36, height: 36,
          border: '2px solid rgba(201,162,39,0.3)',
          borderTopColor: '#C9A227',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
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
    <div className="py-10 md:py-14 container-gutter max-w-7xl mx-auto">

      {/* Search bar */}
      <div className="flex gap-3 mb-6 flex-wrap items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search make, model, color, VIN..."
          className="bg-secondary/60 border border-tertiary/50 text-text-primary placeholder-text-muted/40 focus:border-accent-gold/60 focus:outline-none transition-colors text-[13px] px-4 py-2.5 flex-1 min-w-[180px]"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="text-[11px] text-text-muted hover:text-accent-gold transition-colors uppercase tracking-widest"
          >
            Clear
          </button>
        )}
      </div>

      <p className="text-[11px] tracking-[0.15em] uppercase text-text-muted mb-8">
        {filtered.length} vehicle{filtered.length !== 1 ? 's' : ''} available
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24">
          <p className="font-serif text-[1.5rem] text-text-primary mb-2">No vehicles found</p>
          <p className="text-[14px] text-text-muted">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  )
}