# Urban Beauty — Next.js + Payload CMS

Premium beauty salon website built with Next.js 15 (App Router), Payload CMS, and deployed on Vercel.

---

## Stack

| Layer     | Tech                              |
|-----------|-----------------------------------|
| Frontend  | Next.js 15 (App Router, RSC)      |
| CMS       | Payload CMS 3.x                   |
| Database  | MongoDB Atlas                     |
| Hosting   | Vercel (frontend) + Railway (CMS) |
| Images    | Payload Media / Cloudflare R2     |
| Fonts     | Playfair Display + Montserrat     |

---

## Local Development

### 1. Frontend (Next.js)

```bash
cd urban-beauty
npm install
cp .env.example .env.local
# Fill in PAYLOAD_URL (http://localhost:3001 for local dev)
npm run dev
# → http://localhost:3000
```

The site runs with **placeholder data** if Payload isn't connected — no errors.

### 2. CMS (Payload)

```bash
cd urban-beauty/payload
npm install
cp .env.example .env
# Fill in DATABASE_URI and PAYLOAD_SECRET
npm run dev
# → http://localhost:3001/admin
```

Create your first admin user on first visit.

---

## Connecting to Payload

Once Payload is running, update `PAYLOAD_URL` in `.env.local` to point to it.
Data will flow from Payload → Next.js via ISR (revalidates every hour).

To trigger an immediate rebuild after content changes, configure a **Payload webhook**
to call Vercel's deploy hook URL.

---

## Deployment

### Payload CMS → Railway

1. Push `payload/` to its own GitHub repo (or use a monorepo)
2. Create a Railway project → Deploy from GitHub
3. Add env vars: `DATABASE_URI`, `PAYLOAD_SECRET`, `PAYLOAD_URL`, `CORS_URLS`
4. Note the Railway URL (e.g. `https://urban-beauty-cms.railway.app`)

### Next.js → Vercel

1. Push `urban-beauty/` to GitHub
2. Import project in Vercel dashboard
3. Set environment variables:
   - `PAYLOAD_URL` → your Railway URL
   - `PAYLOAD_API_KEY` → from Payload admin
4. Deploy — Vercel auto-deploys on every push

---

## Content Management

Log into `https://your-payload-host.railway.app/admin` to manage:

| Collection   | What it controls                          |
|-------------|-------------------------------------------|
| Services     | The 6 treatment cards (name, image, price)|
| Pricing      | All tabbed price list items               |
| Team         | Team member cards and bios                |
| Testimonials | Client reviews shown in the reviews section|
| Bookings     | Form submissions from the website         |
| Media        | Image library with auto-resizing          |

---

## Booking Form

The booking form at `/api/booking` currently logs submissions to the console.

To enable live booking confirmations, uncomment one of two options in
`app/api/booking/route.ts`:

**Option A — Save to Payload** (view submissions in CMS admin)  
Uncomment the `payloadRes` fetch block and set `PAYLOAD_API_KEY`.

**Option B — Email via Resend** (get email notifications)  
`npm install resend`, uncomment the Resend block, set `RESEND_API_KEY`.

Or use both.

---

## Replacing Placeholder Images

All images currently use Unsplash URLs. Replace with client media by:

1. Uploading images in the Payload Media collection
2. Referencing them in Services, Team, etc.
3. The frontend will use Payload image URLs automatically once connected

Add your domain to `next.config.ts → images.remotePatterns` to enable
Next.js image optimisation on your Payload media host.

---

## SEO & GEO

- `app/layout.tsx` — title templates, Open Graph, Twitter card metadata
- JSON-LD `BeautySalon` structured data with address, hours, geo coordinates, aggregate rating
- All images have descriptive `alt` text
- Server Components render full HTML for crawlers — no client-side content gaps

Update the `geo` coordinates and `address` in `layout.tsx` to match the real location.

---

## WCAG Accessibility

- Skip-to-content link (visible on focus)
- All form fields have associated `<label>` elements
- `aria-label` on icon-only buttons and links
- `role="tablist"` / `role="tab"` on the pricing tabs
- `role="list"` / `role="listitem"` on service and review grids
- `<blockquote>` with `<footer>` / `<cite>` for testimonials
- Custom cursor disabled on touch devices
- Focus rings visible on keyboard navigation
- Colour contrast meets WCAG AA (dark text on light, light text on dark)
