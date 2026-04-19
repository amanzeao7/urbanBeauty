import type { Metadata } from 'next'
import './globals.css'

// ─── SEO & Open Graph ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://www.urbanbeautysalon.co.uk'),
  title: {
    default: 'Urban Beauty Salon — Luxury Beauty Treatments in Warrington, Cheshire',
    template: '%s | Urban Beauty Salon',
  },
  description:
    'Award-winning luxury beauty salon in Warrington, Cheshire. Specialising in CACI non-surgical facelifts, bespoke facials, massage therapy, lash & brow, and nail treatments. Book online today.',
  keywords: [
    'beauty salon Warrington',
    'luxury beauty salon Cheshire',
    'CACI facelift Warrington',
    'facials Warrington',
    'massage therapy Cheshire',
    'lash and brow Warrington',
    'nail salon Warrington',
    'pamper day Cheshire',
    'Urban Beauty Salon',
  ],
  authors: [{ name: 'Urban Beauty Salon' }],
  creator: 'Urban Beauty Salon',
  publisher: 'Urban Beauty Salon',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.urbanbeautysalon.co.uk',
    siteName: 'Urban Beauty Salon',
    title: 'Urban Beauty Salon — Luxury Beauty Treatments in Warrington, Cheshire',
    description:
      'Cheshire\'s premier luxury beauty salon. Expert treatments, exceptional results, crafted entirely for you.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Urban Beauty Salon — Warrington, Cheshire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Beauty Salon — Warrington, Cheshire',
    description: 'Luxury beauty treatments. CACI, facials, massage, lash & brow, nails.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.urbanbeautysalon.co.uk',
  },
}

// ─── Local Business JSON-LD (GEO / Rich Results) ─────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Urban Beauty Salon',
  image: 'https://www.urbanbeautysalon.co.uk/og-image.jpg',
  description:
    'Luxury beauty salon in Warrington, Cheshire offering CACI facelifts, bespoke facials, massage therapy, lash & brow, and nail treatments.',
  url: 'https://www.urbanbeautysalon.co.uk',
  telephone: '+441925726688',
  email: 'info@urbanbeautysalon.co.uk',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Bridge Street',
    addressLocality: 'Warrington',
    addressRegion: 'Cheshire',
    postalCode: 'WA1 2RJ',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.3900,
    longitude: -2.5970,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '10:00', closes: '16:00' },
  ],
  hasMap: 'https://maps.google.com/?q=14+Bridge+Street+Warrington+WA1+2RJ',
  sameAs: [
    'https://www.instagram.com/urbanbeautysalon',
    'https://www.facebook.com/urbanbeautysalon',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Skip to content — WCAG 2.1 AA */}
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
