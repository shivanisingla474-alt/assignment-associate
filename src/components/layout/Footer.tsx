import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { subjectCategories, enquiryHref } from "@/data/catalog";
import { directChatUrl } from "@/lib/contact";

const link = "text-white/70 transition-colors hover:text-white hover:underline underline-offset-4";

export function Footer() {
  const chat = directChatUrl();
  return (
    <footer className="dark-section on-dark text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image src="/logo.png" alt={site.name} width={512} height={512} className="h-28 w-28" />
          <p className="mt-5 max-w-sm text-white/70">Guidance on your own assignments, for students in every country. You write it; we help you do it well.</p>
        </div>
        <nav aria-label="Footer explore">
          <p className="font-medium">Explore</p>
          <ul className="mt-4 space-y-2.5">
            <li><Link href="/subjects" className={link}>Subjects</Link></li>
            <li><Link href="/about" className={link}>About us</Link></li>
            <li><Link href="/how-it-works" className={link}>How it works</Link></li>
            <li><Link href="/faq" className={link}>FAQ</Link></li>
            <li><Link href="/contact" className={link}>Contact</Link></li>
          </ul>
        </nav>
        <nav aria-label="Footer subjects">
          <p className="font-medium">Subject areas</p>
          <ul className="mt-4 space-y-2.5">{subjectCategories.map((c) => (<li key={c.slug}><Link href={`/subjects/${c.slug}`} className={link}>{c.title}</Link></li>))}</ul>
        </nav>
        <div>
          <p className="font-medium">Get in touch</p>
          <ul className="mt-4 space-y-2.5">
            <li><Link href={enquiryHref()} className={link}>Start an enquiry</Link></li>
            {chat && <li><a href={chat} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp {site.whatsappDisplay}</a></li>}
            {site.contactEmail && <li><a href={`mailto:${site.contactEmail}`} className={link}>{site.contactEmail}</a></li>}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <p>&copy; {site.name}.Assignment preparation services tailored to your subject, requirements and deadline. </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          <li><Link href="/privacy" className={link}>Privacy policy</Link></li>
          <li><Link href="/terms" className={link}>Terms of service</Link></li>
          <li><Link href="/academic-integrity" className={link}>Academic integrity</Link></li>
        </ul>
      </Container>
    </footer>
  );
}
