'use client'
import type { Service } from '@/types/payload'

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        background: 'var(--off-black)',
        padding: '120px 64px',
      }}
      className="services-section"
    >
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        maxWidth: '1200px', margin: '0 auto 72px',
      }} className="services-header reveal">
        <h2
          id="services-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 300, color: 'var(--white)', lineHeight: 1.05,
          }}
        >
          Our<br /><em style={{ fontStyle: 'italic', color: 'var(--grey-pale)' }}>Signature</em><br />Treatments
        </h2>
        <a
          href="#pricing"
          style={{
            fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase',
            color: 'var(--grey)', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '10px',
            transition: 'color .3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey)')}
        >
          View Full Menu →
        </a>
      </div>

      {/* 3-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        maxWidth: '1200px',
        margin: '0 auto',
      }} className="services-grid" role="list">
        {services.map((service, i) => {
          const delay = ['', 'delay-1', 'delay-2'][i % 3]
          return (
            <article
              key={service.id}
              className={`service-card reveal ${delay}`}
              role="listitem"
              style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '3/4',
              }}
            >
              <img
                src={service.image.url}
                alt={service.image.alt}
                width={400} height={533}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  display: 'block',
                  transform: 'scale(1.06)',
                  transition: 'all .65s ease',
                }}
                loading="lazy"
                className="service-img"
              />
              {/* Gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.2) 60%, transparent 100%)',
              }} aria-hidden="true" />
              {/* Text overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '40px 36px',
              }} className="service-overlay">
                <span style={{
                  fontSize: '10px', letterSpacing: '.25em',
                  color: 'var(--accent)', textTransform: 'uppercase',
                  marginBottom: '10px', display: 'block',
                }}>{service.number}</span>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px', fontWeight: 400,
                  color: 'var(--white)', marginBottom: '10px', lineHeight: 1.2,
                }}>{service.name}</div>
                <div style={{
                  fontSize: '11px', fontWeight: 300,
                  color: 'rgba(255,255,255,.45)', letterSpacing: '.05em',
                }}>
                  From {service.startingPrice} · {service.duration}
                </div>
                <div style={{
                  fontSize: '12px', fontWeight: 300,
                  lineHeight: 1.7, color: 'rgba(255,255,255,.5)',
                  marginTop: '12px',
                }} className="service-desc">
                  {service.tagline}
                </div>
                <a
                  href="#booking"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '9px', letterSpacing: '.25em', textTransform: 'uppercase',
                    color: 'var(--accent)', marginTop: '16px', textDecoration: 'none',
                  }}
                  className="service-book-link"
                  aria-label={`Book ${service.name}`}
                >
                  Book Now →
                </a>
              </div>
            </article>
          )
        })}
      </div>

      <style>{`
        .service-card .service-img { transition: filter .65s ease, transform .65s ease; }
        .service-card:hover .service-img { filter: grayscale(20%) !important; transform: scale(1) !important; }
        .service-overlay { transform: translateY(6px); transition: transform .4s; }
        .service-card:hover .service-overlay { transform: translateY(0); }
        .service-desc { max-height: 0; overflow: hidden; transition: max-height .4s; }
        .service-card:hover .service-desc { max-height: 80px; }
        .service-book-link { opacity: 0; transition: opacity .4s .1s; }
        .service-card:hover .service-book-link { opacity: 1; }
        @media (max-width: 900px) {
          .services-section { padding: 80px 24px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .services-header { flex-direction: column; align-items: flex-start; gap: 20px; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
