type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.22em] text-dogred">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg text-grill/72">{text}</p> : null}
    </div>
  );
}
