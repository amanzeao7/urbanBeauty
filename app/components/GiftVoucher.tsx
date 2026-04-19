export default function GiftVoucher() {
  return (
    <section
      aria-labelledby="voucher-heading"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1800&auto=format&fit=crop&q=80"
        alt="Luxury salon interior — gift voucher background"
        width={1800}
        height={600}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(100%)',
          display: 'block',
        }}
        loading="lazy"
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,.8)',
      }} aria-hidden="true" />

      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: '80px 64px',
        width: '100%',
      }} className="voucher-inner">
        <div
          className="section-tag center reveal"
          style={{ color: 'rgba(200,168,130,.8)', justifyContent: 'center' }}
        >
          Gift Someone Special
        </div>

        <h2
          id="voucher-heading"
          className="reveal"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 300,
            color: 'var(--white)',
            marginBottom: '12px',
          }}
        >
          Give the gift<br />of <em>beautiful</em>
        </h2>

        <p className="reveal" style={{
          fontSize: '12px', fontWeight: 300,
          color: 'rgba(255,255,255,.45)',
          letterSpacing: '.08em',
          marginBottom: '40px',
          lineHeight: 1.8,
        }}>
          Digital and physical gift vouchers available in any value.<br />
          Perfect for every occasion.
        </p>

        <a href="#booking" className="btn-ghost reveal">
          Purchase a Voucher
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .voucher-inner { padding: 64px 24px !important; }
          .btn-ghost { width: 100%; max-width: 360px; text-align: center; display: block; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
