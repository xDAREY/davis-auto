import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-tertiary/30">
      <div className="container-gutter max-w-7xl mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div>
            <div className="flex flex-col leading-none mb-6">
              <span className="text-[9px] tracking-[0.3em] uppercase text-accent-gold/60 font-medium">
                Davis House of
              </span>
              <span className="font-serif text-xl tracking-[0.1em] uppercase font-bold text-text-primary">
                Automotive
              </span>
            </div>
            <p className="text-body-sm text-text-muted leading-relaxed">
              Atlanta&apos;s premier automotive brokerage. Curating excellence, facilitating access, delivering beyond expectations.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-accent-gold font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-body-sm text-text-muted hover:text-text-primary transition-colors">Home</Link></li>
              <li><Link href="/inventory" className="text-body-sm text-text-muted hover:text-text-primary transition-colors">Inventory</Link></li>
              <li><Link href="/about" className="text-body-sm text-text-muted hover:text-text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-body-sm text-text-muted hover:text-text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-accent-gold font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-body-sm text-text-muted">Vehicle Sourcing</span></li>
              {/* <li><span className="text-body-sm text-text-muted">Finance Facilitation</span></li> */}
              <li><span className="text-body-sm text-text-muted">Fleet Management</span></li>
              <li><span className="text-body-sm text-text-muted">Vehicle Inspection</span></li>
              <li><span className="text-body-sm text-text-muted">Nationwide Delivery</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-accent-gold font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-body-sm text-text-muted">
              <li className="leading-relaxed">2759 Delk Road Suite 2731<br />Marietta, GA 30067</li>
              <li><a href="tel:6787532700" className="hover:text-text-primary transition-colors">678-753-2700</a></li>
              <li><a href="tel:6784917134" className="hover:text-text-primary transition-colors">678-491-7134 (Cell)</a></li>
              <li><a href="mailto:info@davishouseofautomotives.com" className="hover:text-text-primary transition-colors">info@davishouseofautomotives.com</a></li>
            </ul>
          </div>

        </div>

        <div className="h-px bg-tertiary/30 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-text-muted">&copy; {year} Davis House of Automotive. All rights reserved.</p>
          {/* <div className="flex gap-2">
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 border border-tertiary/50 flex items-center justify-center text-[11px] font-bold text-text-muted hover:border-accent-gold/50 hover:text-accent-gold transition-all">in</a>
            <a href="#" aria-label="X" className="w-9 h-9 border border-tertiary/50 flex items-center justify-center text-[11px] font-bold text-text-muted hover:border-accent-gold/50 hover:text-accent-gold transition-all">X</a>
            <a href="#" aria-label="WhatsApp" className="w-9 h-9 border border-tertiary/50 flex items-center justify-center text-[11px] font-bold text-text-muted hover:border-accent-gold/50 hover:text-accent-gold transition-all">W</a>
          </div> */}
        </div>

      </div>
    </footer>
  )
}