import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: "Men's Grooming Treatments Warrington | Urban Beauty Salon",
  description: "Men's grooming treatments in Warrington, Cheshire. Gentleman's manicure, pedicure, waxing and more. Professional results in a welcoming environment. Book online.",
  keywords: ["men's grooming Warrington", "gentleman's manicure Cheshire", "men's waxing Warrington", "male grooming Cheshire", "men's treatments Warrington"],
  openGraph: {
    title: "Men's Treatments — Urban Beauty Salon Warrington",
    description: "Professional grooming treatments for men in Warrington, Cheshire.",
  },
}

export default function MenPage() {
  return (
    <TreatmentCategoryPage
      tag="Men's Treatments"
      heading="Grooming for"
      headingEm="Gentlemen"
      intro="A growing number of men across Warrington and Cheshire trust Urban Beauty for their grooming. Professional treatments in a welcoming, unpretentious environment — no judgement, just results."
      body={[
        "Men's grooming has come a long way. At Urban Beauty Salon, we welcome male clients and offer a range of treatments specifically suited to men — from the Gentleman's Manicure and Pedicure to chest and back waxing, and brow grooming.",
        "Our therapists are experienced in treating male clients and will put you at ease throughout. Whether you're new to professional grooming or a regular, the experience is exactly the same as for any other client — relaxed, professional, and focused entirely on the result.",
      ]}
      benefits={[
        'Treatments specifically tailored for men',
        'Experienced, professional therapists',
        'Welcoming, unpretentious environment',
        'Grooming that makes a genuine difference',
      ]}
      services={[
        { name: "Gentleman's Manicure",   duration: '30 mins', price: '£24' },
        { name: "Gentleman's Pedicure",   duration: '45 mins', price: '£38' },
        { name: "Men's Chest Wax",        duration: '30 mins', price: '£29' },
        { name: "Men's Back Wax",         duration: '30 mins', price: '£35' },
        { name: "Men's Chest & Back Wax", duration: '60 mins', price: '£58' },
        { name: "Men's Brow Wax",         duration: '15 mins', price: '£14' },
      ]}
      faqs={[
        {
          q: 'Is Urban Beauty just for women?',
          a: 'Absolutely not — we welcome everyone. A growing number of our regular clients are men, and we treat every client with the same level of professionalism and care.',
        },
        {
          q: 'Is chest waxing very painful?',
          a: 'It can be a little uncomfortable, especially for first-timers, but our therapists work quickly and efficiently to minimise any discomfort. Most clients find it much more manageable than they expected.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/massage', label: 'Massage' },
        { href: '/treatments/facials', label: 'Facials' },
        { href: '/treatments/waxing', label: 'Hair Removal' },
      ]}
    />
  )
}
