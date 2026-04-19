'use client'
import type { Testimonial } from '@/types/payload'

interface ReviewsProps {
  testimonials: Testimonial[]
  reviewsCount: string
}

export default function Reviews({ testimonials, reviewsCount }: ReviewsProps) {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      style={{ padding: '120px 64px', background: 'var(--white)' }}
      className="reviews-section"
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
        <div className="section-tag center">Client Experiences</div>
        <h2
          id="reviews-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 300, color: 'var(--black)',
          }}
        >
          What our clients <em>say</em>
        </h2>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: '5px', marginTop: '20px',
        }} aria-label="5 out of 5 stars">
          {'★★★★★'.split('').map((s, i) => (
            <span key={i} style={{ color: 'var(--black)', fontSize: '14px' }} aria-hidden="true">{s}</span>
          ))}
          <span style={{
            fontSize: '12px', color: 'var(--grey)', marginLeft: '8px',
            fontWeight: 300, letterSpacing: '.04em',
          }}>
            5.0 · {reviewsCount} Google Reviews
          </span>
        </div>
      </div>

      {/* Grid */}
      <div
        className="reveal reviews-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--grey-pale)',
          maxWidth: '1200px', margin: '0 auto',
        }}
        role="list"
      >
        {testimonials.map(t => (
          <blockquote
            key={t.id}
            role="listitem"
            style={{
              background: 'var(--white)',
              padding: '48px 40px',
              transition: 'background .3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--off-white)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--white)')}
          >
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '64px', fontWeight: 300,
              color: 'var(--grey-pale)',
              lineHeight: .8, marginBottom: '20px', display: 'block',
            }} aria-hidden="true">"</span>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px', fontStyle: 'italic',
              fontWeight: 300, lineHeight: 1.75,
              color: 'var(--grey-dark)', marginBottom: '32px',
            }}>
              {t.quote}
            </p>
            <footer>
              <cite style={{
                fontSize: '10px', fontWeight: 500,
                letterSpacing: '.2em', textTransform: 'uppercase',
                color: 'var(--black)', display: 'block', marginBottom: '4px',
                fontStyle: 'normal',
              }}>{t.author}</cite>
              <span style={{
                fontSize: '11px', color: 'var(--grey)', fontWeight: 300,
              }}>{t.treatment}</span>
            </footer>
          </blockquote>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-section { padding: 80px 24px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
