import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: 'Facials Warrington — Bespoke Facial Treatments | Urban Beauty Salon',
  description: 'Bespoke facial treatments in Warrington, Cheshire. Crystal Clear, COMCIT, dermaplaning, glycolic peels and luxury facials. Every treatment tailored to your skin. Book online.',
  keywords: ['facials Warrington', 'facial treatments Cheshire', 'Crystal Clear facial Warrington', 'dermaplaning Warrington', 'luxury facial Cheshire', 'skin treatments Warrington'],
  openGraph: {
    title: 'Bespoke Facial Treatments — Urban Beauty Salon Warrington',
    description: 'Crystal Clear, COMCIT, dermaplaning and luxury facials in Warrington, Cheshire. Fully tailored to your skin.',
  },
}

export default function FacialsPage() {
  return (
    <TreatmentCategoryPage
      tag="Facial Treatments"
      heading="Bespoke"
      headingEm="Facials"
      intro="Every facial at Urban Beauty begins with a thorough skin consultation. We analyse your skin, understand your concerns, and tailor every product and technique to you — because no two skins are the same."
      body={[
        "Our facial menu spans everything from a quick 30-minute express treatment to advanced Crystal Clear microdermabrasion, COMCIT cryo-oxygen facials, and dermaplaning. Every treatment is performed by trained specialists using professional-grade skincare.",
        "Whether your skin needs deep cleansing, anti-ageing intervention, brightening, or simply a moment of luxury — we have a facial for that. We work with leading skincare brands including Crystal Clear to deliver clinical results in a completely relaxing environment.",
        "Located in the heart of Warrington, Urban Beauty Salon has been the destination of choice for women across Cheshire who take their skincare seriously. Come in for a consultation and we'll build the perfect facial experience for your skin.",
      ]}
      benefits={[
        'Fully tailored to your skin type and concerns',
        'Professional-grade products and equipment',
        'Deep cleansing to remove impurities and unclog pores',
        'Improves skin texture, tone and radiance',
        'Reduces the appearance of fine lines',
        'Relaxing and restorative experience',
        'Expert advice and a personalised skincare routine',
      ]}
      services={[
        { name: 'Crystal Clear Express Facial',          duration: '30 mins', price: '£40' },
        { name: 'Crystal Clear Luxury Facial',           duration: '60 mins', price: '£58' },
        { name: 'Crystal Clear MDA',                     duration: '45 mins', price: '£55', description: 'Microdermabrasion' },
        { name: 'Crystal Clear MDA inc Prime & Peel',    duration: '75 mins', price: '£76' },
        { name: 'Glycolic Peel Facial',                  duration: '45 mins', price: '£55' },
        { name: 'Dermaplaning Luxury',                   duration: '60 mins', price: '£58' },
        { name: 'Dermaplaning & Glycolic Peel',          duration: '75 mins', price: '£78' },
        { name: 'COMCIT Advanced Skin Rejuvenation',     duration: '60 mins', price: '£89' },
        { name: 'COMCIT inc CACI Face Lift',             duration: '90 mins', price: '£107' },
        { name: 'COMCIT inc Microdermabrasion',          duration: '90 mins', price: '£107' },
        { name: 'COMCIT inc Prime & Peel',               duration: '90 mins', price: '£107' },
      ]}
      faqs={[
        {
          q: 'Which facial is right for me?',
          a: 'We always recommend booking a consultation before your first facial so we can assess your skin properly. As a rough guide: Crystal Clear Express is perfect for a quick refresh; Crystal Clear Luxury is our most popular all-round facial; COMCIT is ideal for more advanced concerns like congestion or dullness; and dermaplaning is brilliant for instantly smoother, brighter skin.',
        },
        {
          q: 'How often should I have a facial?',
          a: 'For general skin health and maintenance, once a month is ideal — this aligns with your skin\'s natural renewal cycle. If you\'re targeting a specific concern like breakouts or pigmentation, more frequent treatments may be recommended initially.',
        },
        {
          q: 'What is dermaplaning?',
          a: 'Dermaplaning is a physical exfoliation treatment that uses a sterile surgical blade to remove dead skin cells and vellus hair (peach fuzz) from the surface of the skin. The result is immediately smoother, brighter skin and better product absorption. It\'s suitable for most skin types and there\'s no downtime.',
        },
        {
          q: 'What is COMCIT?',
          a: 'COMCIT (Cryo Oxygen Micro-Channelling Infusion Treatment) is one of the most advanced facial technologies available. It combines cryotherapy, oxygen, and micro-channelling to drive active ingredients deep into the skin. The results are exceptional — firmer, more radiant skin with reduced pores and improved texture.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/caci', label: 'CACI Facelift' },
        { href: '/treatments/aesthetics', label: 'Aesthetics' },
        { href: '/treatments/massage', label: 'Massage' },
      ]}
    />
  )
}
