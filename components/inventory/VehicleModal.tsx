'use client'

import { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@/app/providers'

export function VehicleModal() {
  const { modalOpen, setModalOpen, selectedCar } = useNavigation()
  const modalRef = useRef<HTMLDivElement>(null)
  const [showCallOptions, setShowCallOptions] = useState(false)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('no-scroll')
      setActiveImg(0)
    } else {
      document.body.classList.remove('no-scroll')
      setShowCallOptions(false)
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) setModalOpen(false)
      if (e.key === 'ArrowRight' && modalOpen) setActiveImg((i) => Math.min(i + 1, (selectedCar?.images?.length ?? 1) - 1))
      if (e.key === 'ArrowLeft' && modalOpen) setActiveImg((i) => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen, setModalOpen, selectedCar])

  if (!modalOpen || !selectedCar) return null

  const images = selectedCar.images ?? []
  const hasImages = images.length > 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      onClick={() => setModalOpen(false)}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        ref={modalRef}
        className="relative z-10 w-full md:max-w-3xl bg-secondary border border-tertiary/50 rounded-t-xl md:rounded-none max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 text-text-muted hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main image — large, clickable to cycle */}
        {hasImages && (
          <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
            <img
              src={images[activeImg]}
              alt={`${selectedCar.year} ${selectedCar.make} ${selectedCar.model}`}
              className="w-full h-full object-cover"
            />

            {/* Prev / Next arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImg((i) => Math.max(i - 1, 0))}
                  disabled={activeImg === 0}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white transition-all disabled:opacity-20"
                >
                  ‹
                </button>
                <button
                  onClick={() => setActiveImg((i) => Math.min(i + 1, images.length - 1))}
                  disabled={activeImg === images.length - 1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white transition-all disabled:opacity-20"
                >
                  ›
                </button>

                {/* Counter */}
                <div className="absolute bottom-3 right-3 text-[10px] tracking-widest uppercase bg-black/60 text-white px-2 py-1">
                  {activeImg + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        )}

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-1.5 overflow-x-auto p-3 scrollbar-none bg-black/30">
            {images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                className="flex-shrink-0 transition-all"
                style={{
                  width: 72, height: 48,
                  border: `2px solid ${idx === activeImg ? '#C9A227' : 'transparent'}`,
                  opacity: idx === activeImg ? 1 : 0.55,
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 md:p-8">

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-text-primary">
                {selectedCar.year} {selectedCar.make} {selectedCar.model}
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-serif text-xl font-bold text-accent-gold">
                  ${selectedCar.price.toLocaleString()}
                </span>
                <span className={`text-[9px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 ${
                  selectedCar.status === 'available'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : selectedCar.status === 'reserved'
                    ? 'border border-accent-gold text-accent-gold'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {selectedCar.status === 'available' ? 'Available' : selectedCar.status === 'reserved' ? 'Reserved' : 'Sold'}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          {selectedCar.description && (
            <p className="text-[13px] text-text-light leading-relaxed mb-6 pb-6 border-b border-tertiary/30">
              {selectedCar.description}
            </p>
          )}

          {/* Specs grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Year',          value: selectedCar.year },
              { label: 'Make',          value: selectedCar.make },
              { label: 'Model',         value: selectedCar.model },
              { label: 'Engine',        value: selectedCar.engine },
              { label: 'Transmission',  value: selectedCar.transmission },
              { label: 'Drivetrain',    value: selectedCar.drivetrain },
              { label: 'Mileage',       value: selectedCar.mileage },
              { label: 'Colour',        value: selectedCar.color },
              { label: 'Fuel Type',     value: selectedCar.fuel_type },
              { label: 'Seats',         value: selectedCar.seats },
              { label: 'Prev. Owners',  value: selectedCar.previous_owners },
              { label: 'VIN',           value: selectedCar.vin },
            ]
              .filter((s) => s.value !== undefined && s.value !== null && s.value !== '')
              .map((spec) => (
                <div key={spec.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '10px 14px' }}>
                  <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 4 }}>
                    {spec.label}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#F8F5EE' }}>
                    {spec.value}
                  </span>
                </div>
              ))}
          </div>

          {/* Type */}
          {selectedCar.type && (
            <div className="mb-6">
              <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94A3B8' }}>Category</span>
              <div className="mt-1.5">
                <span className="px-3 py-1 text-[10px] tracking-[0.1em] uppercase text-accent-gold border border-accent-gold/30 bg-accent-gold/5 capitalize">
                  {selectedCar.type}
                </span>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-6 border-t border-tertiary/30">
            {showCallOptions && (
              <div className="mb-4 border border-accent-gold/30 overflow-hidden" style={{ background: '#1E293B' }}>
                <p style={{ padding: '10px 18px', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94A3B8', borderBottom: '1px solid rgba(201,162,39,0.15)' }}>
                  Choose a number to call
                </p>
                <a href="tel:6787532700" onClick={() => setShowCallOptions(false)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid rgba(201,162,39,0.1)', textDecoration: 'none' }}
                  className="hover:bg-accent-gold/10 transition-colors">
                  <div>
                    <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 2 }}>Business</span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 19, color: '#C9A227' }}>678-753-2700</span>
                  </div>
                  <svg style={{ width: 15, height: 15, color: '#C9A227' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="tel:6784917134" onClick={() => setShowCallOptions(false)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', textDecoration: 'none' }}
                  className="hover:bg-accent-gold/10 transition-colors">
                  <div>
                    <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 2 }}>Cell</span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 19, color: '#C9A227' }}>678-491-7134</span>
                  </div>
                  <svg style={{ width: 15, height: 15, color: '#C9A227' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowCallOptions((o) => !o)}
                className="flex-1 luxury-button-primary text-[11px]"
              >
                {showCallOptions ? 'Cancel' : 'Schedule Viewing'}
              </button>
              <a
                href={`mailto:info@davishouseofautos.com?subject=Information Request: ${selectedCar.year} ${selectedCar.make} ${selectedCar.model}&body=Hi Dameon,%0A%0AI'm interested in the ${selectedCar.year} ${selectedCar.make} ${selectedCar.model} listed at $${selectedCar.price.toLocaleString()}. Could you please send me more information?%0A%0AThank you.`}
                className="flex-1 luxury-button-secondary text-[11px] text-center"
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