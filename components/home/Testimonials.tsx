export function Testimonials() {
  const testimonials = [
    {
      id: '1',
      text: 'Dameon made the whole process incredibly easy. I told him what I was looking for, he found it, handled the negotiation, and I drove off within days. No dealership stress, no back and forth — just results.',
      author: 'Marcus T.',
      title: 'Small Business Owner, Atlanta, GA',
      initials: 'MT',
      highlight: true,
    },
    {
      id: '2',
      text: 'I was skeptical at first but Davis House completely changed how I think about buying a car. Dameon was upfront about everything, found me a clean BMW at a fair price, and kept me informed the whole way through.',
      author: 'Janelle R.',
      title: 'Healthcare Professional, Marietta, GA',
      initials: 'JR',
      highlight: false,
    },
    {
      id: '3',
      text: 'Bought an Audi through Davis House in spotless condition, full history, exactly as described. Dameon clearly takes pride in what he does. I\'ve already referred two colleagues to him.',
      author: 'Kevin O.',
      title: 'Entrepreneur, Decatur, GA',
      initials: 'KO',
      highlight: false,
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container-gutter max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent-gold" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
            Client Voices
          </span>
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-text-primary leading-tight mb-12">
          Trusted by <em className="italic text-accent-gold">Atlanta</em> Buyers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`p-6 md:p-8 flex flex-col bg-secondary/50 border transition-colors ${
                t.highlight ? 'border-accent-gold/50' : 'border-tertiary/30'
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="font-serif text-[3rem] text-accent-gold/30 leading-none mb-2">"</div>

              <p className="text-body-sm text-text-muted italic leading-relaxed flex-grow mb-8">
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-accent-gold/50 bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[11px] font-bold text-accent-gold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-text-primary">{t.author}</p>
                  <p className="text-[11px] text-text-muted">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}