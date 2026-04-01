'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useNavigation } from '@/app/providers'

const navLinks = [
  { id: 'home',      label: 'Home',      href: '/' },
  { id: 'inventory', label: 'Inventory', href: '/inventory' },
  { id: 'about',     label: 'About Us',  href: '/about' },
  { id: 'contact',   label: 'Contact',   href: '/contact' },
]

// Fully encoded — no raw spaces, newlines or special chars in the href
const MAILTO_ENQUIRY = `mailto:info@davishouseofautomotives.com?subject=${encodeURIComponent('Vehicle Inquiry')}&body=${encodeURIComponent("Hi Dameon,\n\nI'd like to enquire about one of your vehicles. Please get back to me at your earliest convenience.\n\nThank you.")}`

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [enquireOpen, setEnquireOpen] = useState(false)
  const [callOpen, setCallOpen] = useState(false)
  const enquireRef = useRef<HTMLDivElement>(null)
  const { mobileMenuOpen, setMobileMenuOpen, setActiveSection } = useNavigation()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (enquireRef.current && !enquireRef.current.contains(e.target as Node)) {
        setEnquireOpen(false); setCallOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (id: string) => { setActiveSection(id); setMobileMenuOpen(false) }
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)
  const closeAll = () => { setEnquireOpen(false); setCallOpen(false) }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/98 backdrop-blur-md py-3' : 'bg-background/80 backdrop-blur-md py-5'}`}
        style={{ borderBottom: scrolled ? '1px solid rgba(201,162,39,0.4)' : '1px solid rgba(201,162,39,0.2)' }}
      >
        <div className="container-gutter max-w-7xl mx-auto flex items-center justify-between">

          <Link href="/" onClick={() => handleNavClick('home')} className="flex flex-col leading-none group">
            <span className="text-[10px] tracking-[0.25em] uppercase text-accent-gold/60 font-medium group-hover:text-accent-gold transition-colors">Davis House of</span>
            <span className="font-serif text-[1.2rem] tracking-[0.12em] uppercase font-bold text-text-primary group-hover:text-accent-gold transition-colors">Automotive</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} onClick={() => handleNavClick(link.id)}
                className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300 pb-0.5 ${isActive(link.href) ? 'text-accent-gold border-b-2 border-accent-gold' : 'text-text-light hover:text-accent-gold border-b-2 border-transparent'}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div ref={enquireRef} className="hidden md:block relative">
            <button onClick={() => { setEnquireOpen((o) => !o); setCallOpen(false) }}
              className="border border-accent-gold text-accent-gold text-[11px] font-semibold tracking-[0.15em] uppercase px-5 py-2 hover:bg-accent-gold hover:text-background transition-all duration-300 flex items-center gap-2">
              Inquire Now
              <span style={{ fontSize: 9, display: 'inline-block', transition: 'transform 0.2s', transform: enquireOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
            </button>

            {enquireOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, minWidth: 200, background: 'var(--color-secondary)', border: '1px solid rgba(201,162,39,0.3)', zIndex: 60 }}>
                <div>
                  <button onClick={() => setCallOpen((o) => !o)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: 'none', border: 'none', borderBottom: '1px solid rgba(201,162,39,0.15)', cursor: 'pointer', color: 'var(--color-text-light)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    className="hover:bg-accent-gold/10 transition-colors">
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg style={{ width: 14, height: 14, color: 'var(--color-accent-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Us
                    </span>
                    <span style={{ fontSize: 9, transition: 'transform 0.2s', transform: callOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                  </button>
                  {callOpen && (
                    <div style={{ borderBottom: '1px solid rgba(201,162,39,0.15)' }}>
                      <a href="tel:6787532700" onClick={closeAll} style={{ display: 'flex', flexDirection: 'column', padding: '12px 18px 12px 40px', textDecoration: 'none', borderBottom: '1px solid rgba(201,162,39,0.08)' }} className="hover:bg-accent-gold/10 transition-colors">
                        <span style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 2 }}>Business</span>
                        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 17, color: 'var(--color-accent-gold)' }}>678-753-2700</span>
                      </a>
                      <a href="tel:6784917134" onClick={closeAll} style={{ display: 'flex', flexDirection: 'column', padding: '12px 18px 12px 40px', textDecoration: 'none' }} className="hover:bg-accent-gold/10 transition-colors">
                        <span style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 2 }}>Cell</span>
                        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 17, color: 'var(--color-accent-gold)' }}>678-491-7134</span>
                      </a>
                    </div>
                  )}
                </div>
                {/* target _blank tells the browser to hand this off to the OS, not handle it as a route */}
                <a href={MAILTO_ENQUIRY} target="_blank" rel="noopener noreferrer" onClick={closeAll}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px', textDecoration: 'none', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}
                  className="hover:bg-accent-gold/10 transition-colors">
                  <svg style={{ width: 14, height: 14, color: 'var(--color-accent-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
              </div>
            )}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-accent-gold" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center justify-start pt-8 gap-8">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} onClick={() => handleNavClick(link.id)}
                className={`font-serif text-heading-md transition-colors duration-300 ${isActive(link.href) ? 'text-accent-gold' : 'text-text-light'}`}>
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col items-center gap-3 mt-2">
              <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Get in Touch</p>
              <a href="tel:6787532700" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}
                className="border border-accent-gold text-accent-gold text-body-xs font-semibold tracking-[0.15em] uppercase px-6 py-2.5 hover:bg-accent-gold hover:text-background transition-all duration-300">
                678-753-2700 (Business)
              </a>
              <a href="tel:6784917134" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none' }}
                className="border border-accent-gold text-accent-gold text-body-xs font-semibold tracking-[0.15em] uppercase px-6 py-2.5 hover:bg-accent-gold hover:text-background transition-all duration-300">
                678-491-7134 (Cell)
              </a>
              <a href={MAILTO_ENQUIRY} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: 'none' }}
                className="border border-white/20 text-text-muted text-body-xs font-semibold tracking-[0.15em] uppercase px-6 py-2.5 hover:border-accent-gold hover:text-accent-gold transition-all duration-300">
                Send Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}