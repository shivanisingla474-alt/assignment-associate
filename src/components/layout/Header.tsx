import Link from "next/link";
import Image from "next/image";
import { site, routes } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SimpleNav } from "./SimpleNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href={routes.home} aria-label={`${site.name} home`} className="flex items-center transition-transform duration-200 hover:scale-105">
          <Image src="/logo-cap.png" alt={site.name} width={368} height={261} priority className="h-11 w-auto md:h-14" />
        </Link>
        <SimpleNav />
        <MobileNav />
      </Container>
    </header>
  );
}
