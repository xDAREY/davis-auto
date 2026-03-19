'use client'

import { useNavigation } from '@/app/providers'

// These values match exactly what's stored in the `type` column in Supabase
const filters = [
  { id: 'all',    label: 'All Vehicles' },
  { id: 'suv',    label: 'SUV / 4WD' },
  { id: 'sedan',  label: 'Sedan' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'sports', label: 'Sports' },
  { id: 'coupe',  label: 'Coupe' },
  { id: 'truck',  label: 'Truck' },
]

export function FilterBar() {
  const { selectedFilters, setSelectedFilters } = useNavigation()

  const isAll = selectedFilters.length === 0

  const handleFilter = (id: string) => {
    if (id === 'all') {
      setSelectedFilters([])
      return
    }
    setSelectedFilters(
      selectedFilters.includes(id)
        ? selectedFilters.filter((f) => f !== id)
        : [...selectedFilters, id]
    )
  }

  return (
    <div
      className="sticky z-30 bg-secondary/60 backdrop-blur-md border-b border-accent-gold/15 py-3 md:py-5"
      style={{ top: '64px' }}
    >
      <div className="container-gutter max-w-7xl mx-auto">
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted whitespace-nowrap flex-shrink-0">
            Filter:
          </span>
          {filters.map((f) => {
            const active = f.id === 'all' ? isAll : selectedFilters.includes(f.id)
            return (
              <button
                key={f.id}
                onClick={() => handleFilter(f.id)}
                className={`text-[10px] md:text-[11px] tracking-[0.12em] uppercase px-4 py-1.5 border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  active
                    ? 'border-accent-gold text-accent-gold'
                    : 'border-white/10 text-text-muted hover:border-accent-gold/50 hover:text-accent-gold'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}