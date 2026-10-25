import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, intro, align = "center", dark = false, id }: { eyebrow: string; title: ReactNode; intro?: string; align?: "center" | "left"; dark?: boolean; id?: string }) {
  return (
    <div className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-rose" : "text-brand"}`}>{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl leading-[1.1] md:text-5xl">{title}</h2>
      {intro && <p className={`mt-5 text-lg ${dark ? "text-white/80" : "text-ink-soft"}`}>{intro}</p>}
    </div>
  );
}
