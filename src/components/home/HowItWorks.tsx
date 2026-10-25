import Link from "next/link";
import { BookOpen, ClipboardList, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { steps } from "@/data/process";

const icons = [BookOpen, ClipboardList, WhatsAppIcon, GraduationCap];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-paper-deep pb-32 pt-20 md:pt-28">
      <Container>
        
<SectionHeading id="how-title" eyebrow="Our Process" title="From Assignment Brief to Final Delivery" intro="Share your assignment requirements, confirm the scope and timeline, and get your assignment prepared according to your instructions." />

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div aria-hidden className="absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-brand/30 lg:block" />
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.title} className="reveal lift relative rounded-2xl border border-rule bg-white p-6 pt-11 text-center shadow-sm">
                <span className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand to-wine text-white shadow-lg shadow-brand/30"><Icon aria-hidden className="h-6 w-6" size={24} /></span>
                <p className="font-display text-sm font-semibold text-brand" aria-hidden>Step {i + 1}</p>
                <h3 className="mt-1 text-xl">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.body}</p>
              </li>
            );
          })}
  
        </ol>

        <div className="reveal mt-12 text-center text-ink-soft">
          <p>
            Want to know more about our assignment preparation process?
          </p>
          <Link
            href="/how-it-works"
            className="font-medium text-brand underline underline-offset-4"
          >
            Read more about how it works
          </Link>
        </div>
      </Container>
    </section>

  );
}
