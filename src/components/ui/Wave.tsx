/** Curved section edge. `fill` is the colour of the neighbouring section. */
export function Wave({ fill, position = "bottom" }: { fill: string; position?: "top" | "bottom" }) {
  return (
    <svg aria-hidden viewBox="0 0 1440 100" preserveAspectRatio="none" className={`pointer-events-none absolute inset-x-0 h-12 w-full sm:h-20 lg:h-24 ${position === "top" ? "top-0 rotate-180" : "bottom-0"}`}>
      <path d="M0,70 C220,10 460,100 720,55 C980,10 1210,85 1440,35 L1440,100 L0,100 Z" fill={fill} />
    </svg>
  );
}
