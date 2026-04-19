import type {
  Service,
  PricingItem,
  TeamMember,
  Testimonial,
  SiteSettings,
} from '@/types/payload'

const PAYLOAD_URL = process.env.PAYLOAD_URL ?? 'http://localhost:3001'
const REVALIDATE = 3600 // 1 hour ISR

// ─── Generic fetch wrapper ────────────────────────────────────────────────────
async function payloadFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${PAYLOAD_URL}/api${path}`, {
    next: { revalidate: REVALIDATE },
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Payload fetch failed: ${path} (${res.status})`)
  return res.json()
}

// ─── Collections ─────────────────────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  const data = await payloadFetch<{ docs: Service[] }>(
    '/services?limit=100&sort=number'
  )
  return data.docs
}

export async function getPricing(): Promise<PricingItem[]> {
  const data = await payloadFetch<{ docs: PricingItem[] }>(
    '/pricing?limit=100&sort=category'
  )
  return data.docs
}

export async function getTeam(): Promise<TeamMember[]> {
  const data = await payloadFetch<{ docs: TeamMember[] }>(
    '/team?limit=20&sort=order'
  )
  return data.docs
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await payloadFetch<{ docs: Testimonial[] }>(
    '/testimonials?limit=6'
  )
  return data.docs
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const data = await payloadFetch<{ docs: SiteSettings[] }>(
      '/site-settings?limit=1'
    )
    return data.docs[0] ?? null
  } catch {
    return null
  }
}

// ─── Booking form submission ──────────────────────────────────────────────────
// POST to your own Next.js API route, which forwards to Payload or email

export interface BookingPayload {
  firstName: string
  lastName: string
  email: string
  phone: string
  treatment: string
  preferredDate: string
  preferredTime: string
  notes?: string
}

export async function submitBooking(data: BookingPayload): Promise<{ ok: boolean }> {
  const res = await fetch('/api/booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return { ok: res.ok }
}
