import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnquiryPanel } from "@/components/ui/EnquiryPanel";
import { steps } from "@/data/process";
import { toShare } from "@/data/catalog";

export const metadata: Metadata = { title: "How it works", description: "From enquiry to finished assignment: how Assignment Associate works with you, step by step." };

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How it works" }]} />
      <PageHeader title="How it works" intro="A short enquiry, a WhatsApp conversation, and then focused work on your own assignment." />
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.8fr_1fr]">
        <div className="space-y-12">
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal lift flex gap-5 rounded-xl border border-rule bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand font-display text-2xl text-white" aria-hidden>{i + 1}</span>
                <div><h2 className="text-xl font-medium">{s.title}</h2><p className="mt-1 text-ink-soft">{s.body}</p></div>
              </li>
            ))}
          </ol>
          <section aria-labelledby="prep"><h2 id="prep" className="text-2xl font-medium">Have these ready</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-ink-soft">{toShare.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="mt-3 text-ink-soft">You can send files directly in WhatsApp after your first message. This website does not upload files.</p></section>
          <section aria-labelledby="note"><h2 id="note" className="text-2xl font-medium">One thing to know</h2>
            <p className="mt-3 text-ink-soft">Submitting the form prepares a message but does not send it. We receive your enquiry only when you press send in WhatsApp. Our help is guidance on your own work, as set out on the <Link href="/academic-integrity" className="font-medium text-brand underline underline-offset-4">academic integrity</Link> page.</p></section>
        </div>
        <div className="lg:sticky lg:top-28 lg:self-start"><EnquiryPanel title="Ready to start?" text="Tell us about your assignment and we will prepare your WhatsApp message." /></div>
      </Container>
    </>
  );
}
