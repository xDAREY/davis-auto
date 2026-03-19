import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { InventoryHero } from '@/components/inventory/InventoryHero'
import { FilterBar } from '@/components/inventory/FilterBar'
import { VehicleGrid } from '@/components/inventory/VehicleGrid'
import { VehicleModal } from '@/components/inventory/VehicleModal'

export const metadata = {
  title: 'Inventory | Davis House of Automotive',
  description: 'Browse our collection of luxury and high-performance vehicles.',
}

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navigation />
      <InventoryHero />
      <FilterBar />
      <VehicleGrid />
      <Footer />
      <VehicleModal />
    </main>
  )
}