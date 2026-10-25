"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { subjectCategories, enquiryHref } from "@/data/catalog";

export function SubjectExplorer() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const term = q.trim().toLowerCase();

  const groups = useMemo(() =>
    subjectCategories
      .filter((c) => cat === "all" || c.slug === cat)
      .map((c) => ({
        ...c,
        subjects: c.subjects.filter((s) => !term || s.title.toLowerCase().includes(term) || s.topics.some((t) => t.toLowerCase().includes(term))),
      }))
      .filter((c) => c.subjects.length > 0),
  [term, cat]);
  const count = groups.reduce((n, g) => n + g.subjects.length, 0);

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <label htmlFor="subject-search" className="block text-sm font-medium">Search subjects and topics</label>
          <div className="relative mt-1.5">
            <Search aria-hidden size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" />
            <input id="subject-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. statistics, essay structure" className="min-h-12 w-full rounded-sm border border-ink/30 bg-white/70 pl-10 pr-3" />
          </div>
        </div>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {[{ slug: "all", title: "All" }, ...subjectCategories].map((c) => (
            <button key={c.slug} type="button" aria-pressed={cat === c.slug} onClick={() => setCat(c.slug)}
              className={`min-h-11 rounded-sm border px-3 text-sm ${cat === c.slug ? "border-ink bg-ink text-paper" : "border-ink/30 hover:border-ink"}`}>{c.title}</button>
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm text-ink-soft" role="status" aria-live="polite">{count} subject{count === 1 ? "" : "s"} shown</p>

      {count === 0 ? (
        <div className="mt-8 border border-rule p-6">
          <p className="text-lg font-medium">No match for &ldquo;{q}&rdquo;.</p>
          <p className="mt-2 text-ink-soft">The catalogue grows over time. You can still enquire about it.</p>
          <Link href={enquiryHref({ subject: q.trim() })} className="mt-4 inline-block font-medium underline underline-offset-4">Enquire about &ldquo;{q.trim()}&rdquo;</Link>
        </div>
      ) : (
        <div className="mt-8 space-y-12">
          {groups.map((g) => (
            <section key={g.slug} aria-labelledby={`cat-${g.slug}`} className="grid gap-4 border-t border-ink pt-5 md:grid-cols-[1fr_2fr] md:gap-10">
              <div>
                <h2 id={`cat-${g.slug}`} className="text-2xl font-medium"><Link href={`/subjects/${g.slug}`} className="hover:underline underline-offset-4">{g.title}</Link></h2>
                <p className="mt-1 text-ink-soft">{g.blurb}</p>
              </div>
              <ul className="divide-y divide-rule border-y border-rule">
                {g.subjects.map((s) => (
                  <li key={s.slug} className="py-3">
                    <Link href={`/subjects/${g.slug}/${s.slug}`} className="font-medium underline-offset-4 hover:underline">{s.title}</Link>
                    <span className="mt-0.5 block text-sm text-ink-soft">{s.topics.join(" · ")}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
