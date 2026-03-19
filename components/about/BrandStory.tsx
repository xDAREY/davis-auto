export function BrandStory() {
  return (
    <section id="story" className="py-14 md:py-28 bg-background">
      <div className="container-gutter max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left — text */}
        <div>
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-6 md:w-8 h-px bg-accent-gold" />
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
              Who We Are
            </span>
          </div>

          <h2 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-light text-text-primary leading-tight mb-6 md:mb-8">
            Atlanta&apos;s Home for
            <br />
            <em className="italic text-accent-gold">Premium</em> Vehicle Brokerage
          </h2>

          <div className="space-y-4 text-[13px] md:text-[14px] text-text-muted leading-[1.8] mb-8 md:mb-10">
            <p>
              Davis House of Automotive was built on one straightforward principle: connecting buyers with the right vehicle at the right price, without the hassle or guesswork that too often defines the car-buying experience.
            </p>
            <p>
              Based in Marietta, Georgia, we serve the greater Atlanta area as a dedicated automotive brokerage, sourcing quality pre-owned and luxury vehicles, handling the negotiation on your behalf, and ensuring every car we represent meets our standard before it reaches you.
            </p>
            <p>
              We are not a dealership. We are your advocate in the market, working exclusively in your interest to find the vehicle you want, at a price that makes sense.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { value: '200+', label: 'Vehicles Brokered' },
              { value: '4+', label: 'Years in Business' },
              { value: 'ATL', label: 'Based in Atlanta' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-[2rem] md:text-[2.5rem] font-semibold text-accent-gold leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — desktop only */}
        <div className="relative hidden md:block h-[520px]">
          <div className="absolute top-0 right-0 w-[75%] h-[75%] border border-accent-gold/40 z-0" />
          <div className="absolute bottom-0 right-8 w-[65%] h-[70%] overflow-hidden z-10">
            <img
              src="https://images.unsplash.com/photo-1574023240744-64c47c8c0676?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Atlanta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}