'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '#services', label: 'Treatments' },
  { href: '#pricing',  label: 'Pricing'    },
  { href: '#team',     label: 'Our Team'   },
  { href: '#booking',  label: 'Contact'    },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Desktop / Scroll Nav ── */}
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: scrolled ? '0 64px' : '0 64px',
          height: scrolled ? '64px' : '80px',
          background: scrolled ? 'rgba(255,255,255,.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,.08)' : 'none',
          transition: 'all .5s',
        }}
      >
        <Link
          href="/"
          aria-label="Urban Beauty — Home"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 500,
            letterSpacing: '.2em',
            color: scrolled ? 'var(--black)' : 'var(--white)',
            textDecoration: 'none',
            transition: 'color .4s',
            textTransform: 'uppercase',
          }}
        >
          Urban Beauty
        </Link>

        {/* Desktop links */}
        <ul
          role="list"
          style={{
            display: 'flex', alignItems: 'center', gap: '40px',
            listStyle: 'none',
          }}
          className="nav-desktop-links"
        >
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                style={{
                  fontSize: '10px', fontWeight: 400,
                  letterSpacing: '.25em', textTransform: 'uppercase',
                  color: scrolled ? 'var(--grey)' : 'rgba(255,255,255,.75)',
                  textDecoration: 'none',
                  transition: 'color .3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? 'var(--grey)' : 'rgba(255,255,255,.75)')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              onClick={e => handleNavClick(e, '#booking')}
              style={{
                background: scrolled ? 'var(--black)' : 'var(--white)',
                color: scrolled ? 'var(--white)' : 'var(--black)',
                padding: '11px 26px',
                fontSize: '10px', fontWeight: 500,
                letterSpacing: '.18em', textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background .3s, color .3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--white)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = scrolled ? 'var(--black)' : 'var(--white)'; e.currentTarget.style.color = scrolled ? 'var(--white)' : 'var(--black)'; }}
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
          className="hamburger"
          style={{
            display: 'none',
            flexDirection: 'column', gap: '5px',
            padding: '8px', background: 'none', border: 'none',
            zIndex: 300,
          }}
        >
          <span style={{
            display: 'block', width: '24px', height: '1.5px',
            background: scrolled && !menuOpen ? 'var(--black)' : 'var(--white)',
            transition: 'all .35s ease', transformOrigin: 'center',
            transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1.5px',
            background: scrolled && !menuOpen ? 'var(--black)' : 'var(--white)',
            transition: 'all .35s ease',
            opacity: menuOpen ? 0 : 1,
            transform: menuOpen ? 'scaleX(0)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1.5px',
            background: scrolled && !menuOpen ? 'var(--black)' : 'var(--white)',
            transition: 'all .35s ease', transformOrigin: 'center',
            transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* ── Mobile Nav Overlay ── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed', inset: 0,
          background: 'var(--black)',
          zIndex: 190,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '8px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity .4s',
        }}
      >
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => handleNavClick(e, link.href)}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 8vw, 48px)',
              fontWeight: 300,
              color: 'var(--white)',
              textDecoration: 'none',
              letterSpacing: '.05em',
              padding: '12px 0',
              transition: 'color .3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--white)')}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#booking"
          onClick={e => handleNavClick(e, '#booking')}
          style={{
            marginTop: '24px',
            background: 'var(--white)', color: 'var(--black)',
            padding: '16px 48px',
            fontSize: '11px', fontWeight: 500,
            letterSpacing: '.25em', textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Book Now →
        </a>
        <p style={{
          marginTop: '32px',
          fontSize: '10px', letterSpacing: '.25em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,.25)',
        }}>
          Urban Beauty Salon · Warrington, Cheshire
        </p>
      </div>

      {/* Responsive styles injected */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
