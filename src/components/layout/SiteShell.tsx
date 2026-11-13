"use client";

import { useCallback, useState } from "react";
import { BackgroundScene } from "@/components/layout/BackgroundScene";
import { Header } from "@/components/layout/Header";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { PortraitLayer } from "@/components/layout/PortraitLayer";
import { SectionStage } from "@/components/layout/SectionStage";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HomeSection } from "@/components/sections/HomeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import type { SectionId } from "@/data/navigation";
import { useSectionRouter } from "@/hooks/useSectionRouter";

export function SiteShell() {
  const { section, navigate, ready } = useSectionRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scene, setScene] = useState<SectionId>("home");

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const onShown = useCallback((id: SectionId) => setScene(id), []);

  const onNavigate = useCallback(
    (id: SectionId) => {
      navigate(id);
      setMenuOpen(false);
    },
    [navigate],
  );

  return (
    <div className="relative h-dvh overflow-hidden bg-forest text-ivory">
      <BackgroundScene section={scene} />
      <Header
        section={section}
        onNavigate={onNavigate}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
      />
      <main id="content" className="relative z-10 h-[calc(100dvh-78px)] overflow-x-clip overflow-y-auto min-[1180px]:overflow-hidden">
        <PortraitLayer section={section} scene={scene} />
        <SectionStage section={section} ready={ready} onShown={onShown}>
          {(shown) => (
            <>
              {shown === "home" ? (
                <HomeSection
                  onExplore={() => onNavigate("projects")}
                  onContact={() => onNavigate("contact")}
                />
              ) : null}
              {shown === "about" ? (
                <AboutSection onExperience={() => onNavigate("experience")} />
              ) : null}
              {shown === "experience" ? <ExperienceSection /> : null}
              {shown === "projects" ? <ProjectsSection /> : null}
              {shown === "skills" ? <SkillsSection /> : null}
              {shown === "contact" ? <ContactSection /> : null}
            </>
          )}
        </SectionStage>
      </main>
      {menuOpen ? (
        <MenuOverlay section={section} onNavigate={onNavigate} onClose={closeMenu} />
      ) : null}
    </div>
  );
}
