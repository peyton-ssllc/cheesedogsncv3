# Cheesedogs NC Website

Modern Next.js website for Cheesedogs NC, a mobile hot dog cart and event catering vendor serving the Triangle area of North Carolina.

## Stack

- Next.js App Router
- Tailwind CSS
- TypeScript
- Vercel-ready routing, metadata, sitemap, robots, and schema markup

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deployment

Deploy directly to Vercel:

```bash
npm run build
```

Then import the repository into Vercel or connect the GitHub project. No custom server is required.

## Edit These First

- Business info, phone, email, social links: `data/site.ts`
- Menu items and prices: `data/site.ts`
- Schedule cards: `data/site.ts`
- Form backend: `components/BookingForm.tsx`
- Photos and logo: live site images are in `public/images/`, and the logo is in `public/images/brand/cheesedogs-logo.png`

## Form Backend

The booking form is front-end ready and currently shows a local confirmation. Replace the submit handler in `components/BookingForm.tsx`, or connect it to Formspree, a Vercel Server Action, Resend email route, or CRM endpoint.

## SEO Included

- Per-page metadata
- Open Graph image settings
- Local business, food establishment, catering service, service, and menu schema
- Semantic page structure
- Local service-area copy for Raleigh, Durham, Cary, Apex, Holly Springs, Fuquay-Varina, Garner, Chapel Hill, Wake Forest, and surrounding Triangle NC areas
- `sitemap.xml` and `robots.txt` generated through the App Router
