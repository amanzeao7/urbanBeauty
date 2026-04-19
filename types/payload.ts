// ─── Payload CMS Type Definitions ───────────────────────────────────────────
// These mirror your Payload collections. Update as you add fields.

export interface PayloadMedia {
  id: string
  url: string
  alt: string
  width?: number
  height?: number
}

export interface Service {
  id: string
  number: string           // "01", "02" etc
  name: string
  category: string         // e.g. "Facial" | "Massage" etc
  tagline: string          // short summary shown on card hover
  startingPrice: string    // "£40"
  duration: string         // "60 mins"
  image: PayloadMedia
  bookingLink?: string
  featured?: boolean
}

export interface PricingItem {
  id: string
  name: string
  duration: string
  price: string            // "£55"
  category: 'facial' | 'massage' | 'caci' | 'nails' | 'lash'
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: PayloadMedia
  order: number
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  treatment: string        // "CACI Facelift · Regular Client"
  rating: number
}

export interface SiteSettings {
  id: string
  heroHeadline: string
  heroSubheadline: string
  heroImage: PayloadMedia
  aboutHeading: string
  aboutBody1: string
  aboutBody2: string
  statsYears: string
  statsTreatments: string
  statsRating: string
  reviewsCount: string
  phone: string
  email: string
  address: string
  addressLine2: string
  postcode: string
  hoursWeekday: string
  hoursSaturday: string
  hoursSunday: string
  instagramUrl?: string
  facebookUrl?: string
  tiktokUrl?: string
  bookingUrl?: string      // External booking system URL (Acuity, Square, etc.)
}
