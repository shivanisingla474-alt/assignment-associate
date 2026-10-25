import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CountryFlags } from "@/components/CountryFlags";
import { enquiryHref } from "@/data/catalog";

export function Countries() {
  return (
    <section id="countries" aria-labelledby="countries-title" className="dots-bg relative overflow-hidden bg-gradient-to-b from-paper to-paper-deep py-20 md:py-28">
      <Container className="relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Worldwide</p>
          <h2 id="countries-title" className="mt-3 text-4xl leading-[1.05] md:text-6xl">Students from <span className="text-gradient">every country</span></h2>
          <p className="mt-5 text-lg text-ink-soft">Wherever you study, you can enquire in the same way. Tap your flag to start.</p>
        </div>
        <div className="reveal mt-14"><CountryFlags /></div>
        <p className="reveal mt-14 text-center text-ink-soft">Your flag is not here? <Link href={enquiryHref()} className="font-medium text-brand underline underline-offset-4">Type your country in the enquiry form.</Link></p>
      </Container>
    </section>
  );
}
