'use client'

import { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@/app/providers'

export function VehicleModal() {
  const { modalOpen, setModalOpen, selectedCar } = useNavigation()
  const modalRef = useRef<HTMLDivElement>(null)
  const [showCallOptions, setShowCallOptions] = useState(false)

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
      setShowCallOptions(false)
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) setModalOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen, setModalOpen])

  if (!modalOpen || !selectedCar) return null

  const images = selectedCar.images ?? []

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      onClick={() => setModalOpen(false)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative z-10 w-full md:w-full md:max-w-2xl bg-secondary border border-tertiary/50 rounded-t-xl md:rounded-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-8">

          {/* Images */}
          {images.length > 0 && (
            <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-tertiary/30 cursor-pointer hover:border-accent-gold/50 transition-colors"
                >
                  <img
                    src={image}
                    alt={`${selectedCar.year} ${selectedCar.make} ${selectedCar.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-serif text-display-md font-bold text-text-primary">
                  {selectedCar.year} {selectedCar.make}
                </h2>
                <p className="text-heading-lg text-accent-gold">{selectedCar.model}</p>
              </div>
              <div className="text-right">
                <div className="text-heading-xl font-bold text-accent-gold">
                  ${selectedCar.price.toLocaleString()}
                </div>
                <span className={`inline-block text-body-xs font-semibold px-3 py-1 rounded-full mt-2 ${
                  selectedCar.status === 'available'
                    ? 'bg-emerald-500/90 text-white'
                    : selectedCar.status === 'reserved'
                    ? 'border border-accent-gold text-accent-gold'
                    : 'bg-red-500/90 text-white'
                }`}>
                  {selectedCar.status === 'available'
                    ? 'Available'
                    : selectedCar.status === 'reserved'
                    ? 'Reserved'
                    : 'Sold'}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          {selectedCar.description && (
            <p className="text-body-base text-text-light mb-8">{selectedCar.description}</p>
          )}

          {/* Specs Grid */}
          <div className="mb-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Year',         value: selectedCar.year },
              { label: 'Make',         value: selectedCar.make },
              { label: 'Model',        value: selectedCar.model },
              { label: 'Engine',       value: selectedCar.engine },
              { label: 'Transmission', value: selectedCar.transmission },
              { label: 'Drivetrain',   value: selectedCar.drivetrain },
              { label: 'Mileage',      value: selectedCar.mileage },
              { label: 'Colour',       value: selectedCar.color },
              { label: 'Fuel Type',    value: selectedCar.fuel_type },
              { label: 'Seats',        value: selectedCar.seats },
              { label: 'Prev. Owners', value: selectedCar.previous_owners },
              { label: 'VIN',          value: selectedCar.vin },
            ]
              .filter((s) => s.value !== undefined && s.value !== null && s.value !== '')
              .map((spec) => (
                <div key={spec.label} className="p-4 rounded-lg bg-tertiary/30">
                  <span className="block text-body-xs text-text-muted font-medium mb-1">
                    {spec.label}
                  </span>
                  <span className="text-body-base text-text-primary font-semibold">
                    {spec.value}
                  </span>
                </div>
              ))}
          </div>

          {/* Type badge */}
          {selectedCar.type && (
            <div className="mb-8">
              <p className="text-body-sm text-text-muted mb-2">Category</p>
              <span className="px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-body-xs text-accent-gold capitalize">
                {selectedCar.type}
              </span>
            </div>
          )}

          {/* CTA */}
          <div className="pt-8 border-t border-tertiary/30">

            {/* Call dropdown — shown when Schedule Viewing is clicked */}
            {showCallOptions && (
              <div
                className="mb-4 border border-accent-gold/30 overflow-hidden"
                style={{ background: 'var(--color-secondary)' }}
              >
                <p
                  style={{
                    padding: '10px 20px',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    borderBottom: '1px solid rgba(201,162,39,0.15)',
                  }}
                >
                  Choose a number to call
                </p>
                <a
                  href={`tel:6787532700`}
                  onClick={() => setShowCallOptions(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderBottom: '1px solid rgba(201,162,39,0.15)',
                    textDecoration: 'none',
                  }}
                  className="hover:bg-accent-gold/10 transition-colors"
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: 10,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: 2,
                      }}
                    >
                      Business
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: 20,
                        color: 'var(--color-accent-gold)',
                      }}
                    >
                      678-753-2700
                    </span>
                  </div>
                  <svg style={{ width: 16, height: 16, color: 'var(--color-accent-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a
                  href={`tel:6784917134`}
                  onClick={() => setShowCallOptions(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    textDecoration: 'none',
                  }}
                  className="hover:bg-accent-gold/10 transition-colors"
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: 10,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: 2,
                      }}
                    >
                      Cell
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: 20,
                        color: 'var(--color-accent-gold)',
                      }}
                    >
                      678-491-7134
                    </span>
                  </div>
                  <svg style={{ width: 16, height: 16, color: 'var(--color-accent-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => setShowCallOptions((o) => !o)}
                className="flex-1 luxury-button-primary"
              >
                {showCallOptions ? 'Cancel' : 'Schedule Viewing'}
              </button>
              <a
                href={`mailto:info@davishouseofautos.com?subject=Information Request: ${selectedCar.year} ${selectedCar.make} ${selectedCar.model}&body=Hi Dameon,%0A%0AI'm interested in the ${selectedCar.year} ${selectedCar.make} ${selectedCar.model} listed at $${selectedCar.price.toLocaleString()}. Could you please send me more information?%0A%0AThank you.`}
                className="flex-1 luxury-button-secondary text-center"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Request Information
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}