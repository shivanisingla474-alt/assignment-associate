import Link from "next/link";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/config/faq";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">FAQ</p>
          <h2 id="faq-title" className="mt-3 text-3xl leading-[1.1] md:text-5xl">Questions about assignment help</h2>
          <p className="mt-5 text-lg text-ink-soft">Straight answers about what we do, what we do not, and how an enquiry works.</p>
          <Link href="/faq" className="mt-5 inline-block font-medium text-brand underline underline-offset-4">View all questions</Link>
        </div>
        <div className="reveal border-t border-ink">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-rule">
              <summary className="flex min-h-16 items-center justify-between gap-6 py-4 text-lg font-medium transition-colors group-hover:text-brand">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-deep text-brand"><Plus aria-hidden size={18} className="faq-plus" /></span>
              </summary>
              <p className="max-w-2xl pb-6 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
