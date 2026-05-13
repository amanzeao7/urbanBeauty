import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: 'Waxing & Hair Removal Warrington — Threading & Waxing | Urban Beauty Salon',
  description: 'Professional waxing and threading in Warrington, Cheshire. Full leg, bikini, facial, underarm, brow and full face threading. Smooth, long-lasting results. Book online.',
  keywords: ['waxing Warrington', 'hair removal Cheshire', 'threading Warrington', 'leg wax Warrington', 'bikini wax Cheshire', 'eyebrow threading Warrington', 'facial waxing Warrington'],
  openGraph: {
    title: 'Waxing & Hair Removal — Urban Beauty Salon Warrington',
    description: 'Professional waxing and threading in Warrington, Cheshire. Smooth, long-lasting results.',
  },
}

export default function WaxingPage() {
  return (
    <TreatmentCategoryPage
      tag="Hair Removal"
      heading="Waxing &"
      headingEm="Threading"
      intro="Smooth, long-lasting results delivered by experienced therapists. We use premium wax formulations and professional threading techniques for a comfortable experience every time."
      body={[
        "At Urban Beauty Salon, we've perfected the art of hair removal. Our therapists are highly trained and experienced in both strip and hot wax techniques, choosing the most appropriate method for each area to minimise discomfort and maximise results.",
        "Hot wax is used for more sensitive areas such as the face, underarms and bikini line — it grips the hair rather than the skin, making it significantly more comfortable than strip wax. We also offer professional threading, which is ideal for precise brow shaping and facial hair removal.",
        "All our waxing is performed to the highest hygiene standards. We use a fresh applicator for every section and never double-dip, giving you complete peace of mind.",
      ]}
      benefits={[
        'Longer-lasting results than shaving — up to 4 weeks',
        'Hair grows back finer and softer over time',
        'Hot wax for sensitive areas minimises discomfort',
        'Threading for precise, accurate brow shaping',
        'Strict hygiene — no double dipping ever',
        'Suitable for face and body',
      ]}
      services={[
        { name: 'Eyebrow Wax',           duration: '15 mins', price: '£14' },
        { name: 'Lip Strip Wax',         duration: '15 mins', price: '£12' },
        { name: 'Lip Hot Wax',           duration: '15 mins', price: '£15' },
        { name: 'Chin Strip Wax',        duration: '15 mins', price: '£12' },
        { name: 'Chin Hot Wax',          duration: '15 mins', price: '£15' },
        { name: 'Lip & Chin Strip Wax',  duration: '30 mins', price: '£23' },
        { name: 'Lip & Chin Hot Wax',    duration: '30 mins', price: '£28' },
        { name: 'Under Arm Strip Wax',   duration: '15 mins', price: '£18' },
        { name: 'Underarm Hot Wax',      duration: '15 mins', price: '£20' },
        { name: 'Half Leg Wax',          duration: '30 mins', price: '£28' },
        { name: 'Full Leg Wax',          duration: '45 mins', price: '£34' },
        { name: 'Full Arm Wax',          duration: '30 mins', price: '£26' },
        { name: 'Bikini Tidy Hot Wax',   duration: '30 mins', price: '£26' },
        { name: 'Bikini Slim Hot Wax',   duration: '30 mins', price: '£32' },
        { name: 'Intimate Wax',          duration: '45 mins', price: '£40' },
        { name: 'Back Wax (Female)',      duration: '30 mins', price: '£28' },
        { name: 'Back Wax (Male)',        duration: '30 mins', price: '£35' },
        { name: 'Brows Threading',       duration: '15 mins', price: '£16' },
        { name: 'Lip Threading',         duration: '15 mins', price: '£12' },
        { name: 'Chin Threading',        duration: '15 mins', price: '£12' },
        { name: 'Full Face Threading',   duration: '45 mins', price: '£32' },
      ]}
      faqs={[
        {
          q: 'What is the difference between hot wax and strip wax?',
          a: 'Strip wax is applied thinly and removed with a fabric strip — it\'s quick and effective for larger areas like legs and arms. Hot wax is applied thickly and removed without a strip once it sets. It adheres to the hair rather than the skin, making it much more comfortable for sensitive areas like the face, underarms and bikini line.',
        },
        {
          q: 'How long should my hair be before waxing?',
          a: 'For best results, hair should be at least 5mm long — roughly 2–3 weeks of growth after shaving. If it\'s too short the wax won\'t grip properly; too long and it can be more uncomfortable. If you\'re unsure, let it grow for 3 weeks from your last shave.',
        },
        {
          q: 'Is waxing suitable for sensitive skin?',
          a: 'Yes — we have wax formulations specifically designed for sensitive skin. Let us know when you book if you have any skin sensitivities or are using retinol, AHAs or prescription skincare, as these can affect the skin\'s tolerance to waxing.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/lashes', label: 'Lash & Brow' },
        { href: '/treatments/nails', label: 'Nails' },
        { href: '/treatments/tanning', label: 'Tanning' },
      ]}
    />
  )
}
