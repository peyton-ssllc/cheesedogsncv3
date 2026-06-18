import type { Metadata } from "next";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cheesedogs NC to book a hot dog cart for events, catering, neighborhood nights, school events, breweries, and private parties across the Triangle.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Ready to bring Cheesedogs to your event?"
        text="Send the event details, ask a menu question, or book the hot dog cart for a Triangle NC stop. Requests go straight to Cheesedogs NC."
        image="/images/cheesedogs-catering-real.jpg"
        imageAlt="Cheesedogs hot dog cart serving guests at a Triangle event"
        primaryHref="#contact-form"
        primaryLabel="Send a Message"
      />
      <section id="contact-form" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] border-2 border-grill bg-dogred p-7 text-white shadow-crisp">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cheese">Get in touch</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">Booking and questions.</h2>
            <p className="mt-4 text-white/82">
              For fastest booking, include the date, city, guest count, event type, and whether you want guest-pay or host-pay service.
            </p>
            <div className="mt-8 grid gap-4">
              <a className="focus-ring flex items-center gap-3 rounded-2xl bg-white px-4 py-4 font-black text-grill transition hover:-translate-y-1" href={`tel:${business.phone}`}>
                <Phone aria-hidden="true" className="h-5 w-5 text-dogred" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-grill/50">Call or text</span>
                  {business.phone}
                </span>
              </a>
              <a className="focus-ring flex items-center gap-3 rounded-2xl bg-white px-4 py-4 font-black text-grill transition hover:-translate-y-1" href={`mailto:${business.email}`}>
                <Mail aria-hidden="true" className="h-5 w-5 text-dogred" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-grill/50">Email</span>
                  {business.email}
                </span>
              </a>
              <a className="focus-ring flex items-center gap-3 rounded-2xl bg-white px-4 py-4 font-black text-grill transition hover:-translate-y-1" href={business.instagram}>
                <Instagram aria-hidden="true" className="h-5 w-5 text-dogred" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-grill/50">Instagram</span>
                  @cheesedogs.nc
                </span>
              </a>
              <a className="focus-ring flex items-center gap-3 rounded-2xl bg-white px-4 py-4 font-black text-grill transition hover:-translate-y-1" href={business.facebook}>
                <Facebook aria-hidden="true" className="h-5 w-5 text-dogred" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-grill/50">Facebook</span>
                  Cheesedogs NC
                </span>
              </a>
            </div>
            <p className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm font-bold text-white/86">
              Serving weddings, schools, breweries, private parties, offices, and neighborhood events across Triangle NC.
            </p>
          </aside>
          <BookingForm compact />
        </div>
      </section>
    </main>
  );
}
