// ─── Tanning ──────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: 'Spray Tanning Warrington — Sienna X | Urban Beauty Salon',
  description: 'Professional Sienna X spray tans in Warrington, Cheshire. Natural, streak-free results every time. Full and half body spray tan available. Book online.',
  keywords: ['spray tan Warrington', 'Sienna X Cheshire', 'spray tanning Warrington', 'fake tan Cheshire'],
  openGraph: {
    title: 'Spray Tanning — Urban Beauty Salon Warrington',
    description: 'Professional Sienna X spray tans in Warrington, Cheshire.',
  },
}

export default function TanningPage() {
  return (
    <TreatmentCategoryPage
      tag="Tanning"
      heading="Sienna X"
      headingEm="Spray Tan"
      intro="A professional, natural-looking tan applied by our trained technicians. No streaks, no orange — just a beautiful, sun-kissed glow that lasts."
      body={[
        "We use Sienna X, the UK's leading professional spray tan brand, trusted by salons and celebrities alike. Our trained therapists apply your tan using a fine mist gun for even, streak-free coverage that develops into a natural bronze colour.",
        "Whether you're preparing for a holiday, a special occasion, or just want a confidence boost, a professional spray tan delivers results that self-tan products simply can't match. We offer a full body tan or a half body option for a more targeted approach.",
        "For best results, we recommend exfoliating and shaving 24 hours before your appointment and arriving in loose, dark clothing. We'll advise on aftercare to help your tan last as long as possible.",
      ]}
      benefits={[
        'Natural, streak-free results',
        'Sienna X professional formula',
        'Customisable depth of colour',
        'Lasts up to 10 days with proper care',
        'No orange tones — genuinely natural-looking',
        'Quick 15-minute appointment',
      ]}
      services={[
        { name: 'Sienna X Full Body Spray Tan', duration: '15 mins', price: '£29' },
        { name: 'Half Body Spray Tan',          duration: '15 mins', price: '£21' },
      ]}
      faqs={[
        {
          q: 'How should I prepare for a spray tan?',
          a: 'Exfoliate and shave or wax 24 hours before your appointment. Avoid moisturiser, deodorant and perfume on the day. Arrive in loose, dark clothing and remove jewellery beforehand.',
        },
        {
          q: 'How long does a spray tan last?',
          a: 'With proper aftercare, a Sienna X spray tan lasts 7–10 days. Moisturising daily and patting rather than rubbing when drying will help extend your tan.',
        },
        {
          q: 'When can I shower after my spray tan?',
          a: 'We\'ll advise on your specific development time based on the shade you choose — typically 4–8 hours. Rinse with cool water and pat dry gently.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/waxing', label: 'Hair Removal' },
        { href: '/treatments/nails', label: 'Nails' },
        { href: '/treatments/massage', label: 'Massage' },
      ]}
    />
  )
}
