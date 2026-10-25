import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageHeader } from "./PageHeader";
import { legalUpdated, type LegalSection } from "@/data/legal";

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      <PageHeader title={title} intro={intro}><p className="mt-4 text-sm text-ink-soft">Last updated: {legalUpdated}</p></PageHeader>
      <Container className="max-w-3xl space-y-10 py-14">
        {sections.map((s, i) => (
          <section key={s.heading} aria-labelledby={`s-${i}`}>
            <h2 id={`s-${i}`} className="text-2xl font-medium">{s.heading}</h2>
            {s.body?.map((b) => <p key={b} className="mt-3 text-ink-soft">{b}</p>)}
            {s.list && <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-soft">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
          </section>
        ))}
      </Container>
    </>
  );
}
