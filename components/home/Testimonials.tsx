export function Testimonials() {
  const testimonials = [
    {
      id: '1',
      text: 'My experience with Mr. Davis was exceptionally outstanding. He treated me as if I was family — upfront and honest about the vehicle, including minor issues. I got a great deal within my budget. I have recommended several of my family and friends to this company.',
      author: 'Gloria Breeland',
      title: 'Verified Google Review · 2023',
      initials: 'GB',
      highlight: true,
    },
    {
      id: '2',
      text: 'He was punctual, straight to the point, answered every question I had. Took care of all my tax, title, and tag information. I currently drive the car as of today with no mechanical issues. I wish there were more salesmen out here that stand on business.',
      author: 'Putback Shawty',
      title: 'Verified Google Review · Oct 2024',
      initials: 'PS',
      highlight: false,
    },
    {
      id: '3',
      text: 'Everything that was told to me about the vehicle was true. Meeting up and test driving was at ease, and all my interactions with Mr. Davis have been beyond wonderful. My Jeep has been my pride and joy since I got it!',
      author: 'Taylor Thrash',
      title: 'Verified Google Review · Feb 2024',
      initials: 'TT',
      highlight: false,
    },
  ]

  return (
    <section id="testimonials" className="py-14 md:py-24" style={{ background: 'rgba(30,41,59,0.4)' }}>
      <div className="container-gutter max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-accent-gold" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
            Client Voices
          </span>
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-bold text-text-primary leading-tight mb-10 md:mb-14">
          Trusted by <em className="italic text-accent-gold">Buyers</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col p-6 md:p-8 transition-all duration-300"
              style={{
                background: t.highlight ? 'rgba(201,162,39,0.06)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${t.highlight ? 'rgba(201,162,39,0.4)' : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[13px] text-text-muted leading-[1.9] flex-grow mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.3)' }}
                >
                  <span className="text-[11px] font-bold text-accent-gold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">{t.author}</p>
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