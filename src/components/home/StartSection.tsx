import { Container } from "@/components/ui/Container";
import { Wave } from "@/components/ui/Wave";
import { QuickEnquiry } from "./QuickEnquiry";

export function StartSection() {
  return (
    <section id="start" aria-labelledby="start-title" className="dark-section on-dark relative overflow-hidden pb-32 pt-28 text-white md:pb-40 md:pt-36">
      <Wave position="top" fill="#f8eaec" />
      <div aria-hidden className="grid-fade pointer-events-none absolute inset-0" />
      <Container className="relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">Get started</p>
          <h2 id="start-title" className="mt-3 text-3xl leading-[1.1] md:text-5xl">Start your enquiry in three steps</h2>
          <p className="mt-4 text-lg text-white/80">
Share your subject, assignment brief, word count, formatting requirements and deadline. Tell us what you need prepared, discuss your requirements and get a quotation before proceeding.
</p>
        </div>
        <div className="reveal mt-10"><QuickEnquiry /></div>
      </Container>
      <Wave fill="#fbf8f5" />
    </section>
  );
}
