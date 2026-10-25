import Link from "next/link";
import { Container } from "./Container";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-rule bg-paper-deep/50">
      <Container>
        <ol className="flex flex-wrap gap-x-2 py-3 text-sm text-ink-soft">
          {items.map((it, i) => (
            <li key={it.label} className="flex gap-2">
              {it.href ? <Link href={it.href} className="underline underline-offset-4 hover:text-ink">{it.label}</Link> : <span aria-current="page" className="text-ink">{it.label}</span>}
              {i < items.length - 1 && <span aria-hidden>/</span>}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
