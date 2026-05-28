import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, CheckCircle2, ChefHat, Clock3, MapPin, PartyPopper } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { business, featuredMenu, perfectFor, serviceAreas, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Triangle NC's Favorite Hot Dog Cart",
  description:
    "Book Cheesedogs NC for loaded hot dogs, cheese dogs, cold drinks, and mobile hot dog cart catering in Raleigh, Durham, Cary, Apex, and the Triangle.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <main>
      <section className="grain relative overflow-hidden bg-grill text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/cheesedogs-hero-real.jpg"
            alt="Cheesedogs cart with menu sign and team serving at a Triangle NC event"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-58"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-grill via-grill/76 to-dogred/25" />
        </div>
        <div className="relative mx-auto flex max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:min-h-[720px] lg:items-center lg:px-8 lg:py-20">
          <div className="reveal-up">
            <p className="inline-flex rounded-full border-2 border-dogred bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-dogred">
              Mobile hot dog catering across the Triangle
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.92] sm:text-6xl lg:text-7xl">
              Triangle NC's Favorite Hot Dog Cart
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/86 sm:text-xl">
              Loaded hot dogs, cold drinks, and crowd-favorite cart catering for neighborhoods, schools, businesses, breweries, private parties, and local events.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/catering">Book the Cart</ButtonLink>
              <ButtonLink href="/menu" variant="secondary">View Menu</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Triangle service cities" className="overflow-hidden border-y-2 border-grill bg-dogred py-4 text-white">
        <div className="ticker-track flex w-max gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.22em]">
          {[...serviceAreas, ...serviceAreas].map((city, index) => (
            <span key={`${city}-${index}`} className="inline-flex items-center gap-8">
              {city}
              <span className="text-cheese">Hot Dog Cart Catering</span>
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-grill shadow-crisp">
            <Image
              src="/images/cheesedogs-menu-real.jpg"
              alt="Cheesedogs cart preparing a hot dog with unique toppings"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Crave-worthy cart food"
              title="Built for happy crowds, quick service, and second trips."
              text="Cheesedogs NC brings the smell, sizzle, toppings, and simple joy of a great hot dog cart to events across Raleigh, Durham, Cary, Apex, and nearby communities."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Unique toppings", "Friendly service", "Easy setup"].map((item) => (
                <div key={item} className="shine-card rounded-3xl border-2 border-grill bg-white p-5 font-black transition hover:-translate-y-1 hover:shadow-crisp">
                  <CheckCircle2 aria-hidden="true" className="mb-3 h-7 w-7 text-pickle" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader align="center" eyebrow="Perfect for" title="Events where people want something fun, fast, and actually delicious." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perfectFor.map(({ title, icon: Icon }) => (
              <div key={title} className="shine-card rounded-[1.5rem] border-2 border-grill bg-cream p-6 transition hover:-translate-y-1 hover:shadow-crisp">
                <Icon aria-hidden="true" className="h-8 w-8 text-dogred" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Real cart moments"
            title="The red umbrellas, the menu board, the line, the smiles."
            text="A real local setup with a clean cart presence and enough personality to make an event feel memorable."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { src: "/images/cheesedogs-community-real.jpg", alt: "Guests smiling with Cheesedogs food at an outdoor event" },
              { src: "/images/cheesedogs-catering-real.jpg", alt: "Cheesedogs cart serving a line of guests under red umbrellas" },
              { src: "/images/cheesedogs-menu-board-real.jpg", alt: "Cheesedogs menu board at a cart pop-up" },
              { src: "/images/cheesedogs-detail-real.jpg", alt: "Cheesedogs cart detail with red umbrella and chips" }
            ].map((photo, index) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-[1.5rem] border-2 border-grill shadow-crisp transition hover:-translate-y-1 ${index % 2 === 0 ? "aspect-[4/5]" : "aspect-square md:mt-10"}`}
              >
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader eyebrow="Featured menu" title="Fan favorites from the cart." text="A focused, easy-to-serve menu makes Cheesedogs a strong fit for busy events and big appetites." />
            <ButtonLink href="/menu" variant="dark">Full Menu</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredMenu.map(({ title, text, tags }, index) => (
              <article key={title} className="shine-card rounded-[2rem] border-2 border-grill bg-white p-7 shadow-crisp transition hover:-translate-y-1">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-dogred px-4 py-2 text-sm font-black uppercase tracking-wide text-white">
                    Fan #{index + 1}
                  </span>
                  <span className="text-4xl font-black text-dogred/20">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-grill/70">{text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border-2 border-grill/15 bg-cream px-3 py-1 text-xs font-black uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dogred px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader align="center" eyebrow="How booking works" title="Pick a date, choose your setup, we serve the dogs." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: CalendarCheck, title: "Pick a date", text: "Send the event basics, guest count, city, and timing." },
              { icon: PartyPopper, title: "Choose your setup", text: "We help match the menu and package to your crowd." },
              { icon: ChefHat, title: "We serve the dogs", text: "The cart arrives ready for friendly, efficient service." }
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="shine-card rounded-[2rem] border-2 border-grill bg-white p-7 transition hover:-translate-y-1">
                <Icon aria-hidden="true" className="h-9 w-9 text-dogred" />
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-grill/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader align="center" eyebrow="Local love" title="Built for Triangle crowds." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="shine-card rounded-[2rem] border-2 border-grill bg-white p-7 shadow-crisp transition hover:-translate-y-1">
                <p className="text-lg font-bold">"{item.quote}"</p>
                <cite className="mt-5 block not-italic text-sm font-black uppercase tracking-wide text-dogred">{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border-2 border-grill bg-cream p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <div>
            <SectionHeader
              eyebrow="Triangle service area"
              title="Hot dog cart catering near Raleigh, Durham, Cary, and beyond."
              text={`Looking for a hot dog cart near me, hot dog catering in Raleigh NC, or an easy event catering option in the Triangle? Cheesedogs NC serves ${business.serviceArea}.`}
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((city) => (
                <span key={city} className="rounded-full border-2 border-grill bg-white px-4 py-2 text-sm font-black">
                  <MapPin aria-hidden="true" className="mr-1 inline h-4 w-4 text-dogred" />
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-grill p-6 text-white">
            <Clock3 aria-hidden="true" className="h-9 w-9 text-dogred" />
            <h2 className="mt-5 text-3xl font-black uppercase">Ready to feed your crowd?</h2>
            <p className="mt-3 text-white/78">Tell us the date, city, and guest count. We will help you build the right cart setup.</p>
            <div className="mt-6">
              <ButtonLink href="/catering">Start Booking</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
