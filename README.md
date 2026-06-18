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
- Schedule calendar: update the Cheesedogs Google Calendar
- Form backend: `components/BookingForm.tsx`
- Photos and logo: live site images are in `public/images/`, and the logo is in `public/images/brand/cheesedogs-logo.png`

## Form Backend

The booking form sends requests through `app/api/booking/route.ts` using Resend.

Add these environment variables in Vercel:

```bash
RESEND_API_KEY=your_resend_api_key_here
BOOKING_EMAIL_TO=cheesedogsofnc@gmail.com
BOOKING_EMAIL_FROM=Cheesedogs Website <bookings@cheesedogsnc.com>
```

For production sending, verify `cheesedogsnc.com` in Resend so `BOOKING_EMAIL_FROM` can use the Cheesedogs domain. If the domain is not verified yet, use the sender address Resend provides during setup.

## Schedule Calendar

The Locations/Schedule page reads upcoming events from the Cheesedogs Google Calendar iCal feed.

Optional Vercel environment variable:

```bash
GOOGLE_CALENDAR_ICS_URL=https://calendar.google.com/calendar/ical/cheesedogsofnc%40gmail.com/public/basic.ics
```

Add future public stops to the calendar with the event title, time, and location. Events with titles containing `Private`, `Wedding`, `Closed`, or `Booked` will show as booked dates without exposing private event details.

## SEO Included

- Per-page metadata
- Open Graph image settings
- Local business, food establishment, catering service, service, and menu schema
- Semantic page structure
- Local service-area copy for Raleigh, Durham, Cary, Apex, Holly Springs, Fuquay-Varina, Garner, Chapel Hill, Wake Forest, and surrounding Triangle NC areas
- `sitemap.xml` and `robots.txt` generated through the App Router
