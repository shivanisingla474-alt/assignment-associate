import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnquiryPanel } from "@/components/ui/EnquiryPanel";
import { subjectCategories, getCategory } from "@/data/catalog";

type P = { params: Promise<{ category: string }> };
export const generateStaticParams = () => subjectCategories.map((c) => ({ category: c.slug }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const c = getCategory((await params).category);
  return c ? { title: `${c.title} assignment help`, description: `${c.blurb} Assignment help across ${c.title.toLowerCase()} subjects.` } : {};
}

export default async function CategoryPage({ params }: P) {
  const c = getCategory((await params).category);
  if (!c) notFound();
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Subjects", href: "/subjects" }, { label: c.title }]} />
      <PageHeader title={`${c.title} assignment help`} intro={c.blurb} />
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.8fr_1fr]">
        <ul className="divide-y divide-rule border-y border-rule">
          {c.subjects.map((s) => (
            <li key={s.slug} className="py-5">
              <Link href={`/subjects/${c.slug}/${s.slug}`} className="text-xl font-medium underline-offset-4 hover:underline">{s.title}</Link>
              <p className="mt-1 text-ink-soft">{s.topics.join(" · ")}</p>
            </li>
          ))}
        </ul>
        <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <EnquiryPanel title={`Help with ${c.title.toLowerCase()}`} text="Tell us your subject and what the assignment asks for." subject={c.title} />
          <nav aria-label="Other categories"><h2 className="text-lg font-medium">Other categories</h2>
            <ul className="mt-3 space-y-2">{subjectCategories.filter((o) => o.slug !== c.slug).map((o) => <li key={o.slug}><Link href={`/subjects/${o.slug}`} className="underline underline-offset-4">{o.title}</Link></li>)}</ul></nav>
        </div>
      </Container>
    </>
  );
}
