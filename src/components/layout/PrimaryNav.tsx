"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { NAV_ITEMS, type SectionId } from "@/data/navigation";
import { prefersReducedMotion } from "@/animations/sectionTimeline";

type PrimaryNavProps = {
  section: SectionId;
  onNavigate: (id: SectionId) => void;
};

export function PrimaryNav({ section, onNavigate }: PrimaryNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const placed = useRef(false);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const bar = barRef.current;
    if (!nav || !bar) return;

    const place = () => {
      const active = nav.querySelector<HTMLElement>("[data-active='true']");
      if (!active) return;
      const navBox = nav.getBoundingClientRect();
      const box = active.getBoundingClientRect();
      const left = box.left - navBox.left;
      const width = Math.ceil(box.width);
      if (width < 1) return;
      const vars = { x: 0, scaleX: 1, left, width };
      if (!placed.current || prefersReducedMotion()) {
        placed.current = true;
        gsap.set(bar, vars);
        return;
      }
      gsap.to(bar, { ...vars, duration: 0.35, ease: "power3.out", overwrite: "auto" });
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(nav);
    let alive = true;
    document.fonts?.ready.then(() => {
      if (alive) place();
    });
    return () => {
      alive = false;
      observer.disconnect();
      gsap.killTweensOf(bar);
    };
  }, [section]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="relative hidden min-[1180px]:flex items-center gap-[clamp(2rem,5.4vw,5.75rem)]"
    >
      {NAV_ITEMS.map((item) => {
        const active = item.id === section;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-active={active ? "true" : "false"}
            aria-current={active ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.id);
            }}
            className={`text-[13px] font-medium tracking-[0.16em] uppercase transition-colors duration-200 ${
              active ? "text-ivory" : "text-ivory/75 hover:text-ivory"
            }`}
          >
            {item.label}
          </a>
        );
      })}
      <span
        ref={barRef}
        aria-hidden="true"
        className="absolute -bottom-[11px] h-[3px] bg-bright"
        style={{ left: 0, width: 0 }}
      />
    </nav>
  );
}
