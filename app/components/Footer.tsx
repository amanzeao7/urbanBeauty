'use client'
import type { SiteSettings } from '@/types/payload'

const TREATMENTS = [
  'CACI Facelift', 'Bespoke Facials', 'Massage Therapy',
  'Lash & Brow', 'Nails & Gelish', 'Pamper Packages', 'Gift Vouchers',
]

interface FooterProps {
  settings: SiteSettings
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer style={{ background: 'var(--off-black)', padding: '80px 64px 40px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
        gap: '64px',
        maxWidth: '1300px', margin: '0 auto',
        borderBottom: '1px solid rgba(255,255,255,.06)',
        paddingBottom: '64px', marginBottom: '40px',
      }} className="footer-grid">

        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px', fontWeight: 400,
            color: 'var(--white)', letterSpacing: '.12em',
            textTransform: 'uppercase', marginBottom: '16px',
          }}>Urban Beauty</div>
          <p style={{
            fontSize: '12px', fontWeight: 300,
            lineHeight: 1.85, color: 'rgba(255,255,255,.65)', marginBottom: '28px',
          }}>
            Cheshire&apos;s premier luxury beauty salon. Expert treatments,
            exceptional results, and an experience crafted entirely for you.
          </p>
          {/* Social links */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { label: 'Instagram', short: 'IG', href: settings.instagramUrl ?? '#' },
              { label: 'Facebook',  short: 'FB', href: settings.facebookUrl ?? '#'  },
              { label: 'TikTok',    short: 'TT', href: settings.tiktokUrl ?? '#'    },
            ].map(s => (
              <a
                key={s.short}
                href={s.href}
                aria-label={`Urban Beauty on ${s.label}`}
                style={{
                  width: '34px', height: '34px',
                  border: '1px solid rgba(255,255,255,.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', color: 'rgba(255,255,255,.65)',
                  textDecoration: 'none',
                  transition: 'border-color .3s, color .3s',
                  fontWeight: 500,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--white)'
                  e.currentTarget.style.color = 'var(--white)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)'
                  e.currentTarget.style.color = 'rgba(255,255,255,.65)'
                }}
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>

        {/* Treatments */}
        <nav aria-label="Footer treatments navigation">
          <div style={{
            fontSize: '9px', letterSpacing: '.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.55)', marginBottom: '24px',
          }}>Treatments</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {TREATMENTS.map(t => (
              <li key={t}>
                <a href="/#services" style={{
                  fontSize: '12px', fontWeight: 300,
                  color: 'rgba(255,255,255,.65)', textDecoration: 'none',
                  transition: 'color .3s', letterSpacing: '.04em',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.65)')}
                >{t}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours */}
        <div>
          <div style={{
            fontSize: '9px', letterSpacing: '.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.55)', marginBottom: '24px',
          }}>Opening Hours</div>
          {[
            { day: 'Mon – Fri', hours: '9am – 7pm' },
            { day: 'Saturday',  hours: '9am – 6pm' },
            { day: 'Sunday',    hours: '10am – 4pm' },
          ].map(h => (
            <div key={h.day} style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: '11px', fontWeight: 300,
              color: 'rgba(255,255,255,.6)',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,.08)',
            }}>
              <span style={{ color: 'rgba(255,255,255,.75)' }}>{h.day}</span>
              <span>{h.hours}</span>
            </div>
          ))}
        </div>

        {/* Contact + Address */}
        <div>
          <div style={{
            fontSize: '9px', letterSpacing: '.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.55)', marginBottom: '24px',
          }}>Find Us</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            {[settings.address, settings.addressLine2, settings.postcode].map(line => (
              <li key={line} style={{
                fontSize: '12px', fontWeight: 300,
                color: 'rgba(255,255,255,.65)', letterSpacing: '.04em',
              }}>{line}</li>
            ))}
          </ul>

          <div style={{
            fontSize: '9px', letterSpacing: '.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.55)', marginBottom: '24px',
          }}>Contact</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { href: `tel:${settings.phone.replace(/\s/g,'')}`, label: settings.phone },
              { href: `mailto:${settings.email}`,                label: settings.email },
            ].map(c => (
              <li key={c.href}>
                <a href={c.href} style={{
                  fontSize: '12px', fontWeight: 300,
                  color: 'rgba(255,255,255,.65)', textDecoration: 'none',
                  transition: 'color .3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.65)')}
                >{c.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: '10px', color: 'rgba(255,255,255,.5)',
        maxWidth: '1300px', margin: '0 auto',
        fontWeight: 300, letterSpacing: '.04em',
      }} className="footer-bottom">
        <span>© {new Date().getFullYear()} Urban Beauty Salon. All rights reserved.</span>
        <span>
          <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          {' · '}
          <a href="/cookie-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Policy</a>
          {' · '}
          <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer { padding: 48px 24px 32px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; padding-bottom: 40px !important; margin-bottom: 28px !important; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; font-size: 9px !important; }
        }
      `}</style>
    </footer>
  )
}
