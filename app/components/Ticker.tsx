const ITEMS = [
  'CACI Facelift',
  'Bespoke Facials',
  'Massage Therapy',
  'Lash & Brow',
  'Nails & Gelish',
  'Pamper Packages',
  'Gift Vouchers',
  'Waxing & Threading',
]

export default function Ticker() {
  // Duplicate for seamless loop
  const all = [...ITEMS, ...ITEMS]

  return (
    <div
      style={{ background: 'var(--black)', overflow: 'hidden', padding: '16px 0' }}
      aria-hidden="true"
    >
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'ticker 32s linear infinite',
      }}>
        {all.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '32px',
            padding: '0 32px',
            fontSize: '9px', letterSpacing: '.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.55)',
            whiteSpace: 'nowrap',
          }}>
            {item}
            <span style={{
              width: '3px', height: '3px',
              background: 'var(--accent)',
              borderRadius: '50%', flexShrink: 0,
            }} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
