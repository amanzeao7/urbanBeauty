import type { SiteSettings } from '@/types/payload'

interface HeroProps {
  settings: SiteSettings
}

export default function Hero({ settings }: HeroProps) {
  const lines = settings.heroHeadline.split(' becomes ')

  return (
    <section
      style={{
        height: '100vh', minHeight: '680px',
        position: 'relative',
        display: 'flex', alignItems: 'flex-end',
        overflow: 'hidden',
      }}
      aria-label="Hero — Where beauty becomes ritual"
    >
      {/* Background image */}
      <img
        src={settings.heroImage.url}
        alt={settings.heroImage.alt}
        width={1800}
        height={1200}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(100%)',
          transform: 'scale(1.05)',
          animation: 'heroZoom 14s ease-out forwards',
          display: 'block',
        }}
        fetchPriority="high"
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.35) 55%, rgba(0,0,0,.15) 100%)',
      }} aria-hidden="true" />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '0 64px 100px',
        maxWidth: '900px',
      }} id="main-content">

        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          fontSize: '10px', letterSpacing: '.35em', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: '28px',
          animation: 'fadeUp .8s .3s both',
        }}>
          <span style={{ width: '48px', height: '1px', background: 'var(--accent)', display: 'block' }} />
          Warrington, Cheshire · Est. 2012
        </div>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(52px, 7.5vw, 104px)',
          fontWeight: 300,
          lineHeight: 1.0,
          color: 'var(--white)',
          marginBottom: '24px',
          animation: 'fadeUp .9s .5s both',
        }}>
          Where beauty<br />
          <em style={{ fontStyle: 'italic', display: 'block' }}>becomes ritual</em>
        </h1>

        <p style={{
          fontSize: '13px', fontWeight: 300,
          letterSpacing: '.06em', lineHeight: 1.9,
          color: 'rgba(255,255,255,.6)',
          maxWidth: '460px', marginBottom: '52px',
          animation: 'fadeUp .9s .7s both',
        }}>
          {settings.heroSubheadline}
        </p>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '24px',
          flexWrap: 'wrap',
          animation: 'fadeUp .9s .9s both',
        }}>
          <a href="#booking" className="btn-white">Reserve Your Experience</a>
          <a href="#services" className="btn-arrow">
            <span className="btn-arrow-line" />
            Explore Treatments
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', right: '64px', bottom: '80px',
        zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '12px',
        animation: 'fadeIn 1s 1.4s both',
      }} aria-hidden="true">
        <div style={{
          width: '1px', height: '60px',
          background: 'rgba(255,255,255,.15)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-100%', left: 0,
            width: '100%', height: '100%',
            background: 'var(--accent)',
            animation: 'scrollFill 2.5s ease-in-out infinite',
          }} />
        </div>
        <span style={{
          fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,.3)',
          writingMode: 'vertical-rl',
        }}>Scroll</span>
      </div>

      <style>{`
        @keyframes heroZoom { to { transform: scale(1); } }
        @keyframes scrollFill { 0% { top: -100%; } 100% { top: 100%; } }
        @media (max-width: 768px) {
          #main-content { padding: 0 24px 80px !important; }
        }
      `}</style>
    </section>
  )
}
