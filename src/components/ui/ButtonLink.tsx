import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "primaryOnDark" | "outlineOnDark" | "dark";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-sm hover:bg-brand-dark hover:shadow-md",
  secondary: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-white",
  primaryOnDark: "bg-white text-ink shadow-sm hover:bg-brand-light",
  outlineOnDark: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  dark: "bg-ink text-white hover:bg-brand-dark",
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: Variant; className?: string }) {
  return (
    <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
