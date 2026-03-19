// export function ValuesCards() {
//   const values = [
//     {
//       icon: '🛡️',
//       title: 'Integrity',
//       description: 'Full transparency in every transaction. No hidden fees, no misleading claims. What you see is exactly what you get.',
//     },
//     {
//       icon: '💎',
//       title: 'Quality',
//       description: 'Every vehicle is rigorously inspected. We only list cars we would proudly drive ourselves.',
//     },
//     {
//       icon: '🤝',
//       title: 'Partnership',
//       description: 'We see our clients as long-term partners, not one-time transactions. Your satisfaction is our most important metric.',
//     },
//     {
//       icon: '⚡',
//       title: 'Excellence',
//       description: 'From the first enquiry to vehicle handover, every touchpoint is designed to exceed your expectations.',
//     },
//   ]

//   return (
//     <section id="values" className="py-14 md:py-28 bg-secondary/20">
//       <div className="container-gutter max-w-7xl mx-auto">
//         <div className="flex items-center gap-3 mb-4 md:mb-6">
//           <div className="w-6 md:w-8 h-px bg-accent-gold" />
//           <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
//             Our Pillars
//           </span>
//         </div>
//         <h2 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-light text-text-primary leading-tight mb-10 md:mb-14">
//           The Values That <em className="italic text-accent-gold">Drive</em> Us
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
//           {values.map((value) => (
//             <div
//               key={value.title}
//               className="border border-tertiary/30 bg-secondary/30 p-6 md:p-8 hover:border-accent-gold/30 transition-colors"
//             >
//               <div className="text-2xl md:text-3xl mb-3 md:mb-4">{value.icon}</div>
//               <h3 className="font-serif text-[1.1rem] md:text-[1.3rem] font-semibold text-text-primary mb-2 md:mb-3">
//                 {value.title}
//               </h3>
//               <p className="text-[13px] md:text-[14px] text-text-muted leading-[1.8]">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }