"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (e: MouseEvent) => {
      node.style.setProperty("--spot-x", `${e.clientX}px`);
      node.style.setProperty("--spot-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
