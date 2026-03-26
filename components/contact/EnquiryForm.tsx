'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

function formatUSPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length === 0) return ''
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    subject: 'Vehicle Inquiry', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setFormData((prev) => ({ ...prev, phone: formatUSPhone(value) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError('Please fill in all required fields')
      return
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    if (formData.phone) {
      const digits = formData.phone.replace(/\D/g, '')
      if (digits.length !== 10) {
        setError('Please enter a valid 10-digit US phone number')
        return
      }
    }

    setLoading(true)

    const { error: insertError } = await supabase.from('enquiries').insert([{
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || null,
      subject: formData.subject,
      message: formData.message,
    }])

    setLoading(false)

    if (insertError) {
      setError('Something went wrong. Please try again or call us directly.')
      return
    }

    setSubmitted(true)
  }

  const inputClass = "w-full px-3 md:px-4 py-2.5 md:py-3 bg-secondary/60 border border-tertiary/50 text-text-primary placeholder-text-muted/40 focus:border-accent-gold/60 focus:outline-none transition-colors text-[13px] md:text-body-sm"
  const labelClass = "block text-[10px] tracking-[0.2em] uppercase text-text-muted font-medium mb-1.5 md:mb-2"

  if (submitted) {
    return (
      <div className="p-8 md:p-10 border border-accent-gold/40 bg-accent-gold/5 text-center">
        <svg className="w-10 h-10 md:w-12 md:h-12 text-accent-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-serif text-[1.3rem] md:text-heading-lg text-text-primary mb-2">Message Received</h3>
        <p className="text-[13px] md:text-body-sm text-text-muted">
          Thank you for reaching out. Dameon will be in touch with you shortly.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="font-serif text-[1.5rem] md:text-[1.8rem] font-bold text-text-primary mb-6 md:mb-8">
        Send an Inquiry
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        {error && (
          <div className="p-3 md:p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-[13px] md:text-body-sm">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label htmlFor="firstName" className={labelClass}>First Name *</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} placeholder="John" required />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>Last Name *</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} placeholder="Doe" required />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label htmlFor="email" className={labelClass}>Email Address *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" required />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number
              <span style={{ marginLeft: 6, fontSize: 9, letterSpacing: '0.1em', color: 'var(--color-text-muted)', opacity: 0.7 }}>
                US only
              </span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="(678) 000-0000"
              inputMode="numeric"
              maxLength={14}
              autoComplete="tel-national"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>Subject</label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClass}>
            <option value="Vehicle Inquiry">Vehicle Inquiry</option>
            <option value="Schedule Viewing">Schedule Viewing</option>
            <option value="Fleet Management">Fleet Management</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Message *</label>
          <textarea
            id="message" name="message" value={formData.message}
            onChange={handleChange} className={inputClass}
            placeholder="Tell us what you're looking for..."
            rows={5} required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-gold text-background text-[11px] font-bold tracking-[0.2em] uppercase py-3.5 md:py-4 hover:bg-accent-gold-light transition-all duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}