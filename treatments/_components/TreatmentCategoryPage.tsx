import Link from 'next/link'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import { getSiteSettings } from '@/lib/sanity'
import { PLACEHOLDER_SETTINGS } from '@/lib/placeholder-data'

export interface TreatmentService {
  name: string
  duration: string
  price: string
  description?: string
}

export interface TreatmentPageProps {
  tag: string
  heading: string
  headingEm: string
  intro: string
  body: string[]
  benefits?: string[]
  services: TreatmentService[]
  faqs?: { q: string; a: string }[]
  relatedLinks?: { href: string; label: string }[]
}

export default async function TreatmentCategoryPage(props: TreatmentPageProps) {
  const settings = await getSiteSettings().catch(() => null) ?? PLACEHOLDER_SETTINGS
  const {
    tag, heading, headingEm, intro, body,
    benefits, services, faqs, relatedLinks,
  } = props

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <div style={{
          background: 'var(--black)',
          padding: '160px 64px 80px',
        }} className="cat-hero">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              fontSize: '9px', letterSpacing: '.35em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: '20px',
            }}>
              {tag}
              <span style={{ width: '28px', height: '1px', background: 'var(--accent)', display: 'block' }} />
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: 300, color: 'var(--white)',
              lineHeight: 1.05, marginBottom: '24px',
            }}>
              {heading}<br />
              <em style={{ fontStyle: 'italic', color: 'var(--grey-pale)' }}>{headingEm}</em>
            </h1>
            <p style={{
              fontSize: '14px', fontWeight: 300,
              lineHeight: 1.9, color: 'rgba(255,255,255,.55)',
              maxWidth: '560px',
            }}>{intro}</p>
          </div>
        </div>

        {/* ── Price list ── */}
        <div style={{ background: 'var(--off-white)', padding: '80px 64px' }} className="cat-prices">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              fontSize: '9px', letterSpacing: '.35em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: '32px',
            }}>
              Prices
              <span style={{ width: '28px', height: '1px', background: 'var(--accent)', display: 'block' }} />
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px', background: 'var(--grey-pale)',
            }} className="cat-price-grid">
              {services.map(s => (
                <div key={s.name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '22px 28px', background: 'var(--white)',
                  transition: 'background .2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F0EEEC')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--white)')}
                >
                  <div>
                    <div style={{
                      fontSize: '14px', fontWeight: 300,
                      color: 'var(--black)', marginBottom: '4px',
                    }}>{s.name}</div>
                    <div style={{
                      fontSize: '10px', color: 'var(--grey-light)', letterSpacing: '.08em',
                    }}>{s.duration}{s.description ? ` · ${s.description}` : ''}</div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '24px', fontWeight: 300, color: 'var(--black)',
                    flexShrink: 0, marginLeft: '20px',
                  }}>{s.price}</div>
                </div>
              ))}
            </div>
            <p style={{
              fontSize: '11px', color: 'var(--grey)', marginTop: '20px',
              fontWeight: 300, letterSpacing: '.04em',
            }}>
              All prices include a full consultation. No hidden charges.
            </p>
          </div>
        </div>

        {/* ── About section ── */}
        <div style={{ padding: '80px 64px', background: 'var(--white)' }} className="cat-about">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '80px', maxWidth: '1200px', margin: '0 auto',
            alignItems: 'start',
          }} className="cat-about-grid">
            <div>
              {body.map((para, i) => (
                <p key={i} style={{
                  fontSize: '13px', fontWeight: 300,
                  lineHeight: 1.95, color: 'var(--grey)',
                  marginBottom: '20px',
                }}>{para}</p>
              ))}
              <div style={{ marginTop: '36px' }}>
                <a href="/#booking" style={{
                  background: 'var(--black)', color: 'var(--white)',
                  padding: '14px 36px', fontSize: '10px', fontWeight: 500,
                  letterSpacing: '.25em', textTransform: 'uppercase',
                  textDecoration: 'none', display: 'inline-block',
                }}>
                  Book This Treatment
                </a>
              </div>
            </div>

            {benefits && benefits.length > 0 && (
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  fontSize: '9px', letterSpacing: '.35em', textTransform: 'uppercase',
                  color: 'var(--accent)', marginBottom: '28px',
                }}>
                  Benefits
                  <span style={{ width: '28px', height: '1px', background: 'var(--accent)', display: 'block' }} />
                </div>
                <ul style={{ listStyle: 'none' }}>
                  {benefits.map(b => (
                    <li key={b} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '16px',
                      padding: '14px 0',
                      borderBottom: '1px solid var(--grey-pale)',
                      fontSize: '13px', fontWeight: 300,
                      color: 'var(--grey-dark)', lineHeight: 1.5,
                    }}>
                      <span style={{
                        width: '20px', height: '1px',
                        background: 'var(--accent)',
                        flexShrink: 0, marginTop: '10px',
                        display: 'block',
                      }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ── FAQs ── */}
        {faqs && faqs.length > 0 && (
          <div style={{ background: 'var(--off-white)', padding: '80px 64px' }} className="cat-faqs">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                fontSize: '9px', letterSpacing: '.35em', textTransform: 'uppercase',
                color: 'var(--accent)', marginBottom: '40px',
              }}>
                FAQs
                <span style={{ width: '28px', height: '1px', background: 'var(--accent)', display: 'block' }} />
              </div>
              {faqs.map(faq => (
                <div key={faq.q} style={{
                  borderBottom: '1px solid var(--grey-pale)',
                  padding: '28px 0',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '17px', fontWeight: 400,
                    color: 'var(--black)', marginBottom: '12px',
                  }}>{faq.q}</div>
                  <p style={{
                    fontSize: '13px', fontWeight: 300,
                    lineHeight: 1.85, color: 'var(--grey)',
                  }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Related treatments ── */}
        {relatedLinks && relatedLinks.length > 0 && (
          <div style={{ background: 'var(--black)', padding: '60px 64px' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{
                fontSize: '10px', letterSpacing: '.25em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,.3)', marginBottom: '24px',
              }}>You might also like</p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {relatedLinks.map(l => (
                  <Link key={l.href} href={l.href} style={{
                    border: '1px solid rgba(255,255,255,.12)',
                    color: 'rgba(255,255,255,.5)',
                    padding: '10px 24px', fontSize: '10px',
                    letterSpacing: '.2em', textTransform: 'uppercase',
                    textDecoration: 'none', transition: 'all .3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)'; }}
                  >{l.label}</Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div style={{ background: 'var(--off-white)', padding: '80px 64px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(24px, 3vw, 40px)',
            fontWeight: 300, color: 'var(--black)', marginBottom: '12px',
          }}>Ready to book?</h2>
          <p style={{
            fontSize: '12px', color: 'var(--grey)',
            marginBottom: '32px', fontWeight: 300,
          }}>
            Book online or call us on {settings.phone}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#booking" style={{
              background: 'var(--black)', color: 'var(--white)',
              padding: '14px 36px', fontSize: '10px', fontWeight: 500,
              letterSpacing: '.25em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
            }}>Book Online</a>
            <a href={`tel:${settings.phone?.replace(/\s/g,'')}`} style={{
              background: 'transparent',
              border: '1px solid var(--black)',
              color: 'var(--black)',
              padding: '14px 36px', fontSize: '10px', fontWeight: 400,
              letterSpacing: '.25em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
            }}>Call Us</a>
          </div>
          <div style={{ marginTop: '32px' }}>
            <Link href="/treatments" style={{
              fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase',
              color: 'var(--grey)', textDecoration: 'none',
            }}>
              ← View full treatment menu
            </Link>
          </div>
        </div>

      </main>
      <Footer settings={settings} />

      <style>{`
        @media (max-width: 768px) {
          .cat-hero, .cat-prices, .cat-about, .cat-faqs { padding: 80px 24px !important; }
          .cat-about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cat-price-grid { grid-template-columns: 1fr !important; }
          .cat-hero { padding-top: 120px !important; }
        }
      `}</style>
    </>
  )
}
