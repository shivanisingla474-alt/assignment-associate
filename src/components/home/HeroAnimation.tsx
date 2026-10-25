"use client";

import dynamic from "next/dynamic";

const LottieClient = dynamic(() => import("./LottieClient"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden />,
});

export function HeroAnimation() {
  return (
    <div className="mx-auto aspect-square w-full max-w-[22rem] sm:max-w-md lg:max-w-lg" role="img" aria-label="Animation of an assignment being planned and written, with a graduation cap above it">
      <LottieClient />
    </div>
  );
}
