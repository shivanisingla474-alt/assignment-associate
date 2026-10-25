import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnquiryPanel } from "@/components/ui/EnquiryPanel";
import { subjectCategories, getCategory, getSubject, assignmentTypes, enquiryHref } from "@/data/catalog";
import { faqs } from "@/config/faq";

type P = { params: Promise<{ category: string; subject: string }> };
export const generateStaticParams = () => subjectCategories.flatMap((c) => c.subjects.map((s) => ({ category: c.slug, subject: s.slug })));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { category, subject } = await params;
  const s = getSubject(category, subject);
  return s ? { title: `${s.title} assignment help`, description: `Help with ${s.title} assignments: understand the question, plan your answer and improve your own draft.` } : {};
}

export default async function SubjectPage({ params }: P) {
  const { category, subject } = await params;
  const c = getCategory(category); const s = getSubject(category, subject);
  if (!c || !s) notFound();
  const related = c.subjects.filter((o) => o.slug !== s.slug);
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Subjects", href: "/subjects" }, { label: c.title, href: `/subjects/${c.slug}` }, { label: s.title }]} />
      <PageHeader title={`${s.title} assignment help`} intro={`Help with ${s.title} assignments: understanding the question, planning your answer and improving your own draft, from any country.`} />
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.8fr_1fr]">
        <div className="space-y-12">
          <section aria-labelledby="types"><h2 id="types" className="text-2xl font-medium">{s.title} assignments we help with</h2>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {assignmentTypes.map((t) => (
                <li key={t.slug} className="grid gap-2 py-4 sm:grid-cols-[1.2fr_1fr] sm:gap-6">
                  <div><span className="font-medium">{t.title}</span><p className="text-ink-soft">{t.short}</p></div>
                  <Link href={enquiryHref({ type: t.slug, subject: s.title })} className="font-medium text-brand underline underline-offset-4 sm:text-right">Get help with {t.title.toLowerCase()}</Link>
                </li>
              ))}
            </ul></section>
          <section aria-labelledby="topics"><h2 id="topics" className="text-2xl font-medium">Topics students ask about</h2>
            <ul className="mt-4 flex flex-wrap gap-2">{s.topics.map((t) => <li key={t} className="rounded-full border border-rule bg-white px-4 py-1.5">{t}</li>)}</ul>
            <p className="mt-3 text-sm text-ink-soft">Not listed? Mention your topic when you enquire.</p></section>
          <section aria-labelledby="faq"><h2 id="faq" className="text-2xl font-medium">Common questions</h2>
            <div className="mt-4 border-t border-ink">{faqs.slice(0, 4).map((f) => (<details key={f.q} className="border-b border-rule"><summary className="min-h-14 py-4 text-lg font-medium">{f.q}</summary><p className="pb-5 text-ink-soft">{f.a}</p></details>))}</div></section>
        </div>
        <div className="space-y-8 lg:sticky lg:top-32 lg:self-start">
          <EnquiryPanel title={`Get ${s.title} assignment help`} text="The form opens with your subject filled in. Add your country, deadline and what the assignment asks for." subject={s.title} />
          <nav aria-label={`More in ${c.title}`}><h2 className="text-lg font-medium">More in {c.title}</h2>
            <ul className="mt-3 space-y-2">{related.map((o) => <li key={o.slug}><Link href={`/subjects/${c.slug}/${o.slug}`} className="underline underline-offset-4">{o.title}</Link></li>)}</ul></nav>
        </div>
      </Container>
    </>
  );
}
