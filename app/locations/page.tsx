import type { Metadata } from "next";
import { CalendarDays, Facebook, Instagram, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { business, schedule } from "@/data/site";

export const metadata: Metadata = {
  title: "Locations and Schedule",
  description:
    "Find upcoming Cheesedogs NC hot dog cart stops, pop-ups, neighborhood nights, and private event availability across Raleigh, Durham, Cary, and the Triangle.",
  alternates: { canonical: "/locations" }
};

export default function LocationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Where to find us"
        title="Upcoming hot dog cart stops across the Triangle."
        text="Follow Cheesedogs NC for pop-ups, neighborhood nights, brewery stops, school events, and daily schedule updates."
        image="/images/cheesedogs-community-real.jpg"
        imageAlt="Cheesedogs NC serving guests at an outdoor Triangle event"
        primaryHref="/catering"
        primaryLabel="Book a Stop"
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <SectionHeader
              eyebrow="Schedule"
              title="Upcoming stops and booking windows."
              text="Add real dates as they are announced, keep private-event availability visible, and point people to social updates when the cart is on the move."
            />
            <div className="shine-card rounded-[2rem] border-2 border-grill bg-dogred p-6 text-white shadow-crisp">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cheese">Next up</p>
              <h2 className="mt-3 text-2xl font-black">Watch socials for daily cart updates.</h2>
              <p className="mt-3 text-white/82">Great for last-minute lunch stops, weekend pop-ups, and Triangle event announcements.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {schedule.map((event) => (
              <article key={`${event.date}-${event.title}`} className="shine-card rounded-[2rem] border-2 border-grill bg-white p-7 shadow-crisp transition hover:-translate-y-1">
                <p className="inline-flex rounded-full bg-dogred px-4 py-2 text-sm font-black uppercase text-white">{event.date}</p>
                <h2 className="mt-5 text-2xl font-black">{event.title}</h2>
                <div className="mt-4 grid gap-2 text-grill/72">
                  <p className="flex gap-2">
                    <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-dogred" />
                    {event.location}
                  </p>
                  <p className="flex gap-2">
                    <CalendarDays aria-hidden="true" className="h-5 w-5 shrink-0 text-dogred" />
                    {event.time}
                  </p>
                </div>
                <p className="mt-4 font-bold">{event.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border-2 border-grill bg-cream p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <SectionHeader
            eyebrow="Triangle hot dog stops"
            title="Looking for hot dogs in the Triangle?"
            text="Cheesedogs NC serves public and private hot dog cart stops around Raleigh, Durham, Cary, Apex, Holly Springs, Fuquay-Varina, Garner, Chapel Hill, Wake Forest, and nearby communities. Check social channels for daily updates and last-minute pop-ups."
          />
          <div className="flex flex-col justify-center gap-3">
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-grill bg-white px-6 py-3 font-black transition hover:bg-dogred hover:text-white" href={business.instagram}>
              <Instagram aria-hidden="true" className="h-5 w-5" />
              Follow on Instagram
            </a>
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-grill bg-white px-6 py-3 font-black transition hover:bg-dogred hover:text-white" href={business.facebook}>
              <Facebook aria-hidden="true" className="h-5 w-5" />
              Follow on Facebook
            </a>
            <ButtonLink href="/catering">Invite the Cart</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
