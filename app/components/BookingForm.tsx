'use client'

import { useState } from 'react'
import type { SiteSettings } from '@/types/payload'
import { submitBooking } from '@/lib/payload'

interface BookingProps {
  settings: SiteSettings
}

const TREATMENTS = [
  'CACI Non-Surgical Facelift',
  'Bespoke Facial',
  'Massage Therapy',
  'Lash & Brow',
  'Nails & Gelish',
  'Pamper Package',
  'Gift Voucher Enquiry',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,.04)',
  border: '1px solid rgba(255,255,255,.08)',
  color: 'var(--white)',
  padding: '13px 18px',
  fontFamily: 'var(--font-sans)',
  fontSize: '13px',
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color .3s',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '9px',
  letterSpacing: '.22em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,.35)',
  marginBottom: '10px',
}

export default function Booking({ settings }: BookingProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    firstName: '', lastName: '',
    email: '', phone: '',
    treatment: '', preferredDate: '',
    preferredTime: 'Morning (9–12)', notes: '',
  })

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const { ok } = await submitBooking(form)
      setStatus(ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const CONTACT = [
    { icon: '📍', label: 'Address',   value: `${settings.address}, ${settings.addressLine2}, ${settings.postcode}` },
    { icon: '📞', label: 'Telephone', value: settings.phone,    href: `tel:${settings.phone.replace(/\s/g,'')}` },
    { icon: '✉',  label: 'Email',     value: settings.email,    href: `mailto:${settings.email}` },
    { icon: '🕐', label: 'Hours',     value: `Mon–Fri 9–7 · Sat 9–6 · Sun 10–4` },
  ]

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
        {/* ── Left: info + map ── */}
        <div>
          <div className="section-tag reveal">Visit &amp; Book</div>
          <h2
            id="booking-heading"
            className="reveal"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 300, lineHeight: 1.15,
              color: 'var(--black)', marginBottom: '20px',
            }}
          >
            Your experience<br />starts <em>here</em>
          </h2>
          <p className="reveal" style={{
            fontSize: '13px', fontWeight: 300,
            lineHeight: 1.9, color: 'var(--grey)', marginBottom: '44px',
          }}>
            Book online, call us, or simply drop by. Our team is here to ensure
            every visit exceeds your expectations.
          </p>

          {/* Contact details */}
          <div className="reveal" style={{
            display: 'flex', flexDirection: 'column',
            borderTop: '1px solid var(--grey-pale)',
          }}>
            {CONTACT.map(c => (
              <div key={c.label} style={{
                display: 'flex', alignItems: 'center', gap: '24px',
                padding: '20px 0',
                borderBottom: '1px solid var(--grey-pale)',
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  border: '1px solid var(--grey-pale)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', flexShrink: 0, color: 'var(--grey)',
                }} aria-hidden="true">{c.icon}</div>
                <div>
                  <div style={{
                    fontSize: '9px', letterSpacing: '.2em', textTransform: 'uppercase',
                    color: 'var(--grey-light)', marginBottom: '4px',
                  }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{
                      fontSize: '13px', fontWeight: 300, color: 'var(--black)',
                      textDecoration: 'none', transition: 'color .3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--black)')}
                    >{c.value}</a>
                  ) : (
                    <div style={{ fontSize: '13px', fontWeight: 300, color: 'var(--black)' }}>{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative map placeholder */}
          <div className="reveal" style={{
            position: 'relative', height: '300px',
            overflow: 'hidden', marginTop: '36px',
            background: 'var(--off-white)',
          }} role="img" aria-label="Map placeholder — 14 Bridge Street, Warrington WA1 2RJ">
            {/* Grid lines */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,.05) 39px, rgba(0,0,0,.05) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,.05) 39px, rgba(0,0,0,.05) 40px)
              `,
            }} aria-hidden="true" />
            {/* Pin */}
            <div style={{
              position: 'absolute', top: '50%', left: '55%',
              transform: 'translate(-50%, -50%)',
            }}>
              <div style={{
                width: '20px', height: '20px',
                border: '2px solid var(--black)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: '7px', height: '7px',
                  background: 'var(--black)', borderRadius: '50%',
                }} />
                <div style={{
                  position: 'absolute', inset: '-8px',
                  border: '1px solid rgba(0,0,0,.2)',
                  borderRadius: '50%',
                  animation: 'mapPulse 2s infinite',
                }} />
              </div>
            </div>
            {/* Info card */}
            <div style={{
              position: 'absolute', top: '20px', left: '20px',
              background: 'var(--black)',
              padding: '18px 22px',
              borderLeft: '3px solid var(--accent)',
            }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '14px', color: 'var(--white)', marginBottom: '4px',
              }}>Urban Beauty Salon</div>
              <div style={{
                fontSize: '10px', color: 'rgba(255,255,255,.4)',
                lineHeight: 1.6, marginBottom: '8px', fontWeight: 300,
              }}>
                14 Bridge Street<br />Warrington, WA1 2RJ
              </div>
              <div style={{
                fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase',
                color: 'var(--accent)',
              }}>Open Today · 9am – 7pm</div>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div
          className="reveal"
          style={{ background: 'var(--black)', padding: '56px 48px' }}
        >
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '26px', fontWeight: 300,
            color: 'var(--white)',
            marginBottom: '36px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255,255,255,.08)',
          }}>Request a Booking</h3>

          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '28px', fontWeight: 300,
                color: 'var(--white)', marginBottom: '16px',
              }}>Thank you ✦</div>
              <p style={{
                fontSize: '13px', fontWeight: 300,
                color: 'rgba(255,255,255,.5)', lineHeight: 1.8,
              }}>
                We&apos;ve received your request and will confirm your booking within
                2 hours during opening hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Booking request form">
              {/* Name row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label htmlFor="firstName" style={labelStyle}>First Name</label>
                  <input
                    id="firstName" type="text" required
                    placeholder="Sarah"
                    value={form.firstName} onChange={set('firstName')}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                  <input
                    id="lastName" type="text" required
                    placeholder="Johnson"
                    value={form.lastName} onChange={set('lastName')}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={labelStyle}>Email Address</label>
                <input
                  id="email" type="email" required
                  placeholder="sarah@email.com"
                  value={form.email} onChange={set('email')}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
                />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                <input
                  id="phone" type="tel"
                  placeholder="07700 000 000"
                  value={form.phone} onChange={set('phone')}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
                />
              </div>

              {/* Treatment */}
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="treatment" style={labelStyle}>Treatment</label>
                <select
                  id="treatment" required
                  value={form.treatment} onChange={set('treatment')}
                  style={{ ...inputStyle, appearance: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
                >
                  <option value="">Select a treatment...</option>
                  {TREATMENTS.map(t => (
                    <option key={t} value={t} style={{ background: 'var(--black)' }}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Date + Time */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label htmlFor="preferredDate" style={labelStyle}>Preferred Date</label>
                  <input
                    id="preferredDate" type="date"
                    value={form.preferredDate} onChange={set('preferredDate')}
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" style={labelStyle}>Preferred Time</label>
                  <select
                    id="preferredTime"
                    value={form.preferredTime} onChange={set('preferredTime')}
                    style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
                  >
                    <option style={{ background: 'var(--black)' }}>Morning (9–12)</option>
                    <option style={{ background: 'var(--black)' }}>Afternoon (12–4)</option>
                    <option style={{ background: 'var(--black)' }}>Evening (4–7)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="notes" style={labelStyle}>Notes</label>
                <textarea
                  id="notes" rows={3}
                  placeholder="Skin sensitivities, allergies, special occasions..."
                  value={form.notes} onChange={set('notes')}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  width: '100%',
                  background: status === 'submitting' ? 'var(--grey-pale)' : 'var(--white)',
                  color: 'var(--black)',
                  border: 'none',
                  padding: '15px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px', fontWeight: 500,
                  letterSpacing: '.25em', textTransform: 'uppercase',
                  marginTop: '8px',
                  transition: 'background .3s',
                  cursor: status === 'submitting' ? 'wait' : 'pointer',
                }}
                onMouseEnter={e => { if (status !== 'submitting') e.currentTarget.style.background = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; }}
              >
                {status === 'submitting' ? 'Sending…' : 'Request Appointment'}
              </button>

              {status === 'error' && (
                <p role="alert" style={{
                  color: '#e07070', fontSize: '11px', textAlign: 'center',
                  marginTop: '12px', fontWeight: 300,
                }}>
                  Something went wrong. Please call us on {settings.phone}.
                </p>
              )}

              <p style={{
                fontSize: '10px', color: 'rgba(255,255,255,.2)',
                textAlign: 'center', marginTop: '16px',
                fontWeight: 300, letterSpacing: '.04em',
              }}>
                We&apos;ll confirm your booking within 2 hours during opening hours
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes mapPulse {
          0%, 100% { opacity: .6; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.5); }
        }
        @media (max-width: 900px) {
          .booking-grid { grid-template-columns: 1fr !important; padding: 64px 24px 100px !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .booking-grid form > div:first-child,
          .booking-grid form > div:nth-child(5) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
