import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  dark?: boolean
}

export function Section({ id, className = '', children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${
        dark ? 'bg-tertiary/30' : ''
      } ${className}`}
      data-scroll
    >
      <div className="container-gutter max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
