import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: 'Nail Treatments Warrington — Gel, Acrylic, BIAB & Manicures | Urban Beauty Salon',
  description: 'Professional nail treatments in Warrington, Cheshire. Shellac, Gelish, BIAB, acrylic, manicures and pedicures. Long-lasting results with immaculate finish. Book online.',
  keywords: ['nail salon Warrington', 'gel nails Warrington', 'acrylic nails Cheshire', 'BIAB nails Warrington', 'manicure Warrington', 'pedicure Cheshire', 'Shellac nails Warrington'],
  openGraph: {
    title: 'Nail Treatments — Urban Beauty Salon Warrington',
    description: 'Shellac, BIAB, acrylic, manicures and pedicures in Warrington, Cheshire. Immaculate finish every time.',
  },
}

export default function NailsPage() {
  return (
    <TreatmentCategoryPage
      tag="Nail Treatments"
      heading="Nails &"
      headingEm="Manicures"
      intro="From a classic manicure to full acrylic enhancements — our nail technicians deliver immaculate, long-lasting results with meticulous attention to detail every single time."
      body={[
        "At Urban Beauty Salon, our nail technicians are passionate about precision. Whether you're after a simple file and polish for a clean, polished look, or a full set of acrylic or BIAB enhancements, we use only premium products to ensure your nails look and feel exceptional.",
        "We offer the full range of nail services for both hands and feet — Shellac, Gelish, BIAB (Builder in a Bottle), Bio Sculpture, Acrygel, and traditional acrylics. Not sure which system is right for you? We'll assess your nails and lifestyle and recommend the best option.",
        "Our pedicure menu is equally comprehensive, including a luxurious deluxe pedicure that leaves feet feeling completely renewed. All our nail treatments are carried out in a clean, relaxed environment with strict hygiene standards.",
      ]}
      benefits={[
        'Long-lasting results — up to 3 weeks without chipping',
        'Strengthens and protects natural nails',
        'Wide range of colours and finishes',
        'Suitable for short or damaged nails',
        'Immaculate, precise application every time',
        'Premium professional products throughout',
      ]}
      services={[
        { name: 'File & Polish',                              duration: '30 mins', price: '£20' },
        { name: 'Manicure',                                   duration: '45 mins', price: '£29' },
        { name: 'Deluxe Manicure',                            duration: '60 mins', price: '£38' },
        { name: 'Shellac/Gel Manicure (No Soak Off)',         duration: '45 mins', price: '£31' },
        { name: 'Shellac/Gel Manicure (With Soak Off)',       duration: '60 mins', price: '£34' },
        { name: 'BIAB Manicure with Shellac/Gel',             duration: '60 mins', price: '£40' },
        { name: 'BIAB Manicure with Shellac/Gel (Soak Off)',  duration: '90 mins', price: '£46' },
        { name: 'BIAB Natural Nail Overlay',                  duration: '75 mins', price: '£38' },
        { name: 'BIAB Infill with Shellac/Gel',               duration: '90 mins', price: '£43' },
        { name: 'Acrylic Full Set With Tips + Gel Finish',    duration: '90 mins', price: '£47' },
        { name: 'Acrylic Infill With Shellac/Gel',            duration: '90 mins', price: '£43' },
        { name: 'Acrygel Nail Enhancements',                  duration: '90 mins', price: '£47' },
        { name: 'Acrygel Infill (2–3 weeks)',                 duration: '90 mins', price: '£43' },
        { name: 'Pedicure',                                   duration: '60 mins', price: '£40' },
        { name: 'Deluxe Pedicure',                            duration: '75 mins', price: '£48' },
        { name: 'Shellac/Gel Toes (With Soak Off)',           duration: '45 mins', price: '£34' },
        { name: 'Add Nail Art',                               duration: '15 mins', price: '£12' },
      ]}
      faqs={[
        {
          q: 'What is BIAB and is it better than gel?',
          a: 'BIAB (Builder in a Bottle) is a thick gel product that acts as both an overlay and colour. It\'s applied like gel polish but gives the strength of a builder gel, making it ideal for clients with weak or brittle nails. It tends to be more flexible than acrylic and causes less damage to the natural nail. For most clients with natural nails, BIAB is our preferred recommendation.',
        },
        {
          q: 'How long will gel/Shellac nails last?',
          a: 'Shellac and gel manicures typically last 2–3 weeks without chipping. How long they last depends on your lifestyle and how quickly your nails grow. We recommend booking an infill or soak-off around the 3-week mark.',
        },
        {
          q: 'Do acrylics damage natural nails?',
          a: 'When applied and removed correctly by a trained technician, acrylics should not cause significant damage. The key is professional removal — never pick or peel off enhancements at home. We\'re always happy to advise on the safest approach for your nails.',
        },
        {
          q: 'Can I get nail art added to any treatment?',
          a: 'Yes — we offer nail art as an add-on to any nail treatment. Let us know what you have in mind when you book.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/lashes', label: 'Lash & Brow' },
        { href: '/treatments/waxing', label: 'Hair Removal' },
        { href: '/treatments/facials', label: 'Facials' },
      ]}
    />
  )
}
