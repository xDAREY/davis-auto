'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Car, NavigationContextType } from '@/lib/types'
import { InventoryProvider } from '@/app/inventory-context'

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const value: NavigationContextType = {
    activeSection,
    setActiveSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    modalOpen,
    setModalOpen,
    selectedCar,
    setSelectedCar,
    selectedFilters,
    setSelectedFilters,
  }

  return (
    <NavigationContext.Provider value={value}>
      <InventoryProvider>
        {children}
      </InventoryProvider>
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}