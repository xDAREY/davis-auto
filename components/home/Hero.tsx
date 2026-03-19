'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useNavigation } from '@/app/providers'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showViewingOptions, setShowViewingOptions] = useState(false)
  const { setActiveSection } = useNavigation()
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
    setActiveSection('home')
  }, [setActiveSection])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('#viewing-dropdown')) {
        setShowViewingOptions(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">

      {/* Car image — right half, desktop only */}
      <div className="absolute top-0 right-0 w-[55%] h-full hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=80"
          alt="Luxury vehicle"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 container-gutter max-w-7xl mx-auto flex flex-col justify-center min-h-screen pt-20 pb-16">
        <div className={`max-w-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5 md:mb-8">
            <div className="w-6 md:w-8 h-px bg-accent-gold" />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-accent-gold font-medium">
              Premium Automotive Brokerage
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(2.2rem,7vw,4.8rem)] font-light text-text-primary leading-[1.05] mb-4 md:mb-6">
            Where <em className="italic text-accent-gold font-light">Excellence</em>
            <br />Meets the<br />Open Road
          </h1>

          {/* Body copy */}
          <p className="text-[13px] md:text-[14px] text-text-muted mb-7 md:mb-10 max-w-md leading-[1.8]">
            Davis House of Automotive curates the finest vehicles for discerning clients.
            Every car in our collection is hand-selected for quality, history, and performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Browse Inventory */}
            <button
              onClick={() => router.push('/inventory')}
              className="bg-accent-gold text-background text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 hover:bg-accent-gold-light transition-all duration-300"
            >
              Browse Inventory
            </button>

            {/* Schedule a Viewing — dropdown */}
            <div id="viewing-dropdown" className="relative">
              <button
                onClick={() => setShowViewingOptions((o) => !o)}
                className="border border-white/20 text-text-primary text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase px-6 py-3 hover:border-accent-gold hover:text-accent-gold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Schedule a Viewing
                <span style={{
                  fontSize: 9,
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  transform: showViewingOptions ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>▼</span>
              </button>

              {showViewingOptions && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  left: 0,
                  right: 0,
                  background: 'var(--color-secondary)',
                  border: '1px solid rgba(201,162,39,0.3)',
                  zIndex: 50,
                  minWidth: 220,
                }}>
                  {/* Call option */}
                  <a
                    href="tel:6787532700"
                    onClick={() => setShowViewingOptions(false)}
                    style={{ display: 'block', padding: '14px 18px', borderBottom: '1px solid rgba(201,162,39,0.1)', textDecoration: 'none' }}
                    className="hover:bg-accent-gold/10 transition-colors"
                  >
                    <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 3 }}>
                      Call — Business
                    </span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 17, color: 'var(--color-accent-gold)' }}>
                      678-753-2700
                    </span>
                  </a>
                  <a
                    href="tel:6784917134"
                    onClick={() => setShowViewingOptions(false)}
                    style={{ display: 'block', padding: '14px 18px', borderBottom: '1px solid rgba(201,162,39,0.1)', textDecoration: 'none' }}
                    className="hover:bg-accent-gold/10 transition-colors"
                  >
                    <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 3 }}>
                      Call — Cell
                    </span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 17, color: 'var(--color-accent-gold)' }}>
                      678-491-7134
                    </span>
                  </a>
                  {/* Email option */}
                  <a
                    href="mailto:info@davishouseofautos.com?subject=Schedule a Viewing&body=Hi Dameon,%0A%0AI'd like to schedule a viewing. Please let me know your availability.%0A%0AThank you."
                    onClick={() => setShowViewingOptions(false)}
                    style={{ display: 'block', padding: '14px 18px', textDecoration: 'none' }}
                    className="hover:bg-accent-gold/10 transition-colors"
                  >
                    <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 3 }}>
                      Email
                    </span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 17, color: 'var(--color-accent-gold)' }}>
                      info@davishouseofautos.com
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats — desktop only */}
      <div className="absolute bottom-10 right-[60px] hidden md:flex gap-12 items-end z-20">
        {[
          { value: '100+', label: 'Vehicles Sold' },
          { value: '4+', label: 'Years Experience' },
          { value: '100%', label: 'Client Satisfaction' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-serif text-[2.2rem] font-semibold text-accent-gold leading-none mb-1">{stat.value}</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}