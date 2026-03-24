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
            From Our House
            <br />
            <em className="italic text-accent-gold">To Yours</em>
          </h2>

          <div className="space-y-4 text-[13px] md:text-[14px] text-text-muted leading-[1.8] mb-8 md:mb-10">
            <p>
              At Davis House of Automotives, we believe that buying a vehicle should feel like coming home. Established in 2022, our business was built on a simple mission: to provide reliable, high-quality vehicles at prices that beat the competition.
            </p>
            <p>
              We understand that a vehicle is more than just transportation — it&apos;s an investment in your daily life, your family, and your future. That&apos;s why we take pride in carefully selecting dependable vehicles you can trust.
            </p>
            <p>
              At Davis House of Automotives, you&apos;re not just another customer — you&apos;re part of the family. Whether you&apos;re purchasing your first car or upgrading to something new, we&apos;re here to make the process smooth, transparent, and rewarding.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { value: '200+', label: 'Vehicles Sold' },
              { value: '2022', label: 'Est.' },
              { value: '100%', label: 'Customer Focused' },
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
              alt="Davis House of Automotives"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}