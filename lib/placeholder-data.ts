import type { Service, PricingItem, TeamMember, Testimonial, SiteSettings } from '@/types/payload'

// ─── Used during development / when Payload isn't connected ──────────────────
// Replace image src values with your Payload media URLs in production.

export const PLACEHOLDER_SETTINGS: SiteSettings = {
  id: '1',
  heroHeadline: 'Where beauty becomes ritual',
  heroSubheadline:
    "Advanced treatments, expert hands, and an atmosphere of complete calm. Urban Beauty is Cheshire's destination for those who expect exceptional.",
  heroImage: {
    id: '1',
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&auto=format&fit=crop&q=80',
    alt: 'Urban Beauty Salon interior — luxury treatment rooms in Warrington, Cheshire',
  },
  aboutHeading: 'A sanctuary crafted for you',
  aboutBody1:
    'Founded in the heart of Warrington, Urban Beauty Salon was built on a single belief: every person deserves to feel genuinely exceptional. Our expert therapists bring specialist training and genuine passion to every treatment.',
  aboutBody2:
    'From our signature CACI non-surgical facelift to bespoke facials and therapeutic massage — every experience is tailored entirely to you.',
  statsYears: '12+',
  statsTreatments: '30+',
  statsRating: '5★',
  reviewsCount: '200+',
  phone: '01925 726 688',
  email: 'info@urbanbeautysalon.co.uk',
  address: '14 Bridge Street',
  addressLine2: 'Warrington, Cheshire',
  postcode: 'WA1 2RJ',
  hoursWeekday: 'Mon – Fri · 9am – 7pm',
  hoursSaturday: 'Saturday · 9am – 6pm',
  hoursSunday: 'Sunday · 10am – 4pm',
  instagramUrl: '#',
  facebookUrl: '#',
  tiktokUrl: '#',
}

