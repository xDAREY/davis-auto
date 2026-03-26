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
              src="/DAVIS.jpeg"
              alt="Dameon Davis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
              <h3 className="font-serif text-[1.2rem] md:text-[1.4rem] font-semibold text-text-primary mb-1">
              Dameon Davis
              </h3>
              <p className="text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-accent-gold">
              Founder & Owner
              </p>
            </div>
            </div>

          {/* Bio */}
          <div>
            <div className="space-y-4 text-[13px] md:text-[14px] text-text-muted leading-[1.8] mb-8">
              <p>
                Dameon Davis founded Davis House of Automotives in 2022 with a clear goal — to make finding and buying a quality vehicle straightforward, honest, and stress-free for every customer he works with.
              </p>
              <p>
                Dameon understands that a vehicle is more than just transportation. It&apos;s an investment in your daily life, your family, and your future. That&apos;s why every vehicle he puts forward is carefully selected for reliability and real value — no shortcuts, no guesswork.
              </p>
              <p>
                Whether you&apos;re buying your first car or upgrading to something new, Dameon&apos;s commitment is the same: honest service, competitive pricing, and a process that puts you first. From his house to yours.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-tertiary/30">
              {[
                { value: '300', label: 'Vehicles Sold' },
                { value: '2022', label: 'Est.' },
                { value: '100%', label: 'Customer Focused' },
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