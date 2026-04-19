import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// ─── POST /api/revalidate ─────────────────────────────────────────────────────
// Sanity calls this webhook whenever content is published.
// Next.js then revalidates the homepage so the new content goes live instantly.
//
// Set this URL in Sanity:
//   Studio → API → Webhooks → Create
//   URL: https://yoursite.vercel.app/api/revalidate
//   Secret: same value as SANITY_WEBHOOK_SECRET in your .env

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    revalidatePath('/')
    revalidatePath('/services')
    revalidatePath('/team')
    console.log('[Revalidate] ✓ Pages revalidated via Sanity webhook')
    return NextResponse.json({ revalidated: true })
  } catch (err) {
    console.error('[Revalidate] ✗ Failed', err)
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
