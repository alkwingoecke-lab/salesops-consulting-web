"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import { observeElement, unobserveElement } from "@/lib/intersectionObserver";

export function FadeIn({ children, delay = 0, immediate = false, className = "" }: { children: ReactNode; delay?: number; immediate?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(immediate);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    if (immediate || mq.matches) { setIsVisible(true); return; }
    if (ref.current) observeElement(ref.current, () => setIsVisible(true));
    return () => { if (ref.current) unobserveElement(ref.current); };
  }, [immediate]);

  return (
    <div
      ref={immediate || reducedMotion ? undefined : ref}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: reducedMotion ? "0s" : `${delay}s` }}
    >
      {children}
    </div>
  );
}