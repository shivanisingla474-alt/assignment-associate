import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Wave } from "@/components/ui/Wave";
import { site } from "@/config/site";


const promises = [
  "Assignments tailored to your brief, subject and deadline",
  "Structured content, relevant research and clear presentation",
  "Referencing, formatting and quality checks to match your requirements",
];

const chips = [
  { label: "Customised Content", pos: "left-0 top-[10%]" },
  { label: "Research ", pos: "right-0 top-[20%]" },
  { label: "Referencing", pos: "left-[2%] bottom-[18%]" },
  { label: "Quality Checks", pos: "right-[2%] bottom-[8%]" },
];

export function BrandFeature() {
  return (
    <section id="brand" aria-labelledby="brand-title" className="dark-section on-dark relative overflow-hidden py-28 text-white md:py-40">
      <Wave position="top" fill="#ffffff" />
      <p aria-hidden className="pointer-events-none absolute inset-x-0 bottom-10 select-none whitespace-nowrap text-center font-display text-[11vw] font-semibold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)]">{site.name}</p>
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-rose">Meet {site.name}</p>
          <h2 id="brand-title" className="reveal mt-4 text-4xl leading-[1.05] md:text-6xl">
Your assignment, from <span className="text-gradient-light">brief</span> to polished final document.
</h2>
          <p className="reveal mt-6 max-w-xl text-lg text-white/80">
{site.name} helps students get assignments prepared according to their specific requirements. From developing the content and organising research to structuring answers and following academic guidelines, each assignment is approached with care and attention to detail.
</p>
          <p className="reveal mt-4 max-w-xl text-white/65"> 
Share your assignment brief, subject, word count, referencing style and deadline. We tailor the preparation process to your instructions and keep you informed about the progress.
</p>
          <ul className="reveal mt-8 space-y-3">
            {promises.map((p) => (<li key={p} className="flex items-start gap-3 text-white/90"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand"><Check aria-hidden size={12} /></span>{p}</li>))}
          </ul>
          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#start" variant="primaryOnDark">Start your enquiry</ButtonLink>
            <ButtonLink href="/about" variant="outlineOnDark">About {site.name}</ButtonLink>
          </div>
        </div>
        <div className="reveal relative mx-auto aspect-square w-full max-w-[26rem]">
          <div aria-hidden className="absolute inset-0 rounded-full border border-white/15" />
          <div aria-hidden className="absolute inset-[9%] rounded-full border border-white/10" />
          <div aria-hidden className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(159,8,59,0.5),transparent)]" />
          <Image src="/logo.png" alt={`${site.name} logo`} width={512} height={512} className="absolute inset-[17%] h-[66%] w-[66%] rounded-full shadow-2xl shadow-black/50" />
          {chips.map((c) => (<span key={c.label} className={`absolute ${c.pos} inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm backdrop-blur`}><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rose" />{c.label}</span>))}
        </div>
      </Container>
      <Wave fill="#fbf8f5" />
    </section>
  );
}
