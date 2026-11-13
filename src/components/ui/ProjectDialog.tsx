"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import { Glyph, type GlyphName } from "@/components/ui/Glyph";
import { ProjectMark } from "@/components/ui/ProjectMark";

const tileTone = {
  crimson: "border border-[#ff4450]/70 bg-[#1a0c10] shadow-[0_0_14px_rgba(255,24,32,0.22)]",
  forest: "border border-[#3d9a6c]/70 bg-[#0c1c16] shadow-[0_0_14px_rgba(24,140,80,0.2)]",
};

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
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
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-6"
      role="presentation"
      onClick={onClose}
    >
      <div
        data-dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="w-full max-w-lg rounded-2xl border border-ivory/15 bg-[#0c100e] p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <span className={`grid size-12 place-items-center rounded-xl ${tileTone[project.accent]}`}>
            <ProjectMark logo={project.logo} name={project.name} />
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid size-9 place-items-center text-ivory hover:text-bright"
          >
            <X className="size-5" strokeWidth={1.6} />
          </button>
        </div>
        <p className="mt-5 text-[12px] font-medium tracking-[0.14em] text-bright uppercase">
          {project.category}
        </p>
        <h2 id="project-dialog-title" className="mt-2 font-display text-4xl font-semibold text-ivory">
          {project.name}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-5 flex flex-col gap-2">
          {project.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-3 text-[14px] text-ivory">
              <Glyph name={feature.icon as GlyphName} className="size-4 text-bright" />
              {feature.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
