"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { label: "Subjects", href: "/subjects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SimpleNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
      {navLinks.map((l) => (
        <Link key={l.href} href={l.href} aria-current={pathname.startsWith(l.href) ? "page" : undefined} className="nav-link text-[0.95rem] font-medium text-ink-soft hover:text-ink aria-[current=page]:text-ink">{l.label}</Link>
      ))}
      <Link href="/#start" className="inline-flex min-h-11 items-center rounded-md bg-brand px-5 text-[0.95rem] font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark">Get assignment help</Link>
    </nav>
  );
}
