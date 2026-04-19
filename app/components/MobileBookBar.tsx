'use client'

export default function MobileBookBar() {
  return (
    <>
      <div
        className="mobile-book-bar"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          zIndex: 180,
          background: 'var(--black)',
          borderTop: '1px solid rgba(255,255,255,.1)',
          padding: '0',
        }}
      >
        <a
          href="#booking"
          onClick={e => {
            e.preventDefault()
            document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            display: 'block',
            width: '100%',
            padding: '18px',
            textAlign: 'center',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '.25em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            textDecoration: 'none',
          }}
        >
          Book Your Treatment
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-book-bar { display: block !important; }
        }
      `}</style>
    </>
  )
}
