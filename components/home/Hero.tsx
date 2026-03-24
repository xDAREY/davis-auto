'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useNavigation } from '@/app/providers'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [search, setSearch] = useState('')
  const [showViewingOptions, setShowViewingOptions] = useState(false)
  const { setActiveSection } = useNavigation()
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    setActiveSection('home')
  }, [setActiveSection])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowViewingOptions(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSearch = () => {
    // Always go to /inventory with just the search term — no type filter
    // VehicleGrid will reset selectedFilters to [] so "All" is active
    const params = new URLSearchParams()
    if (search.trim()) params.set('search', search.trim())
    params.set('reset', '1') // signal VehicleGrid to clear any previous filters
    router.push(`/inventory?${params.toString()}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">

      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=85"
          alt="Quality vehicles"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.55) 50%, rgba(15,23,42,0.82) 100%)' }} />
      </div>

      {/* Content */}
      <div className={`relative z-20 container-gutter max-w-7xl mx-auto flex flex-col justify-center min-h-screen pt-24 pb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-accent-gold" />
          <span className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-accent-gold font-medium">
            Atlanta's Premier Automotive Broker
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(2.8rem,6vw,5.2rem)] font-light text-white leading-[1.0] mb-4 md:mb-5 max-w-2xl">
          Find Your Next
          <br />
          <em className="italic text-accent-gold font-light">Dream Vehicle</em>
        </h1>

        <p className="text-[13px] md:text-[15px] text-white/70 mb-8 md:mb-10 max-w-md leading-relaxed">
          200+ vehicles brokered. Hand-picked inventory. Zero dealership pressure.
        </p>

        {/* Search box */}
        <div
          style={{
            background: 'rgba(15,23,42,0.85)',
            border: '1px solid rgba(201,162,39,0.25)',
            padding: '16px',
            maxWidth: 580,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search by make, model, or keyword..."
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
                fontFamily: 'var(--font-outfit)',
                fontSize: 13,
                padding: '12px 16px',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(201,162,39,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />
            <button
              onClick={handleSearch}
              style={{
                background: '#C9A227',
                color: '#0F172A',
                border: 'none',
                fontFamily: 'var(--font-outfit)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                cursor: 'pointer',
                transition: 'background 0.2s',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E2BA45')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#C9A227')}
            >
              Search
            </button>
          </div>
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 10, letterSpacing: '0.05em' }}>
            Press Enter or click Search — or{' '}
            <span
              onClick={() => router.push('/inventory')}
              style={{ color: '#C9A227', cursor: 'pointer', textDecoration: 'underline' }}
            >
              browse all vehicles →
            </span>
          </p>
        </div>

        {/* Schedule a Viewing */}
        <div className="mt-5" ref={dropdownRef}>
          <div className="relative inline-block">
            <button
              onClick={() => setShowViewingOptions((o) => !o)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'white',
                fontFamily: 'var(--font-outfit)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '11px 22px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A227'; e.currentTarget.style.color = '#C9A227' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'white' }}
            >
              Schedule a Viewing
              <span style={{ fontSize: 9, transition: 'transform 0.2s', display: 'inline-block', transform: showViewingOptions ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
            </button>

            {showViewingOptions && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                background: '#1E293B',
                border: '1px solid rgba(201,162,39,0.3)',
                zIndex: 100,
                minWidth: 240,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}>
                <a href="tel:6787532700" onClick={() => setShowViewingOptions(false)}
                  style={{ display: 'block', padding: '14px 18px', borderBottom: '1px solid rgba(201,162,39,0.1)', textDecoration: 'none' }}
                  className="hover:bg-accent-gold/10 transition-colors">
                  <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 3 }}>Call — Business</span>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 17, color: '#C9A227' }}>678-753-2700</span>
                </a>
                <a href="tel:6784917134" onClick={() => setShowViewingOptions(false)}
                  style={{ display: 'block', padding: '14px 18px', borderBottom: '1px solid rgba(201,162,39,0.1)', textDecoration: 'none' }}
                  className="hover:bg-accent-gold/10 transition-colors">
                  <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 3 }}>Call — Cell</span>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 17, color: '#C9A227' }}>678-491-7134</span>
                </a>
                <a href="mailto:info@davishouseofautomotives.com?subject=Schedule a Viewing&body=Hi Dameon,%0A%0AI'd like to schedule a viewing. Please let me know your availability.%0A%0AThank you."
                  onClick={() => setShowViewingOptions(false)}
                  style={{ display: 'block', padding: '14px 18px', textDecoration: 'none' }}
                  className="hover:bg-accent-gold/10 transition-colors">
                  <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 3 }}>Email</span>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 17, color: '#C9A227' }}>info@davishouseofautomotives.com</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 md:gap-14 mt-12 md:mt-16">
          {[
            { value: '200+', label: 'Vehicles Brokered' },
            { value: '2022', label: 'Est.' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-[2rem] md:text-[2.4rem] font-semibold text-accent-gold leading-none mb-1">{stat.value}</div>
              <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}