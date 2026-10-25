import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <Container className="max-w-2xl py-24 text-center">
      <p className="font-display text-6xl text-brand" aria-hidden>404</p>
      <h1 className="mt-4 text-3xl font-medium md:text-4xl">This page could not be found</h1>
      <p className="mt-3 text-ink-soft">The link may be out of date. Try one of these instead.</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ButtonLink href="/">Go to home</ButtonLink>
        <ButtonLink href="/subjects" variant="secondary">Browse subjects</ButtonLink>
      </div>
      <p className="mt-6"><Link href="/contact" className="font-medium text-brand underline underline-offset-4">Get assignment help</Link></p>
    </Container>
  );
}
