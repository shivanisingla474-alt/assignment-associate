"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "./SimpleNav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="md:hidden">
      <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)} className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20">
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
      </button>
      <div id="mobile-menu" inert={!open} className={`absolute inset-x-0 top-full grid border-b border-rule bg-white shadow-lg transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"}`}>
        <nav aria-label="Mobile" className="overflow-hidden">
          <ul className="px-5 pt-2">
            {navLinks.map((l) => (<li key={l.href} className="border-b border-rule"><Link href={l.href} onClick={close} className="block py-4 text-lg">{l.label}</Link></li>))}
          </ul>
          <div className="p-5"><Link href="/#start" onClick={close} className="flex min-h-12 items-center justify-center rounded-md bg-brand font-medium text-white">Get assignment help</Link></div>
        </nav>
      </div>
    </div>
  );
}
