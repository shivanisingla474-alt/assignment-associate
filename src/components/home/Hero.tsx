import { Globe, PenLine, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Wave } from "@/components/ui/Wave";
import { site } from "@/config/site";
import { HeroAnimation } from "./HeroAnimation";

const hd = (s: number) => ({ "--hd": `${s}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero-dark on-dark relative overflow-hidden text-white"
    >
      <div
        aria-hidden
        className="grid-fade pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="drift pointer-events-none absolute -right-24 top-6 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
      />
      <Container className="relative grid items-center gap-10 pb-32 pt-12 sm:pt-16 lg:grid-cols-[1.25fr_0.9fr] lg:gap-8 lg:pb-44 lg:pt-20">
        <div>
          <p
            className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-1.5 pl-2 pr-4 text-sm font-medium backdrop-blur"
            style={hd(0)}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <Image
                src="/logo-cap.png"
                alt=""
                width={368}
                height={261}
                className="h-4 w-auto"
              />
            </span>
            {site.name}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.1rem,4.2vw,3.5rem)] font-semibold leading-[1.04] sm:text-[clamp(2.4rem,5.4vw,3.5rem)]"
          >
            <span className="hero-rise block" style={hd(0.08)}>
              Your Assignment.
            </span>
            <span className="hero-rise block" style={hd(0.2)}>
              Prepared with Care.
            </span>
            <span
              className="hero-rise text-gradient-light block pb-1"
              style={hd(0.32)}
            >
              Delivered with Confidence.
            </span>
          </h1>
          <p
            className="hero-rise mt-6 max-w-xl text-lg text-white/85 sm:text-xl"
            style={hd(0.45)}
          >
            Professional assignment preparation tailored to your subject, brief,
            formatting requirements and deadline. Share your requirements and
            get personalised support for your academic work.
          </p>
          <div
            className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={hd(0.55)}
          >
            <ButtonLink
              href="/#start"
              variant="primaryOnDark"
              className="text-lg"
            >
              Get assignment Assistance
              <ArrowRight aria-hidden size={18} />
            </ButtonLink>
            <ButtonLink
              href="/#how-it-works"
              variant="outlineOnDark"
              className="text-lg"
            >
              See how it works
            </ButtonLink>
          </div>
          <ul
            className="hero-rise mt-9 grid gap-3 text-sm text-white/75 sm:grid-cols-3"
            style={hd(0.65)}
          >
            <li className="flex items-center gap-2">
              <Globe aria-hidden size={18} className="shrink-0 text-rose" />
              Students from any country
            </li>
            <li className="flex items-center gap-2">
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem] shrink-0 text-rose" />
              Chat with us on WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <PenLine aria-hidden size={18} className="shrink-0 text-rose" />
              Prepared to match your brief
            </li>
          </ul>
        </div>
        <div className="hero-rise relative mt-2 lg:mt-0" style={hd(0.3)}>
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(159,8,59,0.55),transparent)]"
          />
          <HeroAnimation />
        </div>
      </Container>
      <Wave fill="#fbf8f5" />
    </section>
  );
}
