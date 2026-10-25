import Link from "next/link";
import * as Flags from "country-flag-icons/react/3x2";
import { allCountries, enquiryHref } from "@/data/catalog";

const codes: Record<string, keyof typeof Flags> = {
  India: "IN", Pakistan: "PK", Bangladesh: "BD", "Sri Lanka": "LK", Nepal: "NP", Singapore: "SG", Malaysia: "MY",
  Philippines: "PH", Australia: "AU", "New Zealand": "NZ", "United Kingdom": "GB", Ireland: "IE", Germany: "DE",
  France: "FR", Netherlands: "NL", Spain: "ES", Italy: "IT", Sweden: "SE", "United States": "US", Canada: "CA",
  Mexico: "MX", Brazil: "BR", "United Arab Emirates": "AE", "Saudi Arabia": "SA", Qatar: "QA", Nigeria: "NG",
  Kenya: "KE", Ghana: "GH", "South Africa": "ZA", Egypt: "EG",
};
const widths = ["w-12 sm:w-16", "w-14 sm:w-20", "w-10 sm:w-14", "w-16 sm:w-24", "w-12 sm:w-[4.5rem]"];

/** Flags floating on the background. No boxes. */
export function CountryFlags() {
  return (
    <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10">
      {allCountries.map((c, i) => {
        const Flag = codes[c] ? Flags[codes[c]] : null;
        if (!Flag) return null;
        const style = { "--r": `${((i * 37) % 13) - 6}deg`, "--d": `${(i % 7) * -0.9}s` } as React.CSSProperties;
        return (
          <li key={c} style={{ marginTop: `${((i * 53) % 5) * 6}px` }}>
            <Link href={enquiryHref({ country: c })} title={c} className="flag-link block">
              <Flag aria-hidden style={style} className={`flag-float h-auto rounded-[5px] ${widths[i % widths.length]}`} />
              <span className="sr-only">Get assignment help from {c}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
