'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mq.matches) return

    let mx = 0, my = 0, ox = 0, oy = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
    }

    document.addEventListener('mousemove', onMove)

    const loop = () => {
      ox += (mx - ox) * .13
      oy += (my - oy) * .13
      if (ringRef.current) {
        ringRef.current.style.left = ox + 'px'
        ringRef.current.style.top  = oy + 'px'
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    // Scale up ring on hoverable elements
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '52px'
        ringRef.current.style.height = '52px'
        ringRef.current.style.borderColor = 'var(--accent)'
        ringRef.current.style.opacity = '0.8'
      }
      if (dotRef.current) dotRef.current.style.opacity = '0'
    }
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '32px'
        ringRef.current.style.height = '32px'
        ringRef.current.style.borderColor = 'rgba(255,255,255,0.6)'
        ringRef.current.style.opacity = '1'
      }
      if (dotRef.current) dotRef.current.style.opacity = '1'
    }

    const interactables = document.querySelectorAll('a, button, [role="button"]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Inner dot — white with dark outline so visible everywhere */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '6px', height: '6px',
          background: 'var(--white)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 1.5px rgba(0,0,0,0.4)',
          transition: 'opacity .2s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Outer ring — white so visible on dark, mix-blend makes it dark on light */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '32px', height: '32px',
          border: '1.5px solid rgba(255,255,255,0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width .3s ease, height .3s ease, border-color .3s ease, opacity .3s ease',
          mixBlendMode: 'difference',
        }}
      />
    </>
  )
}
