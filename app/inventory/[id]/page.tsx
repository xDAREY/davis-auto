'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Car } from '@/lib/types'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export default function CarPage() {
  const { id } = useParams<{ id: string }>()
  const [car, setCar] = useState<Car | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeImg, setActiveImg] = useState(0)
  const [showCallOptions, setShowCallOptions] = useState(false)

  useEffect(() => {
    if (!id) return
    const fetchCar = async () => {
      const { data } = await supabase.from('cars').select('*').eq('id', id).single()
      setCar(data ?? null)
      setIsLoading(false)
    }
    fetchCar()
  }, [id])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!car?.images?.length) return
      if (e.key === 'ArrowRight') setActiveImg((i) => Math.min(i + 1, car.images!.length - 1))
      if (e.key === 'ArrowLeft') setActiveImg((i) => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [car])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div style={{ width: 36, height: 36, border: '2px solid rgba(201,162,39,0.3)', borderTopColor: '#C9A227', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        </div>
      </main>
    )
  }

  if (!car) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="container-gutter max-w-7xl mx-auto pt-40 text-center">
          <p className="text-text-muted text-lg mb-6">Vehicle not found.</p>
          <Link href="/inventory" className="text-accent-gold hover:underline text-sm">← Back to Inventory</Link>
        </div>
        <Footer />
      </main>
    )
  }

  const images = car.images ?? []

  // mailto href built separately so it's clean
  const mailtoHref = `mailto:info@davishouseofautos.com?subject=Information%20Request%3A%20${encodeURIComponent(`${car.year} ${car.make} ${car.model}`)}&body=${encodeURIComponent(`Hi Dameon,\n\nI'm interested in the ${car.year} ${car.make} ${car.model} listed at $${car.price.toLocaleString()}. Could you please send me more information?\n\nThank you.`)}`

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navigation />

      {/* Breadcrumb */}
      <div className="container-gutter max-w-7xl mx-auto pt-28 pb-4">
        <nav className="flex items-center gap-2" style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <Link href="/" style={{ color: 'rgba(201,162,39,0.6)', textDecoration: 'none' }} className="hover:text-accent-gold transition-colors">Home</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
          <Link href="/inventory" style={{ color: 'rgba(201,162,39,0.6)', textDecoration: 'none' }} className="hover:text-accent-gold transition-colors">Inventory</Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
          <span style={{ color: '#CBD5E1' }}>{car.year} {car.make} {car.model}</span>
        </nav>
      </div>

      <div className="container-gutter max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Images */}
          <div className="lg:sticky lg:top-24">
            <div className="relative bg-black mb-2" style={{ aspectRatio: '16/9' }}>
              {images.length > 0 ? (
                <img src={images[activeImg]} alt={`${car.year} ${car.make} ${car.model}`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span style={{ fontFamily: 'var(--font-outfit)', color: '#64748B', fontSize: 13 }}>No image available</span>
                </div>
              )}

              {images.length > 1 && (
                <>
                  <button onClick={() => setActiveImg((i) => Math.max(i - 1, 0))} disabled={activeImg === 0}
                    style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', width: 38, height: 38, background: 'rgba(0,0,0,0.6)', border: 'none', color: 'white', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: activeImg === 0 ? 0.2 : 1, transition: 'opacity 0.2s' }}>‹</button>
                  <button onClick={() => setActiveImg((i) => Math.min(i + 1, images.length - 1))} disabled={activeImg === images.length - 1}
                    style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', width: 38, height: 38, background: 'rgba(0,0,0,0.6)', border: 'none', color: 'white', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: activeImg === images.length - 1 ? 0.2 : 1, transition: 'opacity 0.2s' }}>›</button>
                  <div style={{ position: 'absolute', bottom: 10, right: 12, fontFamily: 'var(--font-outfit)', fontSize: 10, letterSpacing: '0.1em', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '3px 8px' }}>
                    {activeImg + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
                {images.map((src, idx) => (
                  <button key={idx} onClick={() => setActiveImg(idx)}
                    style={{ flexShrink: 0, width: 76, height: 52, padding: 0, cursor: 'pointer', border: `2px solid ${idx === activeImg ? '#C9A227' : 'rgba(255,255,255,0.06)'}`, opacity: idx === activeImg ? 1 : 0.5, transition: 'all 0.2s' }}>
                    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Details */}
          <div>
            <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#F8F5EE', lineHeight: 1.2, marginBottom: 12 }}>
              {car.year} {car.make} {car.model}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700, color: '#C9A227' }}>
                ${car.price.toLocaleString()}
              </span>
              <span style={{
                fontFamily: 'var(--font-outfit)', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px',
                ...(car.status === 'available'
                  ? { background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.25)' }
                  : car.status === 'reserved'
                  ? { border: '1px solid #C9A227', color: '#C9A227' }
                  : { background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.25)' })
              }}>
                {car.status === 'available' ? 'Available' : car.status === 'reserved' ? 'Reserved' : 'Sold'}
              </span>
            </div>

            {car.description && (
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: '#94A3B8', lineHeight: 1.8, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {car.description}
              </p>
            )}

            {/* Specs */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A227', marginBottom: 10, opacity: 0.7 }}>
                Vehicle Specifications
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Year',         value: car.year },
                  { label: 'Make',         value: car.make },
                  { label: 'Model',        value: car.model },
                  { label: 'Mileage',      value: car.mileage },
                  { label: 'Engine',       value: car.engine },
                  { label: 'Transmission', value: car.transmission },
                  { label: 'Drivetrain',   value: car.drivetrain },
                  { label: 'Fuel Type',    value: car.fuel_type },
                  { label: 'Colour',       value: car.color },
                  { label: 'Seats',        value: car.seats },
                  { label: 'Prev. Owners', value: car.previous_owners },
                  { label: 'VIN',          value: car.vin },
                ]
                  .filter((s) => s.value !== undefined && s.value !== null && s.value !== '')
                  .map((spec) => (
                    <div key={spec.label} style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-outfit)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A227', opacity: 0.8, marginBottom: 4 }}>
                        {spec.label}
                      </span>
                      <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, fontWeight: 500, color: '#F1F5F9' }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {car.type && (
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A227', opacity: 0.7 }}>Category</span>
                <div style={{ marginTop: 6 }}>
                  <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A227', border: '1px solid rgba(201,162,39,0.25)', background: 'rgba(201,162,39,0.05)', padding: '4px 12px' }}>
                    {car.type}
                  </span>
                </div>
              </div>
            )}

            {/* CTA */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24 }}>
              {showCallOptions && (
                <div style={{ marginBottom: 16, border: '1px solid rgba(201,162,39,0.25)', background: '#1E293B', overflow: 'hidden' }}>
                  <p style={{ padding: '10px 16px', fontFamily: 'var(--font-outfit)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A227', opacity: 0.7, borderBottom: '1px solid rgba(201,162,39,0.12)' }}>
                    Choose a number
                  </p>
                  <a href="tel:6787532700" onClick={() => setShowCallOptions(false)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderBottom: '1px solid rgba(201,162,39,0.08)', textDecoration: 'none' }}
                    className="hover:bg-accent-gold/10 transition-colors">
                    <div>
                      <span style={{ display: 'block', fontFamily: 'var(--font-outfit)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A227', opacity: 0.7, marginBottom: 2 }}>Business</span>
                      <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 600, color: '#F1F5F9' }}>678-753-2700</span>
                    </div>
                    <svg style={{ width: 14, height: 14, color: '#C9A227' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <a href="tel:6784917134" onClick={() => setShowCallOptions(false)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', textDecoration: 'none' }}
                    className="hover:bg-accent-gold/10 transition-colors">
                    <div>
                      <span style={{ display: 'block', fontFamily: 'var(--font-outfit)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A227', opacity: 0.7, marginBottom: 2 }}>Cell</span>
                      <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 15, fontWeight: 600, color: '#F1F5F9' }}>678-491-7134</span>
                    </div>
                    <svg style={{ width: 14, height: 14, color: '#C9A227' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Buttons — full width on mobile, side by side on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowCallOptions((o) => !o)}
                  style={{
                    flex: 1,
                    background: '#C9A227',
                    color: '#0F172A',
                    border: 'none',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '16px 24px',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#E2BA45')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#C9A227')}
                >
                  {showCallOptions ? 'Cancel' : 'Schedule Viewing'}
                </button>

                {/* Request Information — native anchor with target _blank forces OS mail client */}
                <a
                  href={mailtoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    background: 'transparent',
                    color: '#C9A227',
                    border: '1px solid #C9A227',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '16px 24px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,162,39,0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  Request Information
                </a>
              </div>

              <Link href="/inventory"
                style={{ display: 'block', marginTop: 16, fontFamily: 'var(--font-outfit)', fontSize: 11, color: 'rgba(201,162,39,0.5)', textDecoration: 'none', textAlign: 'center' }}
                className="hover:text-accent-gold transition-colors">
                ← Back to Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}