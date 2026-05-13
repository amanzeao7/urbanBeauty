'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/treatments', label: 'Treatments', external: false },
  { href: '/#pricing',   label: 'Pricing',    external: false },
  { href: '/#team',      label: 'Our Team',   external: false },
  { href: '/#booking',   label: 'Contact',    external: false },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    // On non-home pages, always show scrolled (white) nav
    if (!isHome) setScrolled(true)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

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

  // Smooth scroll for hash links on homepage
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      if (isHome) {
        e.preventDefault()
        closeMenu()
        const id = href.replace('/#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
      // If not on home, let Next.js navigate to /#section naturally
    } else {
      closeMenu()
    }
  }

  const navBg     = scrolled ? 'rgba(255,255,255,.96)' : 'transparent'
  const linkColor = scrolled ? 'var(--grey)'           : 'rgba(255,255,255,.75)'
  const logoColor = scrolled ? 'var(--black)'          : 'var(--white)'
  const bookBg    = scrolled ? 'var(--black)'          : 'var(--white)'
  const bookColor = scrolled ? 'var(--white)'          : 'var(--black)'

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 64px',
          height: scrolled ? '64px' : '80px',
          background: navBg,
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
            fontSize: '18px', fontWeight: 500,
            letterSpacing: '.2em', textTransform: 'uppercase',
            color: logoColor, textDecoration: 'none',
            transition: 'color .4s',
          }}
        >
          Urban Beauty
        </Link>

        {/* Desktop links */}
        <ul role="list" style={{
          display: 'flex', alignItems: 'center', gap: '40px', listStyle: 'none',
        }} className="nav-desktop-links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={e => handleNavClick(e as any, link.href)}
                style={{
                  fontSize: '10px', fontWeight: 400,
                  letterSpacing: '.25em', textTransform: 'uppercase',
                  color: linkColor, textDecoration: 'none',
                  transition: 'color .3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#booking"
              onClick={e => handleNavClick(e as any, '/#booking')}
              style={{
                background: bookBg, color: bookColor,
                padding: '11px 26px',
                fontSize: '10px', fontWeight: 500,
                letterSpacing: '.18em', textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background .3s, color .3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.color = 'var(--white)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = bookBg
                e.currentTarget.style.color = bookColor
              }}
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
          className="hamburger"
          style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            padding: '8px', background: 'none', border: 'none', zIndex: 300,
          }}
        >
          {[
            menuOpen ? 'translateY(6.5px) rotate(45deg)'  : 'none',
            'none',
            menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          ].map((transform, i) => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '1.5px',
              background: scrolled && !menuOpen ? 'var(--black)' : 'var(--white)',
              transition: 'all .35s ease',
              transform,
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
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
          <Link
            key={link.href}
            href={link.href}
            onClick={e => handleNavClick(e as any, link.href)}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 8vw, 48px)',
              fontWeight: 300, color: 'var(--white)',
              textDecoration: 'none', letterSpacing: '.05em',
              padding: '12px 0', transition: 'color .3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--white)')}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#booking"
          onClick={e => handleNavClick(e as any, '/#booking')}
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
        </Link>
        <p style={{
          marginTop: '32px', fontSize: '10px',
          letterSpacing: '.25em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,.25)',
        }}>
          Urban Beauty Salon · Warrington, Cheshire
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}
