import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnquiryPanel } from "@/components/ui/EnquiryPanel";
import { faqs } from "@/config/faq";

export const metadata: Metadata = { title: "Frequently asked questions", description: "Answers about assignment help, countries, deadlines, files, fees and how enquiries work." };

export default function FaqPage() {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <PageHeader title="Frequently asked questions" intro="Straight answers about how we work, what we help with and how to get started." />
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.8fr_1fr]">
        <div className="border-t border-ink">
          {faqs.map((f) => (
            <details key={f.q} className="border-b border-rule">
              <summary className="flex min-h-14 items-center justify-between gap-6 py-4 text-lg font-medium">{f.q}<Plus aria-hidden size={20} className="faq-plus shrink-0 text-brand transition-transform" /></summary>
              <p className="max-w-2xl pb-5 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="lg:sticky lg:top-28 lg:self-start"><EnquiryPanel title="Still have a question?" text="Ask us on WhatsApp. Include your subject and deadline if you have one." /></div>
      </Container>
    </>
  );
}
