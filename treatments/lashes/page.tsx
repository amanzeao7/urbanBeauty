import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: 'Lash & Brow Treatments Warrington — LVL, Lamination, Tints | Urban Beauty Salon',
  description: 'Lash and brow treatments in Warrington, Cheshire. LVL lash lifts, brow lamination, lash tints, HD brows and semi-permanent eyebrows. Precision artistry every time. Book online.',
  keywords: ['lash lift Warrington', 'brow lamination Cheshire', 'LVL Warrington', 'eyelash tint Warrington', 'HD brows Cheshire', 'semi-permanent brows Warrington', 'lash treatments Warrington'],
  openGraph: {
    title: 'Lash & Brow Treatments — Urban Beauty Salon Warrington',
    description: 'LVL lash lifts, brow lamination, tints and semi-permanent brows in Warrington, Cheshire.',
  },
}

export default function LashesPage() {
  return (
    <TreatmentCategoryPage
      tag="Eyes, Lashes & Brows"
      heading="Lash & Brow"
      headingEm="Artistry"
      intro="Precision work that frames your face beautifully. From a simple tint to a full LVL lift and brow lamination package — our lash and brow specialists create stunning, natural-looking results."
      body={[
        "Your eyes are the first thing people notice. At Urban Beauty Salon, our lash and brow specialists take a meticulous, artistic approach to every treatment — whether that's a quick eyebrow tint or a full LVL lash lift combined with brow lamination.",
        "LVL (Length, Volume and Lift) is one of our most popular treatments. Unlike lash extensions, LVL works with your natural lashes — lifting them from the root for a wide-eyed, mascara effect that lasts 6–8 weeks with absolutely no maintenance required.",
        "Brow lamination is the treatment responsible for those perfectly sleek, brushed-up brows you see everywhere. We use professional-grade products to restructure the brow hairs, giving you full control over shape and direction that lasts up to 8 weeks. Combined with a tint, the results are genuinely transformative.",
      ]}
      benefits={[
        'Enhances your natural features without extensions',
        'Low maintenance — no daily effort required',
        'Results last 6–8 weeks',
        'LVL creates a wide-eyed, lifted appearance',
        'Brow lamination gives full, defined, on-trend brows',
        'Tints add depth and definition',
        'Suitable for sparse or unruly brows and lashes',
      ]}
      services={[
        { name: 'LVL — Length Volume & Lift',     duration: '75 mins',  price: '£57' },
        { name: 'Brow Lamination',                duration: '60 mins',  price: '£43' },
        { name: 'LVL & Brow Lamination Package',  duration: '120 mins', price: '£88', description: 'Save £12' },
        { name: 'Eyelash Tint',                   duration: '15 mins',  price: '£18' },
        { name: 'Eyebrow Tint',                   duration: '15 mins',  price: '£14' },
        { name: 'Eyebrow Wax & Tint',             duration: '30 mins',  price: '£27' },
        { name: 'Eye Package',                    duration: '30 mins',  price: '£36', description: 'Lash tint + brow tint + wax' },
        { name: 'Express Lashes',                 duration: '45 mins',  price: '£55' },
        { name: 'Express Lashes inc Soak Off',    duration: '60 mins',  price: '£60' },
        { name: 'Lash Removal',                   duration: '30 mins',  price: '£16' },
        { name: 'Semi-Permanent Eyebrows',        duration: '150 mins', price: '£220' },
        { name: 'Semi-Permanent Brows Annual Top Up', duration: '150 mins', price: '£180' },
      ]}
      faqs={[
        {
          q: 'What is the difference between LVL and lash extensions?',
          a: 'Lash extensions add synthetic fibres to your natural lashes for length and volume. LVL (Length Volume & Lift) works differently — it lifts and tints your own natural lashes, creating the appearance of longer, darker, more defined lashes. LVL requires zero maintenance and is generally safer for lash health over time.',
        },
        {
          q: 'How long does brow lamination last?',
          a: 'Brow lamination typically lasts 6–8 weeks. During this time you can brush your brows into your preferred shape each day. We\'d recommend avoiding getting the brows wet for 24 hours after treatment.',
        },
        {
          q: 'Can I have LVL if I have short lashes?',
          a: 'LVL works best on natural lashes of at least 4–5mm in length. We\'ll assess your lashes during a consultation and let you know if LVL is suitable, or recommend an alternative if not.',
        },
        {
          q: 'What are semi-permanent eyebrows?',
          a: 'Semi-permanent eyebrows (also known as microblading or powder brows) use pigment deposited into the upper layers of skin to create the appearance of fuller, more defined brows. Results last 12–18 months before a top-up is needed. We offer a full consultation before treatment to design the ideal brow shape for your face.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/nails', label: 'Nails' },
        { href: '/treatments/waxing', label: 'Hair Removal' },
        { href: '/treatments/facials', label: 'Facials' },
      ]}
    />
  )
}
