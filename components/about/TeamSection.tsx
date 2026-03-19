export function TeamSection() {
  return (
    <section id="team" className="py-14 md:py-28 bg-background">
      <div className="container-gutter max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-6 md:w-8 h-px bg-accent-gold" />
          <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
            The Person Behind the Brand
          </span>
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-light text-text-primary leading-tight mb-10 md:mb-14">
          Meet <em className="italic text-accent-gold">Dameon</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="group relative overflow-hidden aspect-[4/3] md:aspect-[3/4] max-w-md mx-auto md:mx-0 w-full">
            <img
              src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&q=80"
              alt="Dameon Davis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
              <h3 className="font-serif text-[1.2rem] md:text-[1.4rem] font-semibold text-text-primary mb-1">
                Dameon Davis
              </h3>
              <p className="text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-accent-gold">
                Founder & Principal Broker
              </p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="space-y-4 text-[13px] md:text-[14px] text-text-muted leading-[1.8] mb-8">
              <p>
                Dameon Davis started Davis House of Automotive with a clear goal — to make finding and acquiring a quality vehicle straightforward, transparent, and stress-free for every client he works with.
              </p>
              <p>
                With years of experience navigating the Atlanta automotive market, Dameon has developed the relationships, knowledge, and instinct to consistently source vehicles that meet his clients&apos; exact needs, whether that&apos;s a daily driver, a luxury SUV, or something more specific.
              </p>
              <p>
                As a broker, Dameon works for the buyer, not the seller. Every search, every negotiation, and every handover reflects that commitment. No pressure, no shortcuts, just honest work done right.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-tertiary/30">
              {[
                { value: '200+', label: 'Vehicles Brokered' },
                { value: '4+', label: 'Years Experience' },
                { value: 'ATL', label: 'Atlanta Based' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-[1.8rem] md:text-[2rem] font-semibold text-accent-gold leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}