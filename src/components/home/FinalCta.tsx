import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { directChatUrl } from "@/lib/contact";

export function FinalCta() {
  const chat = directChatUrl();
  return (
    <section aria-labelledby="cta-title" className="bg-paper pb-20 pt-4 md:pb-28">
      <Container>
        <div className="reveal cta-bg on-dark relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white md:px-16 md:py-20">
          <Image aria-hidden src="/logo-cap.png" alt="" width={368} height={261} className="pointer-events-none absolute -right-10 -top-6 h-48 w-auto opacity-[0.07] md:h-72" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-rose">Ready when you are</p>
          <h2 id="cta-title" className="relative mx-auto mt-3 max-w-3xl text-4xl leading-[1.05] md:text-6xl">Have an assignment on your desk? <span className="text-gradient-light">Tell us about it.</span></h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/80">Share the subject, the deadline and what the assignment asks for. We will pick it up on WhatsApp.</p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/#start" variant="primaryOnDark" className="text-lg">Start your enquiry<ArrowRight aria-hidden size={18} /></ButtonLink>
            {chat && <a href={chat} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-6 text-lg font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"><WhatsAppIcon className="h-5 w-5" />Message us directly</a>}
          </div>
        </div>
      </Container>
    </section>
  );
}
