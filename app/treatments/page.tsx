import type { Metadata } from 'next'
import TreatmentsClient from './TreatmentsClient'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import { getSiteSettings } from '@/lib/sanity'
import { PLACEHOLDER_SETTINGS } from '@/lib/placeholder-data'

export const metadata: Metadata = {
  title: 'Full Treatment Menu',
  description: 'Browse the complete treatment menu at Urban Beauty Salon, Warrington. Facials, CACI, massage, nails, lashes, waxing, aesthetics and more. View all prices.',
  openGraph: {
    title: 'Full Treatment Menu — Urban Beauty Salon Warrington',
    description: 'Complete price list for all treatments at Urban Beauty Salon, Warrington, Cheshire.',
  },
}

export default async function TreatmentsPage() {
  const settings = await getSiteSettings().catch(() => null) ?? PLACEHOLDER_SETTINGS

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <div style={{
          background: 'var(--black)',
          padding: '160px 64px 80px',
          textAlign: 'center',
        }} className="treatments-hero">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '14px', fontSize: '9px', letterSpacing: '.35em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px',
          }}>
            Full Price List
            <span style={{ width: '28px', height: '1px', background: 'var(--accent)', display: 'block' }} />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 300, color: 'var(--white)', marginBottom: '16px',
          }}>
            Treatment <em>Menu</em>
          </h1>
          <p style={{
            fontSize: '12px', color: 'rgba(255,255,255,.4)',
            letterSpacing: '.1em', fontWeight: 300,
          }}>
            All prices include a full consultation. No hidden charges.
          </p>
        </div>

        <TreatmentsClient />

        {/* CTA */}
        <div style={{
          background: 'var(--black)',
          padding: '80px 64px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 3vw, 40px)',
            fontWeight: 300, color: 'var(--white)', marginBottom: '12px',
          }}>
            Ready to book?
          </h2>
          <p style={{
            fontSize: '12px', color: 'rgba(255,255,255,.4)',
            marginBottom: '32px', fontWeight: 300,
          }}>
            Call us or use our online booking system
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#booking" style={{
              background: 'var(--white)', color: 'var(--black)',
              padding: '14px 36px', fontSize: '10px', fontWeight: 500,
              letterSpacing: '.25em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
            }}>
              Book Online
            </a>
            <a href={`tel:${settings.phone?.replace(/\s/g,'')}`} style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,.3)',
              color: 'var(--white)',
              padding: '14px 36px', fontSize: '10px', fontWeight: 400,
              letterSpacing: '.25em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
            }}>
              Call {settings.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer settings={settings} />

      <style>{`
        @media (max-width: 768px) {
          .treatments-hero { padding: 120px 24px 60px !important; }
        }
      `}</style>
    </>
  )
}
