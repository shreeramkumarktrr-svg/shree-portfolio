"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glyph, type GlyphName } from "@/components/ui/Glyph";
import { ProjectDialog } from "@/components/ui/ProjectDialog";
import { ProjectMark } from "@/components/ui/ProjectMark";

const cardTone = {
  crimson: "border-bright/40 bg-[linear-gradient(180deg,rgba(64,10,14,0.55),rgba(8,10,9,0.2))]",
  forest: "border-[#1c4a36] bg-[linear-gradient(180deg,rgba(8,40,28,0.62),rgba(8,10,9,0.2))]",
};

const tileTone = {
  crimson: "border border-[#ff4450]/70 bg-[#1a0c10] shadow-[0_0_14px_rgba(255,24,32,0.22)]",
  forest: "border border-[#3d9a6c]/70 bg-[#0c1c16] shadow-[0_0_14px_rgba(24,140,80,0.2)]",
};

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section aria-labelledby="projects-heading" className="flex h-auto min-h-full flex-col px-[4.6vw] pt-[4.4vh] pb-28 min-[1180px]:h-full min-[1180px]:pb-[11vh]">
      <div className="grid items-end gap-6 min-[1180px]:grid-cols-[1.05fr_auto_0.95fr]">
        <div>
          <Eyebrow>{projects.eyebrow}</Eyebrow>
          <div className="mt-3">
            <DisplayHeading id="projects-heading" lines={projects.headline} size="lg" />
          </div>
        </div>
        <span aria-hidden="true" className="hidden h-16 w-px bg-ivory/20 min-[1180px]:block" />
        <p data-reveal="copy" className="max-w-[420px] pb-1 text-[15px] leading-[1.6] text-muted">{projects.lede}</p>
      </div>

      <ul className="mt-5 grid flex-1 content-center gap-4 min-[900px]:grid-cols-2">
        {projects.items.map((project) => (
          <li key={project.id} data-reveal="card">
            <button
              type="button"
              onClick={() => setActive(project)}
              className={`group flex h-full w-full flex-col rounded-2xl border px-5 py-4 text-left transition-colors hover:border-ivory/40 ${cardTone[project.accent]}`}
            >
              <span className="flex items-start gap-3">
                <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${tileTone[project.accent]}`}>
                  <ProjectMark logo={project.logo} name={project.name} />
                </span>
                <span className="min-w-0 flex-1 pt-0.5">
                  <span className="flex items-center gap-2">
                    <span className="text-[18px] font-semibold text-ivory">{project.name}</span>
                    <span className="rounded-full border border-ivory/15 px-2.5 py-0.5 text-[11px] text-muted">
                      {project.category}
                    </span>
                  </span>
                  <span className="mt-1 block text-[13.5px] leading-snug text-muted">
                    {project.description}
                  </span>
                </span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-ivory/25 text-ivory transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none">
                  <ArrowUpRight className="size-4" strokeWidth={1.6} aria-hidden="true" />
                </span>
              </span>
              <span className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ivory/10 pt-3 text-[12px] text-faint">
                {project.features.map((feature, index) => (
                  <span key={feature.label} className="inline-flex items-center gap-3">
                    {index > 0 ? <span aria-hidden="true" className="h-3 w-px bg-ivory/20" /> : null}
                    <span className="inline-flex items-center gap-1.5">
                      <Glyph name={feature.icon as GlyphName} className="size-3.5 text-bright" />
                      {feature.label}
                    </span>
                  </span>
                ))}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {active ? <ProjectDialog project={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}
