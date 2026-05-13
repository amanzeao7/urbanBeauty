'use client'
export default function Featured() {
  return (
    <section
      aria-labelledby="featured-heading"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '660px' }}
      className="featured-grid"
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }} className="featured-img-wrap">
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&auto=format&fit=crop&q=80"
          alt="CACI Non-Surgical Facelift treatment at Urban Beauty Salon"
          width={900} height={660}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
            display: 'block',
            transition: 'filter .8s',
          }}
          loading="lazy"
          className="featured-img"
        />
        {/* Price badge */}
        <div style={{
          position: 'absolute', top: '48px', left: '48px',
          background: 'var(--black)', color: 'var(--white)',
          padding: '16px 20px', textAlign: 'center',
        }} aria-hidden="true">
          <div style={{
            fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase',
            color: 'var(--grey-light)',
          }}>Course of 10</div>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '20px', fontWeight: 300,
            color: 'var(--white)', display: 'block', marginTop: '4px',
          }}>From £480</span>
        </div>
      </div>

      {/* Copy */}
      <div style={{
        background: 'var(--off-white)',
        padding: '80px 72px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }} className="featured-copy">
        <div className="section-tag reveal">Featured Treatment</div>
        <h2
          id="featured-heading"
          className="reveal"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(30px, 3vw, 46px)',
            fontWeight: 300, lineHeight: 1.15,
            color: 'var(--black)', marginBottom: '20px',
          }}
        >
          The CACI<br /><em>Non-Surgical Facelift</em>
        </h2>
        <p className="reveal" style={{
          fontSize: '13px', fontWeight: 300,
          lineHeight: 1.9, color: 'var(--grey)', marginBottom: '32px',
        }}>
          Known as the celebrity treatment of choice, CACI uses advanced microcurrent
          technology to lift, tone, and rejuvenate — delivering visible results without
          a single needle or day of downtime.
        </p>

        <ul className="reveal" style={{ listStyle: 'none', marginBottom: '44px' }}>
          {[
            'Clinically proven to lift and contour',
            'Visible results after your very first session',
            'Suitable for all skin types and tones',
            'Zero downtime — return to your day immediately',
            'Courses available for cumulative, lasting results',
          ].map(item => (
            <li key={item} style={{
              display: 'flex', alignItems: 'flex-start', gap: '16px',
              padding: '13px 0',
              borderBottom: '1px solid var(--grey-pale)',
              fontSize: '12px', fontWeight: 300,
              color: 'var(--grey-dark)', lineHeight: 1.5,
            }}>
              <span style={{
                width: '20px', height: '1px',
                background: 'var(--accent)',
                flexShrink: 0, marginTop: '9px',
              }} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <a href="/#booking" className="btn-black reveal">
          Book Your CACI Session
        </a>
      </div>

      <style>{`
        .featured-img-wrap:hover .featured-img { filter: grayscale(30%) !important; }
        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .featured-img-wrap { min-height: 300px; }
          .featured-copy { padding: 56px 24px !important; }
        }
      `}</style>
    </section>
  )
}
