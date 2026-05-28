import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-dogred text-white border-grill hover:-translate-y-1 hover:shadow-button",
    secondary: "bg-white text-grill border-grill hover:bg-cream",
    dark: "bg-grill text-white border-grill hover:bg-dogred"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-black uppercase tracking-wide transition ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
