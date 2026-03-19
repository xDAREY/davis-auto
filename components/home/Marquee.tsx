export function Marquee() {
  const marqueeItems = [
    'LUXURY VEHICLES',
    'ATLANTA\'S TRUSTED BROKER',
    'ZERO DEALERSHIP STRESS',
    'HAND-SELECTED INVENTORY',
    'TRANSPARENT PRICING',
    'PERSONALLY ACCOUNTABLE',
    'VERIFIED HISTORY',
  ]

  return (
    <div className="w-full border-y border-accent-gold/20 overflow-hidden py-3.5" style={{ background: 'rgba(201,162,39,0.04)' }}>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marquee-scroll 24s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee-inner:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-inner">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <span key={idx} className="flex items-center whitespace-nowrap">
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C9A227', margin: '0 24px', flexShrink: 0, display: 'inline-block' }} />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold" style={{ color: '#C9A227', opacity: 0.8 }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}