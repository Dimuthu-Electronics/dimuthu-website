# Dimuthu Electronics - Official Website

Modern, responsive business website for Dimuthu Electronics. Companion to the [Dimuthu Electronics Manager](https://github.com/Dimuthu-Electronics/dimuthu-desktop) desktop CRM, sharing the same Supabase backend so customer-facing actions (appointment bookings, enquiries) flow directly into the staff-facing app.

**Live site:** https://dimuthu-website.vercel.app

## Features

- Product showcase
- Service listings and business information
- Appointment booking form that writes into the shared Supabase backend
- Customer reviews and ratings
- Wholesale enquiry form
- WhatsApp direct contact button
- Facebook Reels embed for marketing content

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **UI:** React 19, Tailwind CSS 4
- **Backend:** Supabase (PostgreSQL + client SDK)
- **Hosting:** Vercel
- **Security headers:** `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` configured via `next.config`

## Local development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

Create a `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Build and deploy

```bash
npm run build    # produces .next/
npm run start    # serves the production build locally
```

Deployment is wired to Vercel: pushes to `main` trigger a production build automatically.

## Related project

- [Dimuthu Electronics Manager (desktop CRM)](https://github.com/Dimuthu-Electronics/dimuthu-desktop)
