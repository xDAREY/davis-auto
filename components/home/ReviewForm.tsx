'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export function ReviewForm() {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const isReady = author.trim().length > 0 && text.trim().length > 0
  const isLoading = status === 'loading'

  const handleSubmit = async () => {
    if (!isReady || isLoading) return
    setStatus('loading')
    const { error } = await supabase
      .from('reviews')
      .insert({ author: author.trim(), text: text.trim(), rating })
    if (error) {
      setStatus('error')
    } else {
      setStatus('success')
      setAuthor('')
      setText('')
      setRating(5)
    }
  }

  return (
    <section className="py-14 md:py-24" style={{ background: 'rgba(15,23,42,0.8)' }}>
      <div className="container-gutter max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-accent-gold" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
            Share Your Experience
          </span>
        </div>

        <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-bold text-text-primary leading-tight mb-10">
          Leave a <em className="italic text-accent-gold">Review</em>
        </h2>

        <div style={{ maxWidth: 640 }}>
          {status === 'success' ? (
            <div style={{
              background: 'rgba(201,162,39,0.06)',
              border: '1px solid rgba(201,162,39,0.3)',
              padding: '32px 28px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>⭐</div>
              <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--white)', marginBottom: 8 }}>
                Thank you for your review!
              </p>
              <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.7 }}>
                Your review has been submitted and is awaiting approval. It will appear on the site once reviewed.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  marginTop: 20,
                  background: 'transparent',
                  border: '1px solid rgba(201,162,39,0.4)',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font)',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '9px 20px',
                  cursor: 'pointer',
                }}
              >
                Write Another
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Star rating */}
              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gray)', display: 'block', marginBottom: 10 }}>
                  Your Rating
                </label>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setRating(star)}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: 28,
                        cursor: 'pointer',
                        color: star <= (hoveredStar || rating) ? 'var(--gold)' : 'rgba(255,255,255,0.15)',
                        transition: 'color 0.15s',
                        padding: '0 2px',
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gray)', display: 'block', marginBottom: 8 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. John Smith"
                  style={{
                    width: '100%',
                    background: 'rgba(15,23,42,0.8)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--white)',
                    fontFamily: 'var(--font)',
                    fontSize: 13,
                    padding: '12px 16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Review text */}
              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gray)', display: 'block', marginBottom: 8 }}>
                  Your Review
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell us about your experience..."
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'rgba(15,23,42,0.8)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--white)',
                    fontFamily: 'var(--font)',
                    fontSize: 13,
                    padding: '12px 16px',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontSize: 12, color: 'var(--red)', fontFamily: 'var(--mono)' }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={!isReady || isLoading}
                style={{
                  background: isReady ? 'var(--gold)' : 'rgba(201,162,39,0.3)',
                  color: 'var(--navy)',
                  border: 'none',
                  fontFamily: 'var(--font)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '13px 28px',
                  cursor: isReady && !isLoading ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s',
                  alignSelf: 'flex-start',
                  opacity: isLoading ? 0.7 : 1,
                }}
              >
                {isLoading ? 'Submitting...' : 'Submit Review'}
              </button>

            </div>
          )}
        </div>
      </div>
    </section>
  )
}