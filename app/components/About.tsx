'use client'
import type { SiteSettings } from '@/types/payload'

interface AboutProps {
  settings: SiteSettings
}

export default function About({ settings }: AboutProps) {
  return (
    <section aria-labelledby="about-heading">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '140px 64px',
        gap: '80px',
        alignItems: 'center',
      }} className="about-grid">

        {/* ── Image composition ── */}
        <div className="reveal" style={{ position: 'relative', height: '580px' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0,
            width: '70%', height: '480px',
            overflow: 'hidden',
          }}>
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80"
              alt="Facial treatment at Urban Beauty Salon"
              width={560} height={480}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                display: 'block',
                transition: 'filter .6s',
              }}
              loading="lazy"
            />
          </div>
          <div style={{
            position: 'absolute', right: 0, bottom: 0,
            width: '50%', height: '260px',
            overflow: 'hidden',
            outline: '6px solid var(--white)',
            outlineOffset: '-6px',
          }}>
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80"
              alt="Urban Beauty Salon interior"
              width={400} height={260}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                display: 'block',
              }}
              loading="lazy"
            />
          </div>
          {/* Stat badge */}
          <div style={{
            position: 'absolute', left: '62%', top: '42%',
            background: 'var(--black)', color: 'var(--white)',
            padding: '20px 22px',
            textAlign: 'center',
            zIndex: 3,
            transform: 'translate(-50%, -50%)',
          }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '34px', fontWeight: 300,
              color: 'var(--white)', display: 'block',
            }}>{settings.reviewsCount}</span>
            <span style={{
              fontSize: '8px', letterSpacing: '.25em',
              textTransform: 'uppercase', color: 'var(--grey-light)',
              display: 'block', marginTop: '5px',
            }}>5-Star Reviews</span>
          </div>
        </div>

        {/* ── Copy ── */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="section-tag reveal">Our Story</div>

          <h2
            id="about-heading"
            className="reveal"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 3.5vw, 50px)',
              fontWeight: 300, lineHeight: 1.2,
              color: 'var(--black)', marginBottom: '28px',
            }}
          >
            A sanctuary<br />crafted for <em>you</em>
          </h2>

          <p className="reveal" style={{
            fontSize: '13px', fontWeight: 300,
            lineHeight: 1.95, color: 'var(--grey)', marginBottom: '18px',
          }}>
            {settings.aboutBody1}
          </p>
          <p className="reveal" style={{
            fontSize: '13px', fontWeight: 300,
            lineHeight: 1.95, color: 'var(--grey)',
          }}>
            {settings.aboutBody2}
          </p>

          <div className="reveal" style={{
            width: '40px', height: '1px',
            background: 'var(--accent)', margin: '28px 0',
          }} />

          {/* Stats */}
          <div className="reveal" style={{
            display: 'flex', gap: '44px', marginBottom: '44px',
          }}>
            {[
              { num: settings.statsYears,      label: 'Years Est.'   },
              { num: settings.statsTreatments, label: 'Treatments'   },
              { num: settings.statsRating,     label: 'Google Rating' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '38px', fontWeight: 300,
                  color: 'var(--black)', lineHeight: 1,
                }}>{stat.num}</div>
                <div style={{
                  fontSize: '9px', letterSpacing: '.2em',
                  textTransform: 'uppercase', color: 'var(--grey)', marginTop: '6px',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <a href="/#services" className="btn-black reveal">
            Discover Our Treatments
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 24px !important;
            gap: 48px !important;
          }
          .about-grid > div:first-child {
            height: 340px !important;
          }
        }
      `}</style>
    </section>
  )
}
