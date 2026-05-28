"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-grill/10 bg-cream/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
          <span className="grid h-16 w-16 place-items-center rounded-2xl border-2 border-grill bg-white p-1.5 shadow-[4px_4px_0_#171717] sm:h-[4.5rem] sm:w-[4.5rem]">
            <Image src="/images/brand/cheesedogs-logo.png" alt="Cheesedogs logo" width={120} height={100} className="h-full w-full object-contain" priority />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black uppercase">Cheesedogs</span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-dogred">NC Cart</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/catering">Book the Cart</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-grill bg-white lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t-2 border-grill/10 bg-cream px-4 py-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-2xl bg-white px-4 py-3 text-base font-black"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/catering" className="mt-2">Book the Cart</ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
