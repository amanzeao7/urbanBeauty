'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { PricingItem } from '@/types/payload'

interface PricingProps {
  pricing: PricingItem[]
}

const TABS: { key: PricingItem['category']; label: string }[] = [
  { key: 'facial',  label: 'Facials'     },
  { key: 'massage', label: 'Massage'     },
  { key: 'caci',    label: 'CACI'        },
  { key: 'nails',   label: 'Nails'       },
  { key: 'lash',    label: 'Lash & Brow' },
]

// Most popular treatments shown on homepage — subset only
const FEATURED: Record<PricingItem['category'], string[]> = {
  facial:  ['Express Facial', 'Deep Cleanse Facial', 'Anti-Ageing Facial', 'Luxury Facial'],
  massage: ['Swedish Full Body', 'Deep Tissue', 'Hot Stone Massage', 'Back, Neck & Shoulder'],
  caci:    ['CACI Single Session', 'CACI Course of 5', 'CACI Course of 10', 'CACI Eye & Lip'],
  nails:   ['Classic Manicure', 'Classic Pedicure', 'Gelish Manicure', 'Gelish Pedicure'],
  lash:    ['Lash Tint', 'Lash Lift & Tint', 'HD Brows', 'Brow Lamination'],
}

export default function Pricing({ pricing }: PricingProps) {
  const [active, setActive] = useState<PricingItem['category']>('facial')

  const allItems = pricing.filter(p => p.category === active)
  // Show featured items if available, otherwise show all
  const featured = FEATURED[active]
  const items = allItems.length
    ? allItems.filter(p => featured.includes(p.name))
    : []
  const displayItems = items.length ? items : allItems

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{ background: 'var(--black)', padding: '120px 64px' }}
      className="pricing-section"
    >
      {/* Header */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="section-tag center" style={{ color: 'rgba(200,168,130,.7)', justifyContent: 'center' }}>
          Investment
        </div>
        <h2
          id="pricing-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 300, color: 'var(--white)',
          }}
        >
          Treatment <em style={{ color: 'var(--grey-pale)' }}>Menu</em>
        </h2>
        <p style={{
          fontSize: '11px', color: 'var(--grey)',
          letterSpacing: '.1em', marginTop: '12px', fontWeight: 300,
        }}>
          Popular treatments · All prices include a full consultation.
        </p>
      </div>

      {/* Tabs */}
      <div
        className="reveal pricing-tabs"
        role="tablist"
        aria-label="Treatment categories"
        style={{
          display: 'flex', justifyContent: 'center',
          marginBottom: '56px',
          border: '1px solid rgba(255,255,255,.1)',
          width: 'fit-content',
          marginLeft: 'auto', marginRight: 'auto',
        }}
      >
        {TABS.map(tab => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            aria-controls={`panel-${tab.key}`}
            id={`tab-${tab.key}`}
            onClick={() => setActive(tab.key)}
            style={{
              padding: '12px 28px',
              fontSize: '9px', letterSpacing: '.22em', textTransform: 'uppercase',
              background: active === tab.key ? 'var(--white)' : 'transparent',
              color: active === tab.key ? 'var(--black)' : 'rgba(255,255,255,.35)',
              border: 'none',
              borderRight: '1px solid rgba(255,255,255,.08)',
              transition: 'all .3s',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Price list */}
      <div
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="reveal pricing-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'rgba(255,255,255,.06)',
          maxWidth: '960px',
          margin: '0 auto 32px',
        }}
      >
        {displayItems.map(item => (
          <div
            key={item.id}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '22px 32px',
              background: 'rgba(255,255,255,.02)',
              transition: 'background .3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.05)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.02)')}
          >
            <div>
              <div style={{
                fontSize: '14px', fontWeight: 300,
                color: 'rgba(255,255,255,.85)', marginBottom: '4px',
              }}>{item.name}</div>
              <div style={{
                fontSize: '10px', color: 'rgba(255,255,255,.3)', letterSpacing: '.08em',
              }}>{item.duration}</div>
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '26px', fontWeight: 300, color: 'var(--white)',
            }}>{item.price}</div>
          </div>
        ))}
      </div>

      {/* View full menu link */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <Link
          href="/treatments"
          style={{
            fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.3)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            transition: 'color .3s',
            borderBottom: '1px solid rgba(255,255,255,.1)',
            paddingBottom: '4px',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.3)')}
        >
          View full treatment menu (120+ services) →
        </Link>
      </div>

      <div className="reveal" style={{ textAlign: 'center' }}>
        <a href="#booking" className="btn-white">Reserve Your Treatment</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-section { padding: 80px 24px !important; }
          .pricing-tabs {
            flex-wrap: wrap; width: 100% !important;
            border: none !important; gap: 4px; justify-content: center;
          }
          .pricing-tabs button {
            border: 1px solid rgba(255,255,255,.12) !important;
            flex: 1 1 auto; min-width: 80px; text-align: center; padding: 10px 12px;
          }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
