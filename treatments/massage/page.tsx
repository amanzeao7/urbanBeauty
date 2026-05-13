import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: 'Massage Therapy Warrington — Swedish, Deep Tissue & Hot Stone | Urban Beauty Salon',
  description: 'Professional massage therapy in Warrington, Cheshire. Swedish full body, deep tissue, hot stone, back massage and more. Expert therapists, deeply relaxing results. Book online.',
  keywords: ['massage Warrington', 'massage therapy Cheshire', 'Swedish massage Warrington', 'deep tissue massage Warrington', 'hot stone massage Cheshire', 'relaxation massage Warrington'],
  openGraph: {
    title: 'Massage Therapy — Urban Beauty Salon Warrington',
    description: 'Swedish, deep tissue, hot stone and more. Expert massage therapy in Warrington, Cheshire.',
  },
}

export default function MassagePage() {
  return (
    <TreatmentCategoryPage
      tag="Massage Therapy"
      heading="Therapeutic"
      headingEm="Massage"
      intro="Total restoration for body and mind. Our expert therapists tailor every massage to exactly what your body needs — whether that's deep muscle relief, total relaxation, or something in between."
      body={[
        "Massage therapy at Urban Beauty Salon is about more than relaxation — it's a genuine therapeutic experience. Our qualified massage therapists take time to understand your needs before every session, adapting pressure, technique and focus areas to deliver exactly the results you're looking for.",
        "From a deeply restorative Swedish full body massage to targeted deep tissue work on problem areas, a warming hot stone treatment, or a quick back, neck and shoulder session in your lunch break — we offer the full range of massage therapies in a beautiful, calm environment.",
        "Regular massage has well-documented benefits for both physical and mental wellbeing. Many of our clients in Warrington and across Cheshire make massage a regular part of their self-care routine, and we make it easy to do so with flexible booking and a welcoming team.",
      ]}
      benefits={[
        'Relieves muscle tension and chronic pain',
        'Reduces stress and anxiety',
        'Improves circulation and lymphatic drainage',
        'Promotes deep sleep and recovery',
        'Increases range of movement and flexibility',
        'Boosts mood and mental wellbeing',
        'Supports immune system function',
      ]}
      services={[
        { name: 'Full Body Massage',                    duration: '55 mins', price: '£58' },
        { name: 'Full Body Massage inc Face & Scalp',   duration: '70 mins', price: '£70' },
        { name: 'Signature Body Treatment',             duration: '80 mins', price: '£83' },
        { name: 'Deep Tissue Back Massage',             duration: '25 mins', price: '£42' },
        { name: 'Back Massage',                         duration: '25 mins', price: '£40' },
        { name: 'Hot Stone Back Massage',               duration: '40 mins', price: '£50' },
        { name: 'Signature Back Treatment',             duration: '40 mins', price: '£50' },
        { name: 'Head Massage',                         duration: '25 mins', price: '£40' },
        { name: 'Foot, Leg & Ankle Massage',            duration: '25 mins', price: '£40' },
        { name: '20min Face, Chest & Scalp Massage',    duration: '20 mins', price: '£39' },
        { name: 'Full Body Exfoliation',                duration: '60 mins', price: '£58' },
        { name: 'Add 25 min Back Massage to any Facial',duration: '25 mins', price: '£30' },
      ]}
      faqs={[
        {
          q: 'What is the difference between Swedish and deep tissue massage?',
          a: 'Swedish massage uses long, flowing strokes and gentle kneading to promote relaxation and improve circulation — it\'s ideal if you want to unwind and de-stress. Deep tissue massage uses firmer pressure to target deeper layers of muscle and connective tissue, and is better suited for chronic tension, injury recovery, or specific areas of tightness.',
        },
        {
          q: 'What is a hot stone massage?',
          a: 'Hot stone massage uses smooth, heated basalt stones placed on key points of the body and used as an extension of the therapist\'s hands. The warmth penetrates deeply into muscle tissue, releasing tension more effectively than hands alone. It\'s deeply relaxing and particularly beneficial in colder months.',
        },
        {
          q: 'Should I talk during my massage?',
          a: 'Entirely up to you. Some clients prefer silence to fully switch off, others enjoy a chat. Your therapist will follow your lead. The most important thing is that you communicate if anything is uncomfortable — pressure, temperature, or focus areas.',
        },
        {
          q: 'How often should I have a massage?',
          a: 'For general wellbeing and stress management, once or twice a month works well for most people. If you\'re dealing with a specific issue like chronic back pain or tension headaches, more frequent sessions initially may be beneficial. Your therapist can advise on what\'s right for you.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/facials', label: 'Facials' },
        { href: '/treatments/caci', label: 'CACI Facelift' },
        { href: '/treatments/body', label: 'Body Treatments' },
      ]}
    />
  )
}
