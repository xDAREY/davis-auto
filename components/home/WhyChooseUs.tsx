import Link from 'next/link'

export function WhyChooseUs() {
  const reasons = [
    {
      number: '01',
      title: 'Verified Vehicle History',
      description: 'Every vehicle we source undergoes thorough background checks and inspection. You know exactly what you\'re getting before you commit.',
    },
    {
      number: '02',
      title: 'White-Glove Service',
      description: 'From first inquiry to final handover, Dameon handles the entire process — so you don\'t have to deal with dealerships, negotiations, or paperwork alone.',
    },
    {
      number: '03',
      title: 'We Work for You',
      description: 'As a broker, our loyalty is to the buyer. We search the market on your behalf, negotiate the best price, and only bring you vehicles worth your time.',
    },
    {
      number: '04',
      title: 'Atlanta Local, Personally Accountable',
      description: 'We\'re not a faceless dealership. Dameon is directly reachable, personally involved in every transaction, and invested in your satisfaction.',
    },
  ]

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Left — content */}
        <div className="container-gutter pr-8 md:pr-16 flex flex-col justify-center py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent-gold" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
              Why Choose Us
            </span>
          </div>

          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-text-primary leading-tight mb-12">
            A Standard <em className="italic text-accent-gold">Above</em> the Rest
          </h2>

          <div className="divide-y divide-tertiary/30">
            {reasons.map((reason) => (
              <div key={reason.number} className="flex gap-8 py-6">
                <span className="text-[2rem] font-serif font-bold text-accent-gold/30 leading-none w-8 flex-shrink-0 mt-1">
                  {reason.number}
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">{reason.title}</h3>
                  <p className="text-body-sm text-text-muted leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image with stat overlay */}
        <div className="relative hidden md:block">
          <img
            src="https://dealerimages.dealereprocess.com/image/upload/1320875.jpg"
            alt="Luxury vehicle"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />

          <div className="absolute bottom-8 right-8 border border-accent-gold/40 bg-background/90 backdrop-blur-sm p-6 min-w-[160px]">
            <div className="font-serif text-[2.5rem] font-bold text-accent-gold leading-none mb-1">
              4+
            </div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-text-muted">
              Years of Excellence
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}