export const PLACEHOLDER_SERVICES: Service[] = [
  {
    id: '1', number: '01', name: 'CACI Non-Surgical Facelift',
    category: 'CACI', tagline: 'Microcurrent technology that lifts and tones. Visible results from your very first session.',
    startingPrice: '£55', duration: '60 mins',
    image: { id: '1', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&auto=format&fit=crop&q=80', alt: 'CACI Facelift treatment' },
  },
  {
    id: '2', number: '02', name: 'Bespoke Facials',
    category: 'Facials', tagline: 'Fully tailored to your skin. Every treatment begins with a personal consultation.',
    startingPrice: '£40', duration: '60 mins',
    image: { id: '2', url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=700&auto=format&fit=crop&q=80', alt: 'Bespoke facial treatment' },
  },
  {
    id: '3', number: '03', name: 'Massage Therapy',
    category: 'Massage', tagline: 'Swedish, deep tissue, hot stone. Total restoration built around what your body needs.',
    startingPrice: '£45', duration: '60 mins',
    image: { id: '3', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&auto=format&fit=crop&q=80', alt: 'Massage therapy' },
  },
  {
    id: '4', number: '04', name: 'Lash & Brow Artistry',
    category: 'Lash & Brow', tagline: 'Extensions, lifts, tints, and HD brows. Precision work that frames your face beautifully.',
    startingPrice: '£18', duration: '20 mins',
    image: { id: '4', url: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=700&auto=format&fit=crop&q=80', alt: 'Lash and brow artistry' },
  },
  {
    id: '5', number: '05', name: 'Nails & Gelish',
    category: 'Nails', tagline: 'Manicures, pedicures, Shellac and Gelish. Long-lasting results with meticulous finish.',
    startingPrice: '£22', duration: '45 mins',
    image: { id: '5', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&auto=format&fit=crop&q=80', alt: 'Nail and Gelish treatment' },
  },
  {
    id: '6', number: '06', name: 'Pamper Packages',
    category: 'Packages', tagline: 'Curated half and full-day escapes combining our most loved treatments.',
    startingPrice: '£85', duration: 'Half day',
    image: { id: '6', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&auto=format&fit=crop&q=80', alt: 'Pamper day package' },
  },
]

export const PLACEHOLDER_PRICING: PricingItem[] = [
  // Facials
  { id: 'f1', name: 'Express Facial', duration: '30 mins', price: '£40', category: 'facial' },
  { id: 'f2', name: 'Deep Cleanse Facial', duration: '60 mins', price: '£55', category: 'facial' },
  { id: 'f3', name: 'Anti-Ageing Facial', duration: '60 mins', price: '£60', category: 'facial' },
  { id: 'f4', name: 'Luxury Facial', duration: '90 mins', price: '£75', category: 'facial' },
  { id: 'f5', name: 'Pregnancy Facial', duration: '60 mins', price: '£55', category: 'facial' },
  { id: 'f6', name: 'Back Facial', duration: '45 mins', price: '£48', category: 'facial' },
  // Massage
  { id: 'm1', name: 'Swedish Full Body', duration: '60 mins', price: '£48', category: 'massage' },
  { id: 'm2', name: 'Deep Tissue', duration: '60 mins', price: '£55', category: 'massage' },
  { id: 'm3', name: 'Hot Stone Massage', duration: '75 mins', price: '£65', category: 'massage' },
  { id: 'm4', name: 'Back, Neck & Shoulder', duration: '30 mins', price: '£32', category: 'massage' },
  // CACI
  { id: 'c1', name: 'CACI Single Session', duration: '60 mins', price: '£55', category: 'caci' },
  { id: 'c2', name: 'CACI Course of 5', duration: '5 × 60 mins', price: '£250', category: 'caci' },
  { id: 'c3', name: 'CACI Course of 10', duration: '10 × 60 mins', price: '£480', category: 'caci' },
  { id: 'c4', name: 'CACI Eye & Lip', duration: '30 mins', price: '£38', category: 'caci' },
  // Nails
  { id: 'n1', name: 'Classic Manicure', duration: '45 mins', price: '£25', category: 'nails' },
  { id: 'n2', name: 'Classic Pedicure', duration: '60 mins', price: '£32', category: 'nails' },
  { id: 'n3', name: 'Gelish Manicure', duration: '60 mins', price: '£35', category: 'nails' },
  { id: 'n4', name: 'Gelish Pedicure', duration: '75 mins', price: '£42', category: 'nails' },
  // Lash & Brow
  { id: 'l1', name: 'Lash Tint', duration: '20 mins', price: '£18', category: 'lash' },
  { id: 'l2', name: 'Lash Lift & Tint', duration: '60 mins', price: '£48', category: 'lash' },
  { id: 'l3', name: 'HD Brows', duration: '45 mins', price: '£38', category: 'lash' },
  { id: 'l4', name: 'Brow Lamination', duration: '60 mins', price: '£42', category: 'lash' },
]

export const PLACEHOLDER_TEAM: TeamMember[] = [
  {
    id: '1', name: 'Claire Ashton', role: 'Senior Therapist & CACI Specialist', order: 1,
    bio: '12 years of experience in advanced skin treatments. Claire\'s CACI results speak for themselves.',
    photo: { id: '1', url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=80', alt: 'Claire Ashton — Senior Therapist' },
  },
  {
    id: '2', name: 'Jade Whitmore', role: 'Lash & Brow Artist', order: 2,
    bio: 'Precision and artistry in every appointment. Jade creates stunning, natural-looking results.',
    photo: { id: '2', url: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&auto=format&fit=crop&q=80', alt: 'Jade Whitmore — Lash & Brow Artist' },
  },
  {
    id: '3', name: 'Rachel Dyne', role: 'Massage Therapist', order: 3,
    bio: 'Specialising in Swedish, deep tissue, and hot stone massage. Every session is restorative.',
    photo: { id: '3', url: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&auto=format&fit=crop&q=80', alt: 'Rachel Dyne — Massage Therapist' },
  },
  {
    id: '4', name: 'Sophie Hale', role: 'Nail Technician', order: 4,
    bio: 'Gelish, Shellac, and classic nail artistry with immaculate attention to finish and longevity.',
    photo: { id: '4', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80', alt: 'Sophie Hale — Nail Technician' },
  },
]

export const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    id: '1', rating: 5, author: 'Sarah M.',
    treatment: 'CACI Facelift · Regular Client',
    quote: 'I\'ve been coming to Urban Beauty for three years and genuinely wouldn\'t go anywhere else. The CACI treatments have completely transformed my skin.',
  },
  {
    id: '2', rating: 5, author: 'Emma T.',
    treatment: 'Pamper Day · Birthday Treat',
    quote: 'Booked a pamper day for my birthday and it was perfect from start to finish. Professional, deeply relaxing, and the results were incredible.',
  },
  {
    id: '3', rating: 5, author: 'Louise K.',
    treatment: 'Bespoke Facial · Monthly Visit',
    quote: 'The team genuinely care about your skin and your wellbeing. I always leave feeling like a completely different person.',
  },
]
