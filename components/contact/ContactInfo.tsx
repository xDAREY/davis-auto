'use client'

export function ContactInfo() {
  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="font-serif text-[1.5rem] md:text-[1.8rem] font-bold text-text-primary mb-6 md:mb-8">
        Reach Us Directly
      </h2>

      {[
        {
          icon: (
            <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          label: 'Location',
          content: (
            <div>
              <p className="text-[13px] md:text-body-sm text-text-light leading-relaxed mb-2">
                2759 Delk Road Suite 2731<br />Marietta, GA 30067
              </p>
              <a
                href="https://maps.google.com/?q=2759+Delk+Road+Suite+2731+Marietta+GA+30067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.12em] uppercase text-accent-gold hover:text-accent-gold-light transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in Maps
              </a>
            </div>
          ),
        },
        {
          icon: (
            <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          ),
          label: 'Phone',
          content: (
            <>
              <a href="tel:6787532700" className="block text-[13px] md:text-body-sm text-text-light hover:text-accent-gold transition-colors">678-753-2700 (Business)</a>
              <a href="tel:6784917134" className="block text-[13px] md:text-body-sm text-text-light hover:text-accent-gold transition-colors">678-491-7134 (Cell)</a>
            </>
          ),
        },
        {
          icon: (
            <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          label: 'Email',
          content: (
            <>
              <a href="mailto:info@davishouseofautos.com" className="block text-[13px] md:text-body-sm text-text-light hover:text-accent-gold transition-colors">info@davishouseofautos.com</a>
            </>
          ),
        },
      ].map((item) => (
        <div key={item.label} className="flex gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 border border-accent-gold/40 flex items-center justify-center flex-shrink-0">
            {item.icon}
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent-gold font-semibold mb-1">{item.label}</p>
            {item.content}
          </div>
        </div>
      ))}

      {/* Business Hours */}
      <div className="mt-6 md:mt-8 border border-tertiary/40 p-5 md:p-6">
        <h3 className="font-serif text-[1rem] font-bold text-accent-gold mb-4 md:mb-5">Business Hours</h3>
        <div className="space-y-2 md:space-y-3">
          {[
            { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
            { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
            { day: 'Sunday', hours: 'By Appointment' },
          ].map((row) => (
            <div key={row.day} className="flex justify-between text-[12px] md:text-body-sm">
              <span className="text-text-muted">{row.day}</span>
              <span className="text-text-light">{row.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded map */}
      <div className="border border-tertiary/40 overflow-hidden" style={{ height: 220 }}>
        <iframe
          title="Davis House of Automotive location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.6!2d-84.5318!3d33.9304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f518e4a1234567%3A0x0!2s2759+Delk+Rd+%232731%2C+Marietta%2C+GA+30067!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="220"
          style={{ border: 0, filter: 'grayscale(80%) invert(5%) contrast(90%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}