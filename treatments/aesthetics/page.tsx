import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: 'Aesthetic Treatments Warrington — Anti-Wrinkle Injections | Urban Beauty Salon',
  description: 'Advanced aesthetic treatments in Warrington, Cheshire. Anti-wrinkle injections, Profhilo skin booster, micro-needling and Derma 2 treatments. Book a consultation online.',
  keywords: ['aesthetic treatments Warrington', 'anti-wrinkle injections Cheshire', 'Profhilo Warrington', 'micro-needling Warrington', 'skin booster Cheshire', 'aesthetics Warrington'],
  openGraph: {
    title: 'Aesthetic Treatments — Urban Beauty Salon Warrington',
    description: 'Anti-wrinkle injections, Profhilo, micro-needling and more. Advanced aesthetics in Warrington, Cheshire.',
  },
}

export default function AestheticsPage() {
  return (
    <TreatmentCategoryPage
      tag="Advanced Aesthetics"
      heading="Aesthetic"
      headingEm="Treatments"
      intro="Advanced aesthetic treatments delivered by qualified professionals in a safe, clinical environment. Natural-looking results that enhance your features and restore confidence."
      body={[
        "Our aesthetics treatments are performed by fully qualified and insured practitioners who take a thorough, patient-centred approach to every consultation. We never rush — understanding your goals and ensuring you're fully informed is just as important as the treatment itself.",
        "From anti-wrinkle injections targeting specific expression lines to full-face skin rejuvenation with Profhilo, we offer a curated selection of the most effective aesthetic treatments available. All treatments begin with a detailed consultation to assess suitability.",
        "We believe in results that look natural — the goal is always to enhance, refresh and restore, never to change. Our practitioners work with precision to achieve results that leave you looking like yourself, just at your very best.",
      ]}
      benefits={[
        'Administered by qualified, insured practitioners',
        'Full consultation included with every treatment',
        'Natural-looking results every time',
        'Clinical-grade products and protocols',
        'Visible improvement in skin quality and tone',
        'Minimal downtime for most treatments',
      ]}
      services={[
        { name: 'Consultation — Advanced Treatments',         duration: '30 mins', price: '£5',   description: 'Redeemable against treatment' },
        { name: 'Anti-Wrinkle Injections — 1 Area',          duration: '45 mins', price: '£120' },
        { name: 'Anti-Wrinkle Injections — 2 Areas',         duration: '45 mins', price: '£150' },
        { name: 'Anti-Wrinkle Injections — 3 Areas',         duration: '45 mins', price: '£180' },
        { name: 'Profhilo Skin Booster Treatment',           duration: '45 mins', price: '£200' },
        { name: 'Derma 2 Eye Rejuvenation Treatment',        duration: '45 mins', price: '£99'  },
        { name: 'Derma 2 Skin Booster Micro-needling Facial',duration: '60 mins', price: '£120' },
      ]}
      faqs={[
        {
          q: 'Do I need a consultation before aesthetic treatments?',
          a: 'Yes — a consultation is required before all aesthetic treatments. This allows our practitioner to assess your suitability, discuss your goals, review your medical history, and ensure you have realistic expectations. The consultation fee is £5 and is redeemable against your treatment.',
        },
        {
          q: 'How long do anti-wrinkle injections last?',
          a: 'Anti-wrinkle injections typically last 3–4 months before a top-up is needed. With regular treatment over time, results can last longer as the muscles become trained to relax.',
        },
        {
          q: 'What is Profhilo?',
          a: 'Profhilo is an injectable hyaluronic acid skin booster — not a filler. It\'s injected at specific points to spread through the tissue and stimulate collagen and elastin production. The result is visibly improved skin quality, hydration and firmness across the entire face. It\'s one of the most popular skin boosters available.',
        },
        {
          q: 'Is there downtime after aesthetic treatments?',
          a: 'Anti-wrinkle injections and Profhilo may cause minor redness, swelling or bruising at injection sites for 24–48 hours. Micro-needling treatments may cause some redness for 1–2 days. We\'ll give you full aftercare instructions after your treatment.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/caci', label: 'CACI Facelift' },
        { href: '/treatments/facials', label: 'Facials' },
        { href: '/treatments/massage', label: 'Massage' },
      ]}
    />
  )
}
