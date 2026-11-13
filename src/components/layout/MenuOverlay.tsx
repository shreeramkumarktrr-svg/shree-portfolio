"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { NAV_ITEMS, type SectionId } from "@/data/navigation";
import { BrandMark } from "@/components/layout/BrandMark";

type MenuOverlayProps = {
  section: SectionId;
  onNavigate: (id: SectionId) => void;
  onClose: () => void;
};

export function MenuOverlay({ section, onNavigate, onClose }: MenuOverlayProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      id="site-menu"
      data-menu-overlay
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="menu-overlay fixed inset-0 z-40 bg-forest/96"
    >
      <div className="flex h-[78px] items-center px-[4.7vw]">
        <BrandMark />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="ml-auto grid size-10 place-items-center text-ivory transition-colors hover:text-bright"
        >
          <X strokeWidth={1.5} className="size-[22px]" />
        </button>
      </div>
      <nav aria-label="Menu" className="menu-panel px-[4.7vw] pt-[6vh]">
        <ul className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => {
            const active = item.id === section;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "page" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`inline-flex flex-col text-[clamp(2rem,4vw,3.25rem)] leading-none font-medium tracking-[0.14em] uppercase ${
                    active ? "text-bright" : "text-ivory hover:text-bright"
                  }`}
                >
                  {item.label}
                  <span
                    className={`mt-3 h-[3px] bg-bright transition-all ${active ? "w-12" : "w-0"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
