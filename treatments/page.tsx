import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { getSiteSettings } from '@/lib/sanity'
import { PLACEHOLDER_SETTINGS } from '@/lib/placeholder-data'

export const metadata: Metadata = {
  title: 'All Treatments — Urban Beauty Salon Warrington',
  description: 'Browse the full treatment menu at Urban Beauty Salon, Warrington. CACI, facials, massage, nails, lashes, waxing, aesthetics, tanning and more.',
  openGraph: {
    title: 'All Treatments — Urban Beauty Salon Warrington',
    description: 'Complete treatment menu for Urban Beauty Salon, Warrington, Cheshire.',
  },
}

const CATEGORIES = [
  { href: '/treatments/caci',       number: '01', name: 'CACI',             description: 'Non-surgical facelift using microcurrent technology. Clinically proven lifting and toning.', tag: 'Most Popular', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&auto=format&fit=crop&q=80' },
  { href: '/treatments/facials',    number: '02', name: 'Facials',           description: 'Crystal Clear, COMCIT, dermaplaning, glycolic peels and bespoke luxury facials.', image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&auto=format&fit=crop&q=80' },
  { href: '/treatments/massage',    number: '03', name: 'Massage',           description: 'Swedish, deep tissue, hot stone, and signature body treatments.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&auto=format&fit=crop&q=80' },
  { href: '/treatments/nails',      number: '04', name: 'Nails',             description: 'Manicures, pedicures, Shellac, BIAB, acrylic and gel nail treatments.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80' },
  { href: '/treatments/lashes',     number: '05', name: 'Lash & Brow',       description: 'LVL lash lifts, brow lamination, tints, extensions and semi-permanent brows.', image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&auto=format&fit=crop&q=80' },
  { href: '/treatments/waxing',     number: '06', name: 'Hair Removal',      description: 'Full body waxing and threading. Strip wax, hot wax and precision threading.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80' },
  { href: '/treatments/aesthetics', number: '07', name: 'Aesthetics',        description: 'Anti-wrinkle injections, Profhilo skin booster and advanced micro-needling.', tag: 'Advanced', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=80' },
  { href: '/treatments/tanning',    number: '08', name: 'Spray Tanning',     description: 'Professional Sienna X spray tans. Natural, streak-free results every time.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80' },
  { href: '/treatments/men',        number: '09', name: "Men's Treatments",  description: "Gentleman's manicure, pedicure, waxing and grooming treatments.", image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80' },
]

export default async function TreatmentsPage() {
  const settings = await getSiteSettings().catch(() => null) ?? PLACEHOLDER_SETTINGS

  return (
    <>
      <Nav />
      <main>
        <div style={{ background: 'var(--black)', padding: '160px 64px 80px', textAlign: 'center' }} className="treatments-hero">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', fontSize: '9px', letterSpacing: '.35em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            Full Treatment Menu <span style={{ width: '28px', height: '1px', background: 'var(--accent)', display: 'block' }} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 300, color: 'var(--white)', marginBottom: '16px' }}>
            All <em>Treatments</em>
          </h1>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.4)', letterSpacing: '.1em', fontWeight: 300, maxWidth: '480px', margin: '0 auto' }}>
            From express treatments to full-day experiences. Everything tailored entirely to you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', gap: '28px' }} className="cat-grid">
          {CATEGORIES.map(cat => (
            <Link key={cat.href} href={cat.href} style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }} className="cat-card">
              <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', display: 'block', transform: 'scale(1.05)', transition: 'all .6s ease' }} loading="lazy" className="cat-img" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.9) 0%, rgba(0,0,0,.2) 60%, transparent 100%)' }} />
              {cat.tag && (
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--accent)', color: 'var(--white)', padding: '4px 12px', fontSize: '8px', letterSpacing: '.2em', textTransform: 'uppercase' }}>{cat.tag}</div>
              )}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '.25em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>{cat.number}</span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--white)', marginBottom: '8px' }}>{cat.name}</div>
                <p style={{ fontSize: '11px', fontWeight: 300, color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>{cat.description}</p>
                <div style={{ marginTop: '16px', fontSize: '9px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>View & Book →</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ background: 'var(--black)', padding: '80px 64px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 300, color: 'var(--white)', marginBottom: '12px' }}>Not sure what you need?</h2>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.4)', marginBottom: '32px', fontWeight: 300 }}>Call us and we'll help you find the perfect treatment</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#booking" style={{ background: 'var(--white)', color: 'var(--black)', padding: '14px 36px', fontSize: '10px', fontWeight: 500, letterSpacing: '.25em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>Book Online</a>
            <a href={`tel:${settings.phone?.replace(/\s/g,'')}`} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.3)', color: 'var(--white)', padding: '14px 36px', fontSize: '10px', fontWeight: 400, letterSpacing: '.25em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>Call {settings.phone}</a>
          </div>
        </div>
      </main>
      <Footer settings={settings} />

      <style>{`
        .cat-card:hover .cat-img { filter: grayscale(20%) !important; transform: scale(1) !important; }
        @media (max-width: 900px) {
          .treatments-hero { padding: 120px 24px 60px !important; }
          .cat-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 48px 24px !important; }
        }
        @media (max-width: 480px) { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
