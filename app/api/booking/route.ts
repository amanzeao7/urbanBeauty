import { NextRequest, NextResponse } from 'next/server'

// ─── POST /api/booking ────────────────────────────────────────────────────────
// Receives form submissions and can:
//  (a) Forward to Payload CMS as a new "Booking" document, OR
//  (b) Send a notification email via Resend / Nodemailer, OR
//  (c) Both
//
// Currently: saves to Payload + returns 200.
// Swap the PAYLOAD_URL for your live instance when ready.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      firstName, lastName, email, phone,
      treatment, preferredDate, preferredTime, notes,
    } = body

    // Basic server-side validation
    if (!firstName || !lastName || !email || !treatment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // ── Option A: Save to Payload CMS ─────────────────────────────────────
    // Uncomment and configure when Payload is live:
    //
    // const payloadRes = await fetch(`${process.env.PAYLOAD_URL}/api/bookings`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.PAYLOAD_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     firstName, lastName, email, phone,
    //     treatment, preferredDate, preferredTime, notes,
    //     status: 'pending',
    //   }),
    // })
    // if (!payloadRes.ok) throw new Error('Payload save failed')

    // ── Option B: Send email via Resend ────────────────────────────────────
    // Uncomment and install resend package:
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'bookings@urbanbeautysalon.co.uk',
    //   to: 'info@urbanbeautysalon.co.uk',
    //   subject: `New Booking Request — ${firstName} ${lastName}`,
    //   text: `
    //     Name: ${firstName} ${lastName}
    //     Email: ${email}
    //     Phone: ${phone}
    //     Treatment: ${treatment}
    //     Date: ${preferredDate} (${preferredTime})
    //     Notes: ${notes}
    //   `,
    // })

    // ── Placeholder: log to console in dev ────────────────────────────────
    console.log('[Booking Request]', {
      name: `${firstName} ${lastName}`,
      email, phone, treatment,
      preferredDate, preferredTime, notes,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true }, { status: 200 })

  } catch (err) {
    console.error('[Booking API Error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
