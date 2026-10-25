import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, Globe, MessagesSquare, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { enquiryHref } from "@/data/catalog";
import { site } from "@/config/site";


export const metadata: Metadata = { title: "About Us", description: "Learn about Assignment Associate and our assignment preparation services, tailored to your subject, brief and deadline." };


const principles = [
  { Icon: ShieldCheck, title: "Tailored to Your Requirements", body: "Each assignment is prepared according to your brief, subject, instructions and specific requirements." },
  { Icon: BookOpenCheck, title: "Attention to Detail", body: "We focus on clear structure, relevant content, appropriate referencing and careful presentation." },
  { Icon: MessagesSquare, title: "Direct Communication", body: "Discuss your assignment requirements, pricing and expected delivery timeline with us on WhatsApp." },
  { Icon: Globe, title: "Support Across Countries", body: "We welcome enquiries from students around the world and discuss each assignment based on its requirements." },
];


export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <PageHeader title={`About ${site.name}`} intro="Assignment preparation services tailored to your subject, assignment brief, formatting requirements and submission deadline." />
      <Container className="max-w-4xl space-y-14 py-14">
        <section aria-labelledby="do"><h2 id="do" className="text-2xl font-medium md:text-3xl">What we do</h2>
          <p className="mt-4 text-lg text-ink-soft">We help students get assignments prepared according to their specific requirements, from research and content development to structure, referencing and formatting. Our services cover <Link href="/subjects" className="font-medium text-brand underline underline-offset-4">essays, reports, case studies, dissertations and more</Link> across <Link href="/subjects" className="font-medium text-brand underline underline-offset-4">many subjects</Link>. <Link href="/subjects" className="font-medium text-brand underline underline-offset-4">essays, reports, case studies, dissertations and more</Link> across <Link href="/subjects" className="font-medium text-brand underline underline-offset-4">many subjects</Link>.</p></section>
        <section aria-labelledby="how"><h2 id="how" className="text-2xl font-medium md:text-3xl">How we work</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {principles.map(({ Icon, title, body }) => (
              <li key={title} className="reveal lift rounded-xl border border-rule bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F8EAEC] text-brand"><Icon aria-hidden size={22} /></span>
                <h3 className="mt-4 text-lg font-medium">{title}</h3><p className="mt-1 text-ink-soft">{body}</p>
              </li>
            ))}
          </ul></section>
        <section aria-labelledby="line"><h2 id="line" className="text-2xl font-medium md:text-3xl">Where we draw the line</h2>
          <p className="mt-4 text-lg text-ink-soft">Our services are tailored to the assignment requirements you share. Please ensure you understand your institution's academic integrity policies and follow the rules that apply to your submission. Read our full <Link href="/academic-integrity" className="font-medium text-brand underline underline-offset-4">academic integrity statement</Link>.</p></section>
        <div className="reveal cta-bg rounded-2xl p-8 text-center text-white md:p-12">
          <h2 className="text-2xl font-medium md:text-3xl">Talk to us about your assignment</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">Share your subject, deadline and brief. We will take it from there on WhatsApp.</p>
          <ButtonLink href={enquiryHref()} variant="primaryOnDark" className="mt-6">Get assignment help</ButtonLink>
        </div>
      </Container>
    </>
  );
}
