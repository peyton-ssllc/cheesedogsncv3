import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Clock, MapPinned, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { packages, perfectFor } from "@/data/site";

export const metadata: Metadata = {
  title: "Hot Dog Cart Catering and Booking",
  description:
    "Book Cheesedogs NC for hot dog cart catering in Raleigh, Durham, Cary, Apex, Holly Springs, Fuquay-Varina, Garner, Chapel Hill, Wake Forest, and the Triangle.",
  alternates: { canonical: "/catering" }
};

const cateringSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hot Dog Cart Catering",
  provider: { "@type": "LocalBusiness", name: "Cheesedogs NC" },
  areaServed: "Triangle NC",
  serviceType: "Mobile food cart catering for events"
};

export default function CateringPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }} />
      <PageHero
        eyebrow="Book the cart"
        title="Hot dog catering that makes your event easier and more fun."
        text="From weddings and school events to corporate lunches and brewery pop-ups, Cheesedogs NC brings a polished mobile cart, quick service, and a menu people love."
        image="/images/cheesedogs-catering-real.jpg"
        imageAlt="Cheesedogs NC hot dog cart serving guests at a Triangle event"
        primaryHref="#booking"
        primaryLabel="Request a Quote"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Why book Cheesedogs"
              title="The comfort food crowd-pleaser with a cleaner event flow."
              text="Hot dogs are fast, flexible, nostalgic, and easy to love. Cheesedogs NC adds premium cart energy, unique toppings, friendly service, and a setup that fits many venues."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Fast service for busy crowds",
                "Packages for host-pay or guest-pay events",
                "Easy setup for weddings and venues",
                "Fun menu without fussy catering"
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-3xl border-2 border-grill bg-white p-5 font-bold">
                  <CheckCircle2 aria-hidden="true" className="h-6 w-6 shrink-0 text-pickle" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-grill shadow-crisp">
            <Image src="/images/cheesedogs-catering-real.jpg" alt="Cheesedogs hot dog cart catering setup serving guests under red umbrellas" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader align="center" eyebrow="Event types" title="A strong fit for all the places people gather." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perfectFor.map(({ title, icon: Icon }) => (
              <div key={title} className="shine-card rounded-[1.5rem] border-2 border-grill bg-cream p-6 transition hover:-translate-y-1 hover:shadow-crisp">
                <Icon aria-hidden="true" className="h-8 w-8 text-dogred" />
                <h2 className="mt-5 text-xl font-black">{title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Package options" title="Choose the setup that matches your crowd." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className="shine-card rounded-[2rem] border-2 border-grill bg-white p-7 shadow-crisp transition hover:-translate-y-1">
                <h2 className="text-2xl font-black uppercase">{item.name}</h2>
                <p className="mt-3 text-grill/70">{item.description}</p>
                <ul className="mt-6 grid gap-3">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2 font-bold">
                      <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-pickle" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dogred px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            { icon: MapPinned, title: "What is included?", text: "Cart setup, core serving gear, menu planning, friendly service, and an event-ready flow." },
            { icon: Clock, title: "How early should I book?", text: "Earlier is better for spring, summer, school, and holiday weekends. Ask even if your date is close." },
            { icon: Sparkles, title: "Can the menu be customized?", text: "Yes. Unique toppings, drinks, service style, and packages can be shaped around the event." }
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="shine-card rounded-[2rem] border-2 border-grill bg-white p-7 transition hover:-translate-y-1">
              <Icon aria-hidden="true" className="h-9 w-9 text-dogred" />
              <h2 className="mt-5 text-2xl font-black">{title}</h2>
              <p className="mt-3 text-grill/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Request a quote"
              title="Tell us about your event."
              text="Share the date, city, guest count, and event type. This front-end form is ready to connect to Formspree, Resend, or a Vercel Server Action."
            />
            <div className="mt-8">
              <ButtonLink href="/contact" variant="dark">Contact Details</ButtonLink>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
