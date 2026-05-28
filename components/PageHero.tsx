import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageHero({ eyebrow, title, text, image, imageAlt, primaryHref, primaryLabel }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-grill text-white">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-52" />
        <div className="absolute inset-0 bg-gradient-to-r from-grill via-grill/76 to-dogred/28" />
      </div>
      <div className="reveal-up relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-cheese">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/84 sm:text-xl">{text}</p>
        {primaryHref && primaryLabel ? (
          <div className="mt-8">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
