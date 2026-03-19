
export interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: string

  // Specs (all present once admin fills them in)
  vin?: string
  engine?: string
  transmission?: string
  drivetrain?: string
  fuel_type?: string          // use fuel_type everywhere — matches the DB column
  color?: string
  seats?: number
  previous_owners?: number    // how many previous owners

  // Classification
  type: string                // 'sedan' | 'suv' | 'sports' | 'luxury' | 'truck' | 'coupe'
  status: string              // 'available' | 'reserved' | 'sold'
  badge?: string
  featured: boolean

  // Content
  description?: string
  images?: string[]

  // Timestamps
  created_at?: string
  updated_at?: string
}

export interface NavigationContextType {
  activeSection: string
  setActiveSection: (section: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  modalOpen: boolean
  setModalOpen: (open: boolean) => void
  selectedCar: Car | null
  setSelectedCar: (car: Car | null) => void
  selectedFilters: string[]
  setSelectedFilters: (filters: string[]) => void
}