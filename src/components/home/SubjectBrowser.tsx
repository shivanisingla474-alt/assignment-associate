"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { subjectCategories } from "@/data/catalog";

export function SubjectBrowser() {
  const [active, setActive] = useState(subjectCategories[0].slug);
  const cat = subjectCategories.find((c) => c.slug === active) ?? subjectCategories[0];
  return (
    <div className="grid gap-6 lg:grid-cols-[19rem_1fr] lg:gap-10">
      <div role="tablist" aria-label="Subject categories" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
        {subjectCategories.map((c) => (
          <button key={c.slug} role="tab" id={`tab-${c.slug}`} aria-selected={c.slug === active} aria-controls="subject-panel" type="button" onClick={() => setActive(c.slug)}
            className={`min-h-12 shrink-0 rounded-lg border px-4 py-2 text-left font-medium transition-all duration-200 lg:px-5 ${c.slug === active ? "border-brand bg-brand text-white shadow-md" : "border-rule bg-white text-ink hover:border-brand hover:text-brand"}`}>
            {c.title}
          </button>
        ))}
      </div>
      <div key={cat.slug} id="subject-panel" role="tabpanel" aria-labelledby={`tab-${cat.slug}`} className="panel-in gradient-border p-6 sm:p-8">
        <h3 className="text-2xl md:text-3xl">{cat.title}</h3>
        <p className="mt-1 text-ink-soft">{cat.blurb}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {cat.subjects.map((s) => (
            <li key={s.slug}>
              <Link href={`/subjects/${cat.slug}/${s.slug}`} className="group flex h-full items-start justify-between gap-3 rounded-lg border border-rule bg-paper p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-white hover:shadow-md">
                <span><span className="block font-medium">{s.title}</span><span className="mt-0.5 block text-sm text-ink-soft">{s.topics.slice(0, 3).join(" · ")}</span></span>
                <ArrowUpRight aria-hidden size={18} className="mt-1 shrink-0 text-brand opacity-60 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
