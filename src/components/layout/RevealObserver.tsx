"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Fallback for browsers without CSS scroll-driven animations: fade sections in as they enter the screen. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    if (CSS.supports("animation-timeline: view()") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.remove("reveal-pending"); en.target.classList.add("reveal-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => { if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("reveal-pending"); io.observe(el); } });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
