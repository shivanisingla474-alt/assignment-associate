import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { subjectCategories } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/subjects", "/how-it-works", "/faq", "/about", "/contact", "/privacy", "/terms", "/academic-integrity",
    ...subjectCategories.flatMap((c) => [`/subjects/${c.slug}`, ...c.subjects.map((s) => `/subjects/${c.slug}/${s.slug}`)]),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
