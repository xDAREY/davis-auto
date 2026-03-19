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
            <p className="text-[13px] md:text-body-sm text-text-light leading-relaxed">
              2759 Delk Road Suite 2731<br />Marietta, GA 30067
            </p>
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
              <a href="mailto:sales@davishouseauto.com" className="block text-[13px] md:text-body-sm text-text-light hover:text-accent-gold transition-colors">sales@davishouseauto.com</a>
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
    </div>
  )
}