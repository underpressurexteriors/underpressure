"use client";

import { useEffect } from "react";

/**
 * Fail-safe scroll-reveal.
 *
 * On mount, checks each .reveal element's actual position. Anything
 * already visible in (or very near) the viewport is left alone - it
 * was already rendered visible by CSS and just stays that way. Only
 * elements confirmed to be below the fold get the "pending" (hidden)
 * treatment and are then animated in via IntersectionObserver as the
 * person scrolls down.
 *
 * This means there is no code path where real content depends on JS
 * finishing before it's visible - the worst case if JS is slow, fails,
 * or is disabled is simply no animation, never missing content.
 */
export default function RevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay || 0);
            window.setTimeout(() => el.classList.add("is-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const belowFold = rect.top > viewportH * 1.05;
      if (belowFold) {
        el.classList.add("reveal-pending");
        observer.observe(el);
      }
      // Elements already in/near the initial viewport are left as-is:
      // visible by default CSS, no animation needed or attempted.
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
