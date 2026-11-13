"use client";

import { Menu } from "lucide-react";
import type { SectionId } from "@/data/navigation";
import { BrandMark } from "@/components/layout/BrandMark";
import { PrimaryNav } from "@/components/layout/PrimaryNav";

type HeaderProps = {
  section: SectionId;
  onNavigate: (id: SectionId) => void;
  menuOpen: boolean;
  onMenuToggle: () => void;
};

export function Header({
  section,
  onNavigate,
  menuOpen,
  onMenuToggle,
}: HeaderProps) {
  return (
    <header className="relative z-30 flex h-[78px] items-center px-[4.7vw]">
      <a
        href="#home"
        aria-label="Shree Ram Kumar, home"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("home");
        }}
        className="shrink-0"
      >
        <BrandMark />
      </a>
      <span aria-hidden="true" className="mx-[2.1vw] h-[26px] w-px shrink-0 bg-[#8d9092]" />
      <PrimaryNav section={section} onNavigate={onNavigate} />
      <div className="ml-auto flex items-center gap-[1.35vw]">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={onMenuToggle}
          className="grid size-10 place-items-center text-ivory transition-colors hover:text-bright"
        >
          <Menu strokeWidth={1.5} className="size-[22px]" />
        </button>
      </div>
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-ivory/20" />
    </header>
  );
}
