import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { business, navItems, serviceAreas } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Footer() {
  return (
    <footer className="border-t-2 border-grill bg-grill text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Image src="/images/brand/cheesedogs-logo.png" alt="Cheesedogs logo" width={190} height={160} className="h-auto w-44 rounded-2xl bg-white p-3" />
          <p className="mt-5 text-3xl font-black uppercase text-white">Cheesedogs NC</p>
          <p className="mt-4 max-w-md text-white/78">
            Loaded hot dogs, cold drinks, and mobile cart catering for Raleigh, Durham, Cary, and the Triangle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/catering">Book the Cart</ButtonLink>
            <ButtonLink href="/menu" variant="secondary">View Menu</ButtonLink>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-dogred">Explore</h2>
          <ul className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-white/78 transition hover:text-dogred" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-dogred">Contact</h2>
          <div className="mt-4 grid gap-3 text-white/78">
            <a className="inline-flex items-center gap-2 transition hover:text-dogred" href={`tel:${business.phone}`}>
              <Phone aria-hidden="true" className="h-4 w-4" />
              {business.phone}
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-dogred" href={`mailto:${business.email}`}>
              <Mail aria-hidden="true" className="h-4 w-4" />
              {business.email}
            </a>
            <div className="flex gap-3">
              <a aria-label="Instagram" className="transition hover:text-dogred" href={business.instagram}>
                <Instagram aria-hidden="true" />
              </a>
              <a aria-label="Facebook" className="transition hover:text-dogred" href={business.facebook}>
                <Facebook aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-5 text-center text-xs text-white/60">
        Serving {serviceAreas.join(", ")} and surrounding Triangle NC areas.
      </div>
    </footer>
  );
}
