"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { site } from "@/config/site";

/** Short opening transition (about 1.8 s). Plays once, only when the visit starts on the home page. */
export function Intro() {
  const pathname = usePathname();
  const [startedOnHome] = useState(() => pathname === "/");
  const [gone, setGone] = useState(false);
  if (!startedOnHome || gone) return null;
  return (
    <div
      aria-hidden
      className="intro"
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === "intro-curtain") {
          setGone(true);
          setTimeout(() => { document.documentElement.dataset.intro = "off"; }, 900);
        }
      }}
    >
      <div className="intro-inner">
        <Image src="/logo-cap.png" alt="" width={368} height={261} priority className="intro-logo h-24 w-auto sm:h-28" />
        <p className="intro-name">{site.name}</p>
        <span className="intro-line" />
      </div>
    </div>
  );
}
