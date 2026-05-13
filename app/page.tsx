import Nav             from './components/Nav'
import RevealObserver  from './components/RevealObserver'
import Hero            from './components/Hero'
import Ticker          from './components/Ticker'
import About           from './components/About'
import Services        from './components/Services'
import Featured        from './components/Featured'
import Reviews         from './components/Reviews'
import Pricing         from './components/Pricing'
import Team            from './components/Team'
import GiftVoucher     from './components/GiftVoucher'
import BookingForm     from './components/BookingForm'
import Footer          from './components/Footer'
import MobileBookBar   from './components/MobileBookBar'

import {
  getServices,
  getPricing,
  getTeam,
  getTestimonials,
  getSiteSettings,
} from '@/lib/sanity'

import {
  PLACEHOLDER_SETTINGS,
  PLACEHOLDER_SERVICES,
  PLACEHOLDER_PRICING,
  PLACEHOLDER_TEAM,
  PLACEHOLDER_TESTIMONIALS,
} from '@/lib/placeholder-data'

// ─── Data fetching with graceful fallback ─────────────────────────────────────
// If Payload isn't connected yet, placeholder data is used.
// Remove the try/catch wrappers once Payload is live.

async function getData() {
  const [settings, services, pricing, team, testimonials] = await Promise.all([
    getSiteSettings().catch(() => null),
    getServices().catch(() => []),
    getPricing().catch(() => []),
    getTeam().catch(() => []),
    getTestimonials().catch(() => []),
  ])

  return {
    settings:     settings     ?? PLACEHOLDER_SETTINGS,
    services:     services.length     ? services     : PLACEHOLDER_SERVICES,
    pricing:      pricing.length      ? pricing      : PLACEHOLDER_PRICING,
    team:         team.length         ? team         : PLACEHOLDER_TEAM,
    testimonials: testimonials.length ? testimonials : PLACEHOLDER_TESTIMONIALS,
  }
}

export default async function HomePage() {
  const { settings, services, pricing, team, testimonials } = await getData()

  return (
    <>
      {/* Client-side enhancements */}
      <CustomCursor />
      <RevealObserver />
      <MobileBookBar />

      {/* Navigation */}
      <Nav />

      {/* Main content */}
      <main>
        <Hero            settings={settings} />
        <Ticker />
        <About           settings={settings} />
        <Services        services={services} />
        <Featured />
        <Reviews         testimonials={testimonials} reviewsCount={settings.reviewsCount} />
        <Pricing         pricing={pricing} />
        <Team            team={team} />
        <GiftVoucher />
        <BookingForm     settings={settings} />
      </main>

      <Footer settings={settings} />
    </>
  )
}
