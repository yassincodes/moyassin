import { useEffect, useState } from "react";

export function useIntroSequence(durationMs = 2400) {
  const [introDone, setIntroDone] = useState(false);
  const [navIn, setNavIn] = useState(false);

  useEffect(() => {
    const navTimer = setTimeout(() => setNavIn(true), 900);
    const doneTimer = setTimeout(() => setIntroDone(true), durationMs);
    return () => {
      clearTimeout(navTimer);
      clearTimeout(doneTimer);
    };
  }, [durationMs]);

  return { introDone, navIn };
}

export function useReveal(ref, active = true) {
  useEffect(() => {
    if (!active) return;
    const root = ref.current;
    if (!root) return;

    const nodes = root.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [ref, active]);
}

export function useScrollParallax(active = true) {
  useEffect(() => {
    if (!active || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = document.querySelectorAll("[data-parallax]");
    let ticking = false;

    const update = () => {
      const vh = window.innerHeight;
      layers.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        const shift = Math.max(-1, Math.min(1, progress)) * 28;
        el.style.transform = `translate3d(0, ${shift}px, 0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);
}

export function usePageLive() {
  const [live, setLive] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setLive(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return live;
}
