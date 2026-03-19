'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useNavigation } from '@/app/providers'

export function ContactHero() {
  const { setActiveSection } = useNavigation()

  useEffect(() => {
    setActiveSection('contact')
  }, [setActiveSection])

  return (
    <div className="pt-24 md:pt-40 pb-10 md:pb-20 border-b border-tertiary/30">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        <Link href="/" style={{ color: 'rgba(201,162,39,0.6)', textDecoration: 'none' }} className="hover:text-accent-gold transition-colors">Home</Link>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
        <span style={{ color: '#CBD5E1' }}>Contact</span>
      </nav>

      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-6 md:w-8 h-px bg-accent-gold" />
        <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
          Get in Touch
        </span>
      </div>
      <h1 className="font-serif text-[clamp(2.2rem,6vw,5rem)] font-bold text-text-primary leading-tight mb-4 md:mb-6">
        We&apos;re Here to <em className="italic text-accent-gold">Help</em>
      </h1>
      <p className="text-[13px] md:text-body-base text-text-muted max-w-lg leading-relaxed">
        Whether you have a question about a vehicle, need help with financing,
        or are ready to begin your journey — our team is standing by.
      </p>
    </div>
  )
}