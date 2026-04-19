import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { Service, PricingItem, TeamMember, Testimonial, SiteSettings } from '@/types/payload'

// ─── Sanity client ────────────────────────────────────────────────────────────
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // cached responses at the edge
})

// ─── Image URL builder ────────────────────────────────────────────────────────
const builder = imageUrlBuilder(sanityClient)

export function sanityImage(source: any): string {
  if (!source) return ''
  return builder.image(source).auto('format').url()
}

// ─── GROQ queries ─────────────────────────────────────────────────────────────
// GROQ is Sanity's query language — like GraphQL but simpler

export async function getServices(): Promise<Service[]> {
  const data = await sanityClient.fetch(
    `*[_type == "service"] | order(number asc) {
      "id": _id,
      number,
      name,
      category,
      tagline,
      startingPrice,
      duration,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      featured
    }`,
    {},
    { next: { revalidate: 3600 } }
  )
  return data
}

export async function getPricing(): Promise<PricingItem[]> {
  const data = await sanityClient.fetch(
    `*[_type == "pricing"] | order(category asc, name asc) {
      "id": _id,
      name,
      duration,
      price,
      category
    }`,
    {},
    { next: { revalidate: 3600 } }
  )
  return data
}

export async function getTeam(): Promise<TeamMember[]> {
  const data = await sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      "id": _id,
      name,
      role,
      bio,
      "photo": {
        "url": photo.asset->url,
        "alt": photo.alt
      },
      order
    }`,
    {},
    { next: { revalidate: 3600 } }
  )
  return data
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await sanityClient.fetch(
    `*[_type == "testimonial"][0...6] {
      "id": _id,
      quote,
      author,
      treatment,
      rating
    }`,
    {},
    { next: { revalidate: 3600 } }
  )
  return data
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "siteSettings"][0] {
        "id": _id,
        heroHeadline,
        heroSubheadline,
        "heroImage": {
          "url": heroImage.asset->url,
          "alt": heroImage.alt
        },
        aboutHeading,
        aboutBody1,
        aboutBody2,
        statsYears,
        statsTreatments,
        statsRating,
        reviewsCount,
        phone,
        email,
        address,
        addressLine2,
        postcode,
        hoursWeekday,
        hoursSaturday,
        hoursSunday,
        instagramUrl,
        facebookUrl,
        tiktokUrl
      }`,
      {},
      { next: { revalidate: 3600 } }
    )
    return data ?? null
  } catch {
    return null
  }
}

// ─── Booking submission (unchanged — goes to Next.js API route) ───────────────
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
