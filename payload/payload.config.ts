import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { Services } from './collections/Services'
import { Pricing, Team, Testimonials, Bookings } from './collections/Content'

// ─── Vercel Deploy Webhook ────────────────────────────────────────────────────
// Fires after any content change in the CMS, triggering a Vercel rebuild.
// Set VERCEL_DEPLOY_HOOK in your Payload .env to the hook URL from:
//   Vercel Dashboard → Project → Settings → Git → Deploy Hooks
//   Name: "Payload CMS"  Branch: main

const triggerVercelRebuild = async (context: string) => {
  const hookUrl = process.env.VERCEL_DEPLOY_HOOK
  if (!hookUrl) {
    console.warn(`[Webhook] VERCEL_DEPLOY_HOOK not set — skipping rebuild (${context})`)
    return
  }
  try {
    const res = await fetch(hookUrl, { method: 'POST' })
    if (res.ok) {
      console.log(`[Webhook] ✓ Vercel rebuild triggered (${context})`)
    } else {
      console.error(`[Webhook] ✗ Vercel responded ${res.status} (${context})`)
    }
  } catch (err) {
    console.error(`[Webhook] ✗ Failed to reach Vercel (${context})`, err)
  }
}

// Reusable hooks — attach to any content collection
const afterChangeHook: CollectionAfterChangeHook = async ({ collection, operation }) => {
  await triggerVercelRebuild(`${collection.slug} ${operation}`)
}

const afterDeleteHook: CollectionAfterDeleteHook = async ({ collection }) => {
  await triggerVercelRebuild(`${collection.slug} delete`)
}

// Apply to the collections that affect the public website
const withWebhooks = (config: object) => ({
  ...config,
  hooks: {
    afterChange: [afterChangeHook],
    afterDelete: [afterDeleteHook],
  },
})

export default buildConfig({
  // ── Server URL ─────────────────────────────────────────────────────────────
  serverURL: process.env.PAYLOAD_URL ?? 'http://localhost:3001',

  // ── Admin ──────────────────────────────────────────────────────────────────
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— Urban Beauty CMS',
    },
  },

  // ── Collections ────────────────────────────────────────────────────────────
  collections: [
    withWebhooks(Services),
    withWebhooks(Pricing),
    withWebhooks(Team),
    withWebhooks(Testimonials),
    Bookings, // ← No rebuild needed when a booking comes in
    // Built-in Users collection
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email', group: 'System' },
      fields: [
        { name: 'name', type: 'text' },
      ],
    },
    // Media library
    {
      slug: 'media',
      upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
          { name: 'card',    width: 400,  height: 533, position: 'centre' },
          { name: 'hero',    width: 1800, height: 1200, position: 'centre' },
          { name: 'thumb',   width: 300,  height: 300,  position: 'centre' },
        ],
        adminThumbnail: 'thumb',
        mimeTypes: ['image/*'],
      },
      admin: { group: 'System' },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
          label: 'Alt Text',
          admin: {
            description: 'Describe the image for screen readers and SEO. Be specific.',
          },
        },
      ],
    },
  ],

  // ── Editor ─────────────────────────────────────────────────────────────────
  editor: lexicalEditor({}),

  // ── Database ───────────────────────────────────────────────────────────────
  // MongoDB Atlas (free tier works great for this)
  db: mongooseAdapter({
    url: process.env.DATABASE_URI ?? 'mongodb://localhost/urban-beauty',
  }),

  // ── Secret ─────────────────────────────────────────────────────────────────
  secret: process.env.PAYLOAD_SECRET ?? 'change-this-in-production',

  // ── CORS — allow Next.js frontend ─────────────────────────────────────────
  cors: [
    'http://localhost:3000',
    'https://www.urbanbeautysalon.co.uk',
  ],

  // ── TypeScript output ──────────────────────────────────────────────────────
  typescript: {
    outputFile: '../urban-beauty/types/payload-generated.ts',
  },
})
