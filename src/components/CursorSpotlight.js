"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = null;
    const handleMove = (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(212,175,55,0.08), transparent 40%)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-40 hidden md:block transition-[background] duration-100"
      aria-hidden="true"
    />
  );
}
