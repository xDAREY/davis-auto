'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Section } from '@/components/common/Section'

export function CTABanner() {
  const router = useRouter()
  const [showCallOptions, setShowCallOptions] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowCallOptions(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <Section id="cta-banner" dark>
      <div className="relative overflow-hidden bg-gradient-to-r from-accent-gold/10 via-accent-gold/5 to-transparent border border-accent-gold/20 p-6 sm:p-10 md:p-16 lg:p-20">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="font-serif text-[clamp(1.6rem,4vw,3.2rem)] font-bold text-text-primary mb-3 md:mb-4">
            Ready to Find Your Perfect Vehicle?
          </h2>
          <p className="text-[13px] md:text-[14px] text-text-light mb-7 md:mb-10 leading-relaxed max-w-xl">
            Browse our current inventory or reach out directly — Dameon is ready to help you find the right car at the right price.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => router.push('/inventory')}
              className="luxury-button-primary py-3 px-8 text-[11px] w-full sm:w-auto"
            >
              Start Your Journey
            </button>

            {/* Call dropdown */}
            <div ref={dropdownRef} className="relative w-full sm:w-auto">
              <button
                onClick={() => setShowCallOptions((o) => !o)}
                className="luxury-button-secondary py-3 px-8 text-[11px] w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Call Us Today
                <span style={{
                  fontSize: 9,
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  transform: showCallOptions ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>▼</span>
              </button>

              {showCallOptions && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  left: 0,
                  right: 0,
                  background: 'var(--color-secondary)',
                  border: '1px solid rgba(201,162,39,0.3)',
                  zIndex: 50,
                  minWidth: 200,
                }}>
                  <a
                    href="tel:6787532700"
                    onClick={() => setShowCallOptions(false)}
                    style={{ display: 'block', padding: '14px 18px', borderBottom: '1px solid rgba(201,162,39,0.15)', textDecoration: 'none' }}
                    className="hover:bg-accent-gold/10 transition-colors"
                  >
                    <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 3 }}>
                      Business
                    </span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, color: 'var(--color-accent-gold)' }}>
                      678-753-2700
                    </span>
                  </a>
                  <a
                    href="tel:6784917134"
                    onClick={() => setShowCallOptions(false)}
                    style={{ display: 'block', padding: '14px 18px', textDecoration: 'none' }}
                    className="hover:bg-accent-gold/10 transition-colors"
                  >
                    <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 3 }}>
                      Cell
                    </span>
                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, color: 'var(--color-accent-gold)' }}>
                      678-491-7134
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact info — stacks on mobile, 3 cols on sm+ */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-tertiary/30 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Phone</p>
              <a href="tel:6787532700" className="font-serif text-base md:text-lg text-accent-gold hover:text-accent-gold-light transition-colors block">
                678-753-2700
              </a>
              <a href="tel:6784917134" className="font-serif text-base md:text-lg text-accent-gold hover:text-accent-gold-light transition-colors block mt-1">
                678-491-7134 <span className="text-[11px] text-text-muted font-sans">(Cell)</span>
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Email</p>
              <a
                href="mailto:info@davishouseofautomotives.com"
                className="font-serif text-base md:text-lg text-accent-gold hover:text-accent-gold-light transition-colors break-all"
              >
                info@davishouseofautomotives.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Address</p>
              <p className="text-[13px] text-text-muted leading-relaxed">
                2759 Delk Road Suite 2731<br />
                Marietta, GA 30067
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}