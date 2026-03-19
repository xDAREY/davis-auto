export function Marquee() {
  const marqueeItems = [
    'EXECUTIVE FLEET',
    'CERTIFIED PRE-OWNED',
    'LUXURY VEHICLES',
    'FULL INSPECTION REPORTS',
    'TRUSTED BROKERAGE',
  ]

  return (
    <div className="w-full bg-secondary/40 border-y border-tertiary/30 overflow-hidden py-3">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <span key={idx} className="flex items-center whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mx-6 flex-shrink-0" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-text-muted">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}