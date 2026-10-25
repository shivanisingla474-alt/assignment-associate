import Link from "next/link";
import { ClipboardCheck, Globe, MessageSquareText, MessageCircle, PenLine, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/config/site";


const items = [
  { Icon: PenLine, title: "Prepared Around Your Requirements", body: "Assignments are tailored to your topic, brief, word count, formatting instructions and submission deadline." },
  { Icon: ClipboardCheck, title: "Aligned with Your Assignment Brief", body: "We follow your specific questions, guidelines, marking criteria and required structure rather than using a generic template." },
  { Icon: MessageSquareText, title: "Research-Based Content", body: "Get organised content with relevant research, clear explanations and a logical flow suited to your assignment topic." },
  { Icon: ShieldCheck, title: "Referencing and Quality Checks", body: "We pay attention to citations, formatting, grammar and consistency according to the requirements you share." },
  { Icon: Globe, title: "Support Across Subjects", body: "Explore assignment preparation across a range of academic subjects and document types, based on your requirements." },
  { Icon: MessageCircle, title: "Direct Communication", body: "Discuss your assignment requirements, share your brief and confirm the expected price and delivery timeline with us on WhatsApp." },
];


export function WhyChoose() {
  return (
    <section id="why" aria-labelledby="why-title" className="bg-paper py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Why choose us</p>
          <h2 id="why-title" className="mt-3 text-3xl leading-[1.1] md:text-5xl">Support that respects your work</h2>
          <p className="mt-5 text-lg text-ink-soft">
Get assignments prepared with attention to your subject, instructions and deadline. At {site.name}, we focus on clear communication, customised content and careful presentation.
</p>
          <p className="mt-6 text-ink-soft">Read our <Link href="/academic-integrity" className="font-medium text-brand underline underline-offset-4">academic integrity statement</Link> for exactly where we draw the line.</p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {items.map(({ Icon, title, body }) => (
            <li key={title} className="reveal lift gradient-border p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand"><Icon aria-hidden size={24} /></span>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 text-ink-soft">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
