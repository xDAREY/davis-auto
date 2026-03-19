export function WhyChooseUs() {
  const reasons = [
    {
      number: '01',
      title: 'Verified Vehicle History',
      description: 'Every vehicle undergoes thorough background checks. You know exactly what you\'re getting before you commit.',
    },
    {
      number: '02',
      title: 'White-Glove Service',
      description: 'Dameon handles the entire process — sourcing, negotiating, paperwork — so you don\'t have to.',
    },
    {
      number: '03',
      title: 'We Work for You',
      description: 'As your broker, our loyalty is to the buyer. We negotiate on your behalf and only bring you vehicles worth your time.',
    },
    {
      number: '04',
      title: 'Locally Accountable',
      description: 'Based in Atlanta. Dameon is directly reachable and personally involved in every single transaction.',
    },
  ]

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 560 }}>
        <div className="container-gutter md:pr-16 flex flex-col justify-center py-12 md:py-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent-gold" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">Why Choose Us</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-text-primary leading-tight mb-10">
            A Standard <em className="italic text-accent-gold">Above</em> the Rest
          </h2>
          <div className="divide-y divide-tertiary/30">
            {reasons.map((reason) => (
              <div key={reason.number} className="flex gap-6 py-5">
                <span className="font-serif text-[1.8rem] font-bold leading-none flex-shrink-0 mt-0.5" style={{ color: 'rgba(201,162,39,0.25)', minWidth: 32 }}>
                  {reason.number}
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary text-[14px] mb-1.5">{reason.title}</h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — car fleet / dealership lot */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=800&q=85"
            alt="Car dealership fleet"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          <div className="absolute bottom-8 right-8 border border-accent-gold/40 bg-background/90 backdrop-blur-sm p-6" style={{ minWidth: 160 }}>
            <div className="font-serif text-[2.5rem] font-bold text-accent-gold leading-none mb-1">200+</div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-text-muted">Vehicles Brokered</div>
          </div>
        </div>
      </div>
    </section>
  )
}