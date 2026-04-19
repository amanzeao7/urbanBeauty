import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── Image optimisation ─────────────────────────────────────────────────────
  images: {
    remotePatterns: [
      // Unsplash placeholder images
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Your Payload CMS media host — update to your Railway/Render URL
      {
        protocol: 'https',
        hostname: 'your-payload-host.railway.app',
      },
      // If self-hosting media on S3 / Cloudflare R2
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // ── Environment variable validation ────────────────────────────────────────
  // These are checked at build time so missing vars fail loudly.
  env: {
    PAYLOAD_URL: process.env.PAYLOAD_URL ?? '',
  },

  // ── Headers: security + performance ───────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',     value: 'nosniff'   },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
