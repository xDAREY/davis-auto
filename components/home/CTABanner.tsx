'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Section } from '@/components/common/Section'

export function CTABanner() {
  const router = useRouter()
  const [showCallOptions, setShowCallOptions] = useState(false)

  return (
    <Section id="cta-banner" dark>
      <div className="relative overflow-hidden bg-gradient-to-r from-accent-gold/10 via-accent-gold/5 to-transparent border border-accent-gold/20 p-8 md:p-16 lg:p-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-bold text-text-primary mb-4">
            Ready to Find Your Perfect Vehicle?
          </h2>
          <p className="text-[14px] text-text-light mb-8 md:mb-10 leading-relaxed">
            Browse our current inventory or reach out directly — Dameon is ready to help you find the right car at the right price.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => router.push('/inventory')}
              className="luxury-button-primary px-10 py-4"
            >
              Start Your Journey
            </button>

            {/* Call button with dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCallOptions((o) => !o)}
                className="luxury-button-secondary px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Call Us Today
                <span
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.2s',
                    transform: showCallOptions ? 'rotate(180deg)' : 'rotate(0deg)',
                    fontSize: 10,
                  }}
                >
                  ▼
                </span>
              </button>

              {showCallOptions && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: 0,
                    background: 'var(--color-secondary)',
                    border: '1px solid rgba(201,162,39,0.3)',
                    zIndex: 50,
                    minWidth: 220,
                  }}
                >
                  <a
                    href="tel:6787532700"
                    onClick={() => setShowCallOptions(false)}
                    style={{
                      display: 'block',
                      padding: '14px 20px',
                      borderBottom: '1px solid rgba(201,162,39,0.15)',
                      textDecoration: 'none',
                    }}
                    className="hover:bg-accent-gold/10 transition-colors"
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: 10,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: 3,
                      }}
                    >
                      Business
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: 18,
                        color: 'var(--color-accent-gold)',
                      }}
                    >
                      678-753-2700
                    </span>
                  </a>
                  <a
                    href="tel:6784917134"
                    onClick={() => setShowCallOptions(false)}
                    style={{
                      display: 'block',
                      padding: '14px 20px',
                      textDecoration: 'none',
                    }}
                    className="hover:bg-accent-gold/10 transition-colors"
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: 10,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: 3,
                      }}
                    >
                      Cell
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: 18,
                        color: 'var(--color-accent-gold)',
                      }}
                    >
                      678-491-7134
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 md:mt-14 pt-8 border-t border-tertiary/30 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Phone</p>
              <a
                href="tel:6787532700"
                className="font-serif text-lg text-accent-gold hover:text-accent-gold-light transition-colors block"
              >
                678-753-2700
              </a>
              <a
                href="tel:6784917134"
                className="font-serif text-lg text-accent-gold hover:text-accent-gold-light transition-colors block mt-1"
              >
                678-491-7134{' '}
                <span className="text-[11px] text-text-muted font-sans">(Cell)</span>
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Email</p>
              <a
                href="mailto:info@davishouseofautos.com"
                className="font-serif text-lg text-accent-gold hover:text-accent-gold-light transition-colors"
              >
                info@davishouseofautos.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">Address</p>
              <p className="text-[13px] text-text-muted leading-relaxed">
                2759 Delk Road Suite 2731
                <br />
                Marietta, GA 30067
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}