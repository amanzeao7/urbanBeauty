'use client'

import { useState } from 'react'

const TREATMENTS = [
  {
    category: 'Aesthetics',
    description: 'Advanced aesthetic treatments delivered by qualified professionals.',
    services: [
      { name: 'Anti Ageing Injections — 1 Area',         duration: '45 mins', price: '£120' },
      { name: 'Anti Ageing Injections — 2 Areas',        duration: '45 mins', price: '£150' },
      { name: 'Anti Ageing Injections — 3 Areas',        duration: '45 mins', price: '£180' },
      { name: 'Derma 2 Eye Rejuvenation Treatment',       duration: '45 mins', price: '£99'  },
      { name: 'Derma 2 Skin Booster Micro-needling',      duration: '60 mins', price: '£120' },
      { name: 'Profhilo Skin Booster Treatment',          duration: '45 mins', price: '£200' },
      { name: 'Consultation — Advanced Treatments',       duration: '30 mins', price: '£5'   },
    ],
  },
  {
    category: 'CACI',
    description: 'The ultimate non-surgical facelift. Microcurrent technology that lifts, tones and rejuvenates.',
    services: [
      { name: 'Caci Non Surgical Face Lift',                       duration: '75 mins', price: '£57' },
      { name: 'Caci Non Surgical Eye Lift',                        duration: '45 mins', price: '£48' },
      { name: 'Caci Ultimate Anti Ageing Facial',                  duration: '90 mins', price: '£84' },
      { name: 'Caci Jowl Lift Express Facial',                     duration: '30 mins', price: '£40' },
      { name: 'Caci Ultimate Micro Dermabrasion',                  duration: '30 mins', price: '£42' },
      { name: 'Caci Ultimate Microdermabrasion & Hydratone Mask',  duration: '45 mins', price: '£57' },
    ],
  },
  {
    category: 'COMCIT Advanced Facials',
    description: 'Cutting-edge cryo oxygen micro-channelling technology for advanced skin rejuvenation.',
    services: [
      { name: 'Comcit Advanced Skin Rejuvenation',  duration: '60 mins', price: '£89'  },
      { name: 'Comcit inc Caci Face Lift',           duration: '90 mins', price: '£107' },
      { name: 'Comcit inc Micro Dermabrasion',       duration: '90 mins', price: '£107' },
      { name: 'Comcit inc Prime & Peel',             duration: '90 mins', price: '£107' },
    ],
  },
  {
    category: 'Crystal Clear Facials',
    description: 'Professional-grade facials using Crystal Clear\'s renowned skincare technology.',
    services: [
      { name: 'Crystal Clear Express Facial',          duration: '30 mins', price: '£40' },
      { name: 'Crystal Clear Luxury Facial',           duration: '60 mins', price: '£58' },
      { name: 'Crystal Clear MDA',                     duration: '45 mins', price: '£55' },
      { name: 'Crystal Clear MDA inc Prime & Peel',    duration: '75 mins', price: '£76' },
    ],
  },
  {
    category: 'Derma Plane Facials',
    description: 'Dermaplaning for ultra-smooth skin. Removes dead skin and fine hair for a radiant complexion.',
    services: [
      { name: 'Dermaplaning Luxury',            duration: '60 mins', price: '£58' },
      { name: 'Dermaplaning & Glycolic Peel',   duration: '75 mins', price: '£78' },
    ],
  },
  {
    category: 'Glycolic Peels',
    description: 'Professional chemical peels to resurface and brighten the skin.',
    services: [
      { name: 'Glycolic Peel Facial', duration: '45 mins', price: '£55' },
    ],
  },
  {
    category: 'Eyes, Lashes & Brows',
    description: 'From classic tints to LVL lifts and brow lamination. Precision artistry every time.',
    services: [
      { name: 'Eyelash Tint',                   duration: '15 mins', price: '£18' },
      { name: 'Eyebrow Tint',                   duration: '15 mins', price: '£14' },
      { name: 'Eyebrow Wax & Tint',             duration: '30 mins', price: '£27' },
      { name: 'Eye Package',                    duration: '30 mins', price: '£36' },
      { name: 'LVL — Length Volume & Lift',     duration: '75 mins', price: '£57' },
      { name: 'Brow Lamination',                duration: '60 mins', price: '£43' },
      { name: 'LVL & Brow Lamination Package',  duration: '120 mins',price: '£88' },
      { name: 'Express Lashes',                 duration: '45 mins', price: '£55' },
      { name: 'Express Lashes inc Soak Off',    duration: '60 mins', price: '£60' },
      { name: 'Lash Removal',                   duration: '30 mins', price: '£16' },
      { name: 'Sensitivity Test',               duration: '15 mins', price: '£5'  },
    ],
  },
  {
    category: 'Semi-Permanent Brows',
    description: 'Long-lasting brow perfection. Natural-looking results that frame your face beautifully.',
    services: [
      { name: 'Semi-Permanent Eyebrows',               duration: '150 mins', price: '£220' },
      { name: 'Semi-Permanent Eyebrows Annual Top Up',  duration: '150 mins', price: '£180' },
      { name: 'Semi-Permanent Brow Consultation',       duration: '30 mins',  price: '£5'   },
    ],
  },
  {
    category: 'Body & Massage',
    description: 'Therapeutic and relaxation massage. Tailored to exactly what your body needs.',
    services: [
      { name: 'Full Body Massage',                    duration: '55 mins', price: '£58' },
      { name: 'Full Body Massage inc Face & Scalp',   duration: '70 mins', price: '£70' },
      { name: 'Back Massage',                         duration: '25 mins', price: '£40' },
      { name: 'Deep Tissue Back Massage',             duration: '25 mins', price: '£42' },
      { name: 'Hot Stone Back Massage',               duration: '40 mins', price: '£50' },
      { name: 'Head Massage',                         duration: '25 mins', price: '£40' },
      { name: 'Foot, Leg & Ankle Massage',            duration: '25 mins', price: '£40' },
      { name: '20min Face, Chest & Scalp Massage',    duration: '20 mins', price: '£39' },
      { name: 'Signature Back Treatment',             duration: '40 mins', price: '£50' },
      { name: 'Signature Body Treatment',             duration: '80 mins', price: '£83' },
      { name: 'Full Body Exfoliation',                duration: '60 mins', price: '£58' },
      { name: 'Add 25 min Back Massage to any Facial',duration: '25 mins', price: '£30' },
      { name: 'Caci Bum Lift',                        duration: '45 mins', price: '£40' },
    ],
  },
  {
    category: 'Nails — Fingers',
    description: 'Manicures, gel, acrylic, BIAB and everything in between. Immaculate results every time.',
    services: [
      { name: 'File & Polish',                              duration: '30 mins', price: '£20' },
      { name: 'Manicure',                                   duration: '45 mins', price: '£29' },
      { name: 'Deluxe Manicure',                            duration: '60 mins', price: '£38' },
      { name: 'Shellac/Gel Manicure (No Soak Off)',         duration: '45 mins', price: '£31' },
      { name: 'Shellac/Gel Manicure (With Soak Off)',       duration: '60 mins', price: '£34' },
      { name: 'Add Shellac/Gel to Deluxe Manicure',         duration: '15 mins', price: '£14' },
      { name: 'Shellac/Gel Soak Off',                       duration: '15 mins', price: '£16' },
      { name: 'Shellac/Gel Nail Repair',                    duration: '15 mins', price: '£12' },
      { name: 'BIAB Manicure with Shellac/Gel',             duration: '60 mins', price: '£40' },
      { name: 'BIAB Manicure with Shellac/Gel (Soak Off)',  duration: '90 mins', price: '£46' },
      { name: 'BIAB Infill with Shellac/Gel',               duration: '90 mins', price: '£43' },
      { name: 'BIAB Natural Nail Overlay',                  duration: '75 mins', price: '£38' },
      { name: 'BIAB Removal (applied here only)',           duration: '30 mins', price: '£18' },
      { name: 'BIAB Nail Repair',                           duration: '30 mins', price: '£16' },
      { name: 'Bio Sculpture Manicure (No Soak Off)',       duration: '60 mins', price: '£39' },
      { name: 'Bio Sculpture Manicure (With Soak Off)',     duration: '75 mins', price: '£42' },
      { name: 'Acrylic Full Set With Tips + Gel Finish',    duration: '90 mins', price: '£47' },
      { name: 'Acrylic Infill With Shellac/Gel',            duration: '90 mins', price: '£43' },
      { name: 'Acrylic Soak Off (When Having New Set)',     duration: '45 mins', price: '£27' },
      { name: 'Acrylic Nail Repair',                        duration: '30 mins', price: '£16' },
      { name: 'Acrygel Nail Enhancements',                  duration: '90 mins', price: '£47' },
      { name: 'Acrygel Infill (2–3 weeks)',                 duration: '90 mins', price: '£43' },
      { name: 'Acrygel Nail Repair',                        duration: '30 mins', price: '£16' },
      { name: 'Add Nail Art',                               duration: '15 mins', price: '£12' },
    ],
  },
  {
    category: 'Nails — Feet',
    description: 'Pedicures, Shellac and gel treatments for perfectly finished feet.',
    services: [
      { name: 'File & Polish Toes',                       duration: '30 mins', price: '£20' },
      { name: 'Pedicure',                                 duration: '60 mins', price: '£40' },
      { name: 'Deluxe Pedicure',                          duration: '75 mins', price: '£48' },
      { name: 'Shellac/Gel Toes (No Soak Off)',           duration: '30 mins', price: '£31' },
      { name: 'Shellac/Gel Toes (With Soak Off)',         duration: '45 mins', price: '£34' },
      { name: 'Add Shellac/Gel Toes to Pedicure',         duration: '15 mins', price: '£14' },
      { name: 'Shellac/Gel Soak Off Toes (Standalone)',   duration: '15 mins', price: '£16' },
      { name: 'Shellac/Gel Soak Off Toes (With Pedicure)',duration: '15 mins', price: '£3'  },
      { name: 'Shellac/Gel Toes Nail Repair',             duration: '15 mins', price: '£12' },
    ],
  },
  {
    category: 'Hair Removal',
    description: 'Waxing and threading by experienced therapists. Smooth, long-lasting results.',
    services: [
      { name: 'Eyebrow Wax',          duration: '15 mins', price: '£14' },
      { name: 'Lip Strip Wax',        duration: '15 mins', price: '£12' },
      { name: 'Lip Hot Wax',          duration: '15 mins', price: '£15' },
      { name: 'Chin Strip Wax',       duration: '15 mins', price: '£12' },
      { name: 'Chin Hot Wax',         duration: '15 mins', price: '£15' },
      { name: 'Lip & Chin Strip Wax', duration: '30 mins', price: '£23' },
      { name: 'Lip & Chin Hot Wax',   duration: '30 mins', price: '£28' },
      { name: 'Under Arm Strip Wax',  duration: '15 mins', price: '£18' },
      { name: 'Underarm Hot Wax',     duration: '15 mins', price: '£20' },
      { name: 'Half Leg Wax',         duration: '30 mins', price: '£28' },
      { name: 'Full Leg Wax',         duration: '45 mins', price: '£34' },
      { name: 'Full Arm Wax',         duration: '30 mins', price: '£26' },
      { name: 'Bikini Tidy',          duration: '15 mins', price: '£18' },
      { name: 'Bikini Tidy Hot Wax',  duration: '30 mins', price: '£26' },
      { name: 'Bikini Slim',          duration: '30 mins', price: '£26' },
      { name: 'Bikini Slim Hot Wax',  duration: '30 mins', price: '£32' },
      { name: 'Intimate Wax',         duration: '45 mins', price: '£40' },
      { name: 'Back Wax (Female)',     duration: '30 mins', price: '£28' },
      { name: 'Back Wax (Male)',       duration: '30 mins', price: '£35' },
      { name: 'Brows Threading',      duration: '15 mins', price: '£16' },
      { name: 'Lip Threading',        duration: '15 mins', price: '£12' },
      { name: 'Chin Threading',       duration: '15 mins', price: '£12' },
      { name: 'Side of Face Threading',duration: '30 mins', price: '£20' },
      { name: 'Full Face Threading',  duration: '45 mins', price: '£32' },
    ],
  },
  {
    category: 'Tanning',
    description: 'Professional spray tans for a natural, streak-free glow.',
    services: [
      { name: 'Sienna X Spray Tan',   duration: '15 mins', price: '£29' },
      { name: 'Half Body Spray Tan',  duration: '15 mins', price: '£21' },
    ],
  },
  {
    category: 'Shrinking Violet',
    description: 'The original inch loss body wrap. Clinically proven results in a single session.',
    services: [
      { name: 'Shrinking Violet Wrap', duration: '90 mins', price: '£79' },
    ],
  },
  {
    category: 'Men\'s Treatments',
    description: 'Grooming and treatments specifically tailored for men.',
    services: [
      { name: 'Gentleman\'s Manicure',  duration: '30 mins', price: '£24' },
      { name: 'Gentleman\'s Pedicure',  duration: '45 mins', price: '£38' },
      { name: 'Men\'s Chest Wax',       duration: '30 mins', price: '£29' },
      { name: 'Men\'s Back Wax',        duration: '30 mins', price: '£35' },
      { name: 'Men\'s Chest & Back Wax',duration: '60 mins', price: '£58' },
      { name: 'Men\'s Brow Wax',        duration: '15 mins', price: '£14' },
    ],
  },
  {
    category: 'Little Miss Urban (Age 4–12)',
    description: 'Gentle, age-appropriate treatments for our youngest guests.',
    services: [
      { name: 'Little Miss Nails', duration: '30 mins', price: '£16' },
      { name: 'Little Miss Toes',  duration: '30 mins', price: '£16' },
    ],
  },
]

