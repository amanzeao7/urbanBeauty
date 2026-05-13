'use client'

import type { SiteSettings } from '@/types/payload'

interface BookingProps {
  settings: SiteSettings
}

// ─── Phorest Booking Widget ───────────────────────────────────────────────────
// Replace PHOREST_BOOKING_URL with the embed URL from:
// Phorest Admin → Online Booking → Get Embed Code → copy the src URL
// It looks like: https://booking.phorest.com/salon/urban-beauty-salon

const PHOREST_BOOKING_URL = process.env.NEXT_PUBLIC_PHOREST_BOOKING_URL ?? ''

const CONTACT = (settings: SiteSettings) => [
  { icon: '📍', label: 'Address',   value: `${settings.address}, ${settings.addressLine2}, ${settings.postcode}` },
  { icon: '📞', label: 'Telephone', value: settings.phone,  href: `tel:${settings.phone?.replace(/\s/g,'')}` },
  { icon: '✉',  label: 'Email',     value: settings.email,  href: `mailto:${settings.email}` },
  { icon: '🕐', label: 'Hours',     value: `Mon–Fri 9–7 · Sat 9–6 · Sun 10–4` },
]

export default function Booking({ settings }: BookingProps) {
  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      style={{ background: 'var(--white)' }}
    >
      <div
        className="booking-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '120px 64px',
          gap: '100px',
          alignItems: 'start',
        }}
      >
        {/* ── Left: contact info ── */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            fontSize: '9px', letterSpacing: '.35em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: '20px',
          }}>
            Visit &amp; Book
            <span style={{ width: '28px', height: '1px', background: 'var(--accent)', display: 'block' }} />
          </div>

          <h2
            id="booking-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 300, lineHeight: 1.15,
              color: 'var(--black)', marginBottom: '20px',
            }}
          >
            Your experience<br />starts <em>here</em>
          </h2>

          <p style={{
            fontSize: '13px', fontWeight: 300,
            lineHeight: 1.9, color: 'var(--grey)', marginBottom: '44px',
          }}>
            Book online, call us, or simply drop by. Our team is here to ensure
            every visit exceeds your expectations.
          </p>

          {/* Contact details */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            borderTop: '1px solid var(--grey-pale)',
          }}>
            {CONTACT(settings).map(c => (
              <div key={c.label} style={{
                display: 'flex', alignItems: 'center', gap: '24px',
                padding: '20px 0',
                borderBottom: '1px solid var(--grey-pale)',
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  border: '1px solid var(--grey-pale)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', flexShrink: 0,
                }} aria-hidden="true">{c.icon}</div>
                <div>
                  <div style={{
                    fontSize: '9px', letterSpacing: '.2em', textTransform: 'uppercase',
                    color: 'var(--grey-light)', marginBottom: '4px',
                  }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{
                      fontSize: '13px', fontWeight: 300,
                      color: 'var(--black)', textDecoration: 'none',
                      transition: 'color .3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--black)')}
                    >{c.value}</a>
                  ) : (
                    <div style={{ fontSize: '13px', fontWeight: 300, color: 'var(--black)' }}>
                      {c.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps embed — replace src with real embed URL from Google Maps */}
          <div style={{ marginTop: '36px', height: '300px', overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.0!2d-2.5970!3d53.3900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDIzJzI0LjAiTiAywrAzNSc0OS4yIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0, display: 'block', filter: 'grayscale(100%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Urban Beauty Salon — 14 Bridge Street, Warrington"
            />
          </div>
        </div>

        {/* ── Right: Phorest booking widget ── */}
        <div style={{ background: 'var(--black)', padding: '48px 40px' }}>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '24px', fontWeight: 300,
            color: 'var(--white)',
            marginBottom: '24px',
            paddingBottom: '18px',
            borderBottom: '1px solid rgba(255,255,255,.08)',
          }}>
            Reserve Your Treatment
          </div>

          {PHOREST_BOOKING_URL ? (
            // ── Phorest embed ─────────────────────────────────────────────────
            <iframe
              src={PHOREST_BOOKING_URL}
              width="100%"
              height="600"
              style={{ border: 'none', display: 'block' }}
              title="Book a treatment at Urban Beauty Salon"
              loading="lazy"
            />
          ) : (
            // ── Placeholder shown until Phorest URL is added ──────────────────
            <div style={{
              padding: '48px 24px',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,.08)',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px', fontWeight: 300,
                color: 'var(--white)', marginBottom: '16px',
              }}>Online Booking</div>
              <p style={{
                fontSize: '13px', fontWeight: 300,
                color: 'rgba(255,255,255,.4)',
                lineHeight: 1.8, marginBottom: '32px',
              }}>
                Book your treatment online, 24/7. Choose your service,
                therapist, and preferred time — instantly confirmed.
              </p>
              <a
                href={`tel:${settings.phone?.replace(/\s/g,'')}`}
                style={{
                  display: 'inline-block',
                  background: 'var(--white)', color: 'var(--black)',
                  padding: '14px 36px',
                  fontSize: '10px', fontWeight: 500,
                  letterSpacing: '.25em', textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Call to Book — {settings.phone}
              </a>
              <p style={{
                fontSize: '10px', color: 'rgba(255,255,255,.2)',
                marginTop: '20px', fontWeight: 300,
              }}>
                Online booking coming soon
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
            padding: 64px 24px 100px !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
