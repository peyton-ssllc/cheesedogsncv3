import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, MapPinned, Utensils } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Cheesedogs NC, a local community-focused hot dog cart serving loaded hot dogs with unique toppings across Raleigh, Durham, Cary, and the Triangle.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title="A local hot dog cart with big community energy."
        text="Cheesedogs NC is built around loaded hot dogs, unique toppings, friendly service, and the kind of simple food that makes people gather."
        image="/images/cheesedogs-about-real.jpg"
        imageAlt="Cheesedogs NC cart serving a local community event"
        primaryHref="/catering"
        primaryLabel="Book Cheesedogs"
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Triangle made"
              title="Loaded, local, and easy to love."
              text={`${business.name} serves the Triangle with a mobile hot dog cart made for neighborhoods, schools, breweries, businesses, private parties, and local events.`}
            />
            <div className="mt-6 grid gap-4 text-lg text-grill/76">
              <p>
                Founded by the Cheeseman family of Wake Forest, Cheesedogs NC is a local hot dog cart dedicated to made-to-order hot dogs, unique toppings, and the kind of service that makes guests feel welcome.
              </p>
              <p>
                The idea is simple: bring a clean, professional cart setup to the places where people already gather, then serve hot dogs that feel fun enough for a party and dependable enough for a corporate lunch.
              </p>
              <p>
                From classic dogs to chili cheese favorites and loaded specialty builds like the Ry Guy Dog, Buffalo Dog, German Heatwave, and Cheeto Dog, Cheesedogs NC keeps the menu approachable, fast, and crowd-friendly across Raleigh, Durham, Cary, Apex, Holly Springs, Fuquay-Varina, Garner, Chapel Hill, Wake Forest, and surrounding Triangle communities.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-grill shadow-crisp">
            <Image src="/images/cheesedogs-community-real.jpg" alt="Cheesedogs NC serving families at a local community event" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-dogred px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            { icon: Utensils, title: "Crave-worthy", text: "Loaded dogs, warm cheese, chili, toppings, chips, and cold drinks." },
            { icon: HeartHandshake, title: "Community-first", text: "A friendly setup for weddings, schools, teams, breweries, neighborhoods, and local hosts." },
            { icon: MapPinned, title: "Triangle-focused", text: "Built for local SEO and real service across the Raleigh-Durham area." }
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="shine-card rounded-[2rem] border-2 border-grill bg-white p-7 transition hover:-translate-y-1">
              <Icon aria-hidden="true" className="h-9 w-9 text-dogred" />
              <h2 className="mt-5 text-2xl font-black">{title}</h2>
              <p className="mt-3 text-grill/70">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