export default function TreatmentsClient() {
  const [open, setOpen] = useState<string | null>('CACI')

  return (
    <div style={{
      maxWidth: '960px',
      margin: '0 auto',
      padding: '80px 64px',
    }} className="treatments-wrapper">

      {TREATMENTS.map((cat) => {
        const isOpen = open === cat.category
        return (
          <div
            key={cat.category}
            style={{ borderBottom: '1px solid var(--grey-pale)' }}
          >
            {/* Accordion header */}
            <button
              onClick={() => setOpen(isOpen ? null : cat.category)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px', fontWeight: 400,
                  color: 'var(--black)',
                  marginBottom: '4px',
                }}>{cat.category}</div>
                <div style={{
                  fontSize: '11px', fontWeight: 300,
                  color: 'var(--grey)', letterSpacing: '.04em',
                }}>{cat.services.length} treatments</div>
              </div>
              <div style={{
                width: '32px', height: '32px',
                border: '1px solid var(--grey-pale)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                fontSize: '18px', color: isOpen ? 'var(--accent)' : 'var(--grey)',
                transition: 'all .3s',
                transform: isOpen ? 'rotate(45deg)' : 'none',
              }} aria-hidden="true">+</div>
            </button>

            {/* Accordion body */}
            {isOpen && (
              <div style={{ paddingBottom: '32px' }}>
                <p style={{
                  fontSize: '12px', fontWeight: 300,
                  color: 'var(--grey)', lineHeight: 1.7,
                  marginBottom: '24px', fontStyle: 'italic',
                }}>{cat.description}</p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1px',
                  background: 'var(--grey-pale)',
                }} className="treatments-list">
                  {cat.services.map(service => (
                    <div
                      key={service.name}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px 20px',
                        background: 'var(--white)',
                        transition: 'background .2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--off-white)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'var(--white)')}
                    >
                      <div>
                        <div style={{
                          fontSize: '13px', fontWeight: 300,
                          color: 'var(--black)', marginBottom: '3px',
                        }}>{service.name}</div>
                        <div style={{
                          fontSize: '10px', color: 'var(--grey-light)',
                          letterSpacing: '.06em',
                        }}>{service.duration}</div>
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '20px', fontWeight: 300,
                        color: 'var(--black)', flexShrink: 0,
                        marginLeft: '16px',
                      }}>{service.price}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                  <a href="/#booking" style={{
                    fontSize: '10px', letterSpacing: '.2em',
                    textTransform: 'uppercase', color: 'var(--accent)',
                    textDecoration: 'none', display: 'inline-flex',
                    alignItems: 'center', gap: '8px',
                  }}>
                    Book this treatment →
                  </a>
                </div>
              </div>
            )}
          </div>
        )
      })}

      <style>{`
        @media (max-width: 768px) {
          .treatments-wrapper { padding: 48px 24px !important; }
          .treatments-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
