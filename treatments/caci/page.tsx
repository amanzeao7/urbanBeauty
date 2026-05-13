import type { Metadata } from 'next'
import TreatmentCategoryPage from '../_components/TreatmentCategoryPage'

export const metadata: Metadata = {
  title: 'CACI Non-Surgical Facelift Warrington — Urban Beauty Salon',
  description: 'CACI non-surgical facelift treatments in Warrington, Cheshire. Clinically proven microcurrent technology that lifts, tones and rejuvenates. Visible results from your first session. Book online.',
  keywords: ['CACI Warrington', 'CACI facelift Cheshire', 'non-surgical facelift Warrington', 'microcurrent facial Warrington', 'CACI treatment Cheshire'],
  openGraph: {
    title: 'CACI Non-Surgical Facelift — Urban Beauty Salon Warrington',
    description: 'Clinically proven microcurrent technology. Lift, tone and rejuvenate without needles or downtime. Warrington, Cheshire.',
  },
}

export default function CACIPage() {
  return (
    <TreatmentCategoryPage
      tag="CACI Treatments"
      heading="CACI Non-Surgical"
      headingEm="Facelift"
      intro="The celebrity treatment of choice. Clinically proven microcurrent technology that lifts, tones and rejuvenates — delivering visible results without a single needle or day of downtime."
      body={[
        "CACI (Computer Aided Cosmetology Instrument) is the gold standard in non-surgical facial treatments. Used by celebrities and skincare professionals worldwide, it uses sub-sensory electrical impulses that mirror the body's own bio-electrical field to re-educate and firm ageing muscles.",
        "At Urban Beauty Salon in Warrington, our CACI specialists have years of experience delivering transformative results. Whether you're looking for a one-off treatment before a special occasion or a course for cumulative, lasting change — we'll create a programme entirely tailored to your skin and your goals.",
        "Most clients see visible lifting and toning after their very first session. A recommended course of 10 treatments delivers the most significant and long-lasting results, with monthly maintenance sessions to sustain them.",
      ]}
      benefits={[
        'Clinically proven to lift and contour facial muscles',
        'Visible results after your very first session',
        'Suitable for all skin types and tones',
        'Zero downtime — return to your day immediately',
        'Reduces the appearance of fine lines and wrinkles',
        'Improves skin hydration and overall skin health',
        'Courses available for cumulative, lasting results',
        'Completely non-invasive and pain-free',
      ]}
      services={[
        { name: 'CACI Non-Surgical Face Lift',                      duration: '75 mins', price: '£57' },
        { name: 'CACI Non-Surgical Eye Lift',                       duration: '45 mins', price: '£48' },
        { name: 'CACI Ultimate Anti-Ageing Facial',                 duration: '90 mins', price: '£84' },
        { name: 'CACI Jowl Lift Express Facial',                    duration: '30 mins', price: '£40' },
        { name: 'CACI Ultimate Micro Dermabrasion',                 duration: '30 mins', price: '£42' },
        { name: 'CACI Ultimate Microdermabrasion & Hydratone Mask', duration: '45 mins', price: '£57' },
        { name: 'CACI Bum Lift',                                    duration: '45 mins', price: '£40' },
        { name: 'Course of 5 Sessions',                             duration: '5 × 75 mins', price: '£265', description: 'Save £20' },
        { name: 'Course of 10 Sessions',                            duration: '10 × 75 mins', price: '£510', description: 'Save £60' },
      ]}
      faqs={[
        {
          q: 'How many CACI sessions will I need?',
          a: 'For visible lifting and firming results, we recommend a course of 10 treatments taken twice a week. Many clients see an improvement after just one session, but the cumulative effect of a full course is significantly more dramatic and longer-lasting. Monthly maintenance sessions are then recommended.',
        },
        {
          q: 'Is CACI painful?',
          a: 'No — CACI is completely comfortable. The electrical impulses used are sub-sensory, meaning most clients feel nothing at all, or a very mild tingling sensation. It\'s often described as one of the most relaxing treatments we offer.',
        },
        {
          q: 'How long do CACI results last?',
          a: 'Results from a full course of 10 treatments can last several months. To maintain results long-term, we recommend monthly top-up sessions. Think of it like going to the gym — regular sessions keep the muscles toned.',
        },
        {
          q: 'Who is CACI suitable for?',
          a: 'CACI is suitable for most adults looking to improve skin tone, reduce signs of ageing, or maintain a youthful appearance. It\'s ideal for anyone who wants non-surgical results. We\'ll assess your suitability during a full consultation before your first treatment.',
        },
        {
          q: 'Can I have CACI before a special occasion?',
          a: 'Absolutely — CACI is a popular pre-event treatment because results are immediate and there\'s no redness or recovery time. Book your session 2–3 days before your event for the best results.',
        },
      ]}
      relatedLinks={[
        { href: '/treatments/facials', label: 'Bespoke Facials' },
        { href: '/treatments/aesthetics', label: 'Aesthetics' },
        { href: '/treatments/massage', label: 'Massage' },
      ]}
    />
  )
}
