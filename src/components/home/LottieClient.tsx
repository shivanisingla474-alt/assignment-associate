"use client";

import { useEffect, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "@/data/hero-animation.json";

export default function LottieClient() {
  const ref = useRef<LottieRefCurrentProps>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) ref.current?.goToAndStop(170, true);
  }, []);
  return <Lottie lottieRef={ref} animationData={animationData} loop autoplay aria-hidden className="h-full w-full" />;
}
