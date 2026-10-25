import type { ReactNode } from "react";
import { Container } from "./Container";

export function PageHeader({ title, intro, children }: { title: ReactNode; intro?: string; children?: ReactNode }) {
  return (
    <section className="border-b border-rule">
      <Container className="py-12 md:py-16">
        <h1 className="max-w-3xl text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.08]">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-ink-soft">{intro}</p>}
        {children}
      </Container>
    </section>
  );
}
