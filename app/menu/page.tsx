import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { menuSections } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Cheesedogs NC menu with Classic Dogs, Ry Guy Dogs, The Cheesedog, Buffalo Dogs, German Heatwave Dogs, Cheeto Dogs, combos, and toppings.",
  alternates: { canonical: "/menu" }
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Cheesedogs NC Menu",
  hasMenuSection: menuSections.map((section) => ({
    "@type": "MenuSection",
    name: section.title,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description
    }))
  }))
};

export default function MenuPage() {
  const hotDogs = menuSections.find((section) => section.title === "Hot Dogs")?.items ?? [];
  const singleDogs = menuSections.find((section) => section.title === "Single Dogs")?.items ?? [];
  const doubleDogs = menuSections.find((section) => section.title === "Double Dogs")?.items ?? [];
  const combos = menuSections.find((section) => section.title === "Combos")?.items ?? [];
  const toppings = menuSections.find((section) => section.title === "Toppings")?.items ?? [];
  const includedToppings = toppings.filter((item) => item.name !== "Extra Toppings");
  const extraToppings = toppings.find((item) => item.name === "Extra Toppings");

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
      <PageHero
        eyebrow="Cart menu"
        title="Classic dogs, gourmet dogs, combos, and all the toppings."
        text="A clear hot dog cart menu with regular dogs, specialty dogs, chips, drinks, and crowd-friendly combos."
        image="/images/cheesedogs-menu-real.jpg"
        imageAlt="Cheesedogs hot dog being built with unique toppings at the cart"
        primaryHref="/catering"
        primaryLabel="Book Menu for an Event"
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Official menu"
            title="Pick your dog, make it a combo, load it your way."
            text="A cleaner digital menu board based on the current Cheesedogs setup: hot dogs on one side, pricing and combos on the other, and toppings as quick-scan tags."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="shine-card rounded-[2rem] border-2 border-grill bg-white p-6 shadow-crisp transition hover:-translate-y-1">
              <div className="flex items-center justify-between gap-4 border-b-2 border-grill pb-4">
                <h2 className="text-3xl font-black uppercase">Hot Dogs</h2>
                <span className="rounded-full bg-dogred px-4 py-2 text-xs font-black uppercase tracking-wide text-white">Regular or Gourmet</span>
              </div>
              <div className="mt-5 grid gap-4">
                {hotDogs.map((item) => (
                  <div key={item.name} className="grid gap-3 rounded-3xl bg-cream p-4 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <h3 className="text-xl font-black">{item.name}</h3>
                      <p className="mt-1 text-grill/70">{item.description}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-2 text-sm font-black text-dogred shadow-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-5">
              <article className="shine-card rounded-[2rem] border-2 border-grill bg-white p-6 shadow-crisp transition hover:-translate-y-1">
                <h2 className="text-2xl font-black uppercase">Pricing</h2>
                <div className="mt-5 grid gap-3">
                  {[...singleDogs, ...doubleDogs].map((item, index) => (
                    <div key={`${item.name}-${index}`} className="flex items-center justify-between gap-4 rounded-2xl border-2 border-grill/10 px-4 py-3">
                      <div>
                        <h3 className="font-black">{index < singleDogs.length ? "Single" : "Double"} {item.name}</h3>
                        <p className="text-sm text-grill/60">{item.description}</p>
                      </div>
                      <span className="text-lg font-black text-dogred">{item.price}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="shine-card rounded-[2rem] border-2 border-grill bg-white p-6 shadow-crisp transition hover:-translate-y-1">
                <h2 className="text-2xl font-black uppercase">Combos</h2>
                <div className="mt-5 grid gap-3">
                  {combos.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4 border-t-2 border-grill/10 pt-3 first:border-t-0 first:pt-0">
                      <div>
                        <h3 className="font-black">{item.name}</h3>
                        <p className="text-sm text-grill/60">{item.description}</p>
                      </div>
                      <span className="rounded-full bg-dogred px-3 py-1 text-sm font-black text-white">{item.price}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>

          <article className="mt-5 rounded-[2rem] border-2 border-grill bg-grill p-6 text-white shadow-crisp">
            <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-black uppercase">Toppings</h2>
                <p className="mt-2 text-white/72">{extraToppings?.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {includedToppings.map((item) => (
                  <span key={item.name} className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-black uppercase tracking-wide text-grill">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border-2 border-grill bg-cream p-6 sm:p-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-grill shadow-crisp">
            <Image src="/images/cheesedogs-menu-board-real.jpg" alt="Cheesedogs menu board at an outdoor cart event" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeader
              eyebrow="Events"
              title="Need a menu for a crowd?"
              text="Cheesedogs NC can shape packages around guest count, service window, toppings, chips, drinks, and event type."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
