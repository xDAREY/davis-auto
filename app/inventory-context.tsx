'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { supabase } from '@/lib/supabase'
import { Car } from '@/lib/types'

interface InventoryContextType {
  cars: Car[]
  isLoading: boolean
  error: string | null
  featuredCars: Car[]
  filterByType: (types: string[]) => Car[]
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined)

export function InventoryProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<Car[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCars = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    const { data, error: fetchError } = await supabase
      .from('cars')
      .select('*')
      .neq('status', 'sold')           // hide sold cars from public by default
      .order('created_at', { ascending: false })

    if (fetchError) {
      setError(fetchError.message)
    } else {
      setCars(data ?? [])
    }

    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchCars()
  }, [fetchCars])

  const featuredCars = cars.filter((c) => c.featured)

  const filterByType = (types: string[]) => {
    if (types.length === 0) return cars
    return cars.filter((c) => types.includes(c.type?.toLowerCase() ?? ''))
  }

  return (
    <InventoryContext.Provider value={{ cars, isLoading, error, featuredCars, filterByType }}>
      {children}
    </InventoryContext.Provider>
  )
}

export function useInventoryData() {
  const context = useContext(InventoryContext)
  if (!context) throw new Error('useInventoryData must be used within InventoryProvider')
  return context
}