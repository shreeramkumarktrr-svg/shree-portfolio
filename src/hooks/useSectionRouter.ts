"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { SECTIONS, isSectionId, type SectionId } from "@/data/navigation";

function readHash(): SectionId {
  const value = window.location.hash.replace("#", "").toLowerCase();
  return isSectionId(value) ? value : "home";
}

export function useSectionRouter() {
  const [section, setSection] = useState<SectionId>("home");
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const current = readHash();
    setSection(current);
    if (!isSectionId(window.location.hash.replace("#", "").toLowerCase())) {
      window.history.replaceState(null, "", "#home");
    }
    setReady(true);

    const sync = () => setSection(readHash());
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  const navigate = useCallback((id: SectionId) => {
    const next = `#${id}`;
    if (window.location.hash.toLowerCase() === next) {
      setSection(id);
      return;
    }
    window.history.pushState(null, "", next);
    setSection(id);
  }, []);

  const sectionRef = useRef(section);
  sectionRef.current = section;

  useEffect(() => {
    let accumulated = 0;
    let lockedUntil = 0;
    let touchStartY = 0;
    let touchHandled = false;

    const blocked = () =>
      Boolean(document.querySelector("[data-menu-overlay], [data-dialog]"));

    const canScrollSection = (direction: number) => {
      const main = document.getElementById("content");
      if (!main) return false;
      const overflow = getComputedStyle(main).overflowY;
      if (overflow !== "auto" && overflow !== "scroll") return false;
      if (direction > 0) {
        return main.scrollTop + main.clientHeight < main.scrollHeight - 2;
      }
      return main.scrollTop > 2;
    };

    const step = (direction: number) => {
      if (!direction || blocked()) return;
      if (Date.now() < lockedUntil) return;
      const index = SECTIONS.indexOf(sectionRef.current);
      const next = SECTIONS[index + direction];
      if (!next) return;
      lockedUntil = Date.now() + 980;
      navigate(next);
    };

    const onWheel = (event: WheelEvent) => {
      const direction = Math.sign(event.deltaY);
      if (!direction || blocked()) return;
      if (canScrollSection(direction)) return;
      event.preventDefault();
      if (Date.now() < lockedUntil) return;
      accumulated += event.deltaY;
      if (Math.abs(accumulated) < 42) return;
      accumulated = 0;
      step(direction);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
      touchHandled = false;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchHandled || blocked()) return;
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - currentY;
      const direction = Math.sign(delta);
      if (!direction || Math.abs(delta) < 48) return;
      if (canScrollSection(direction)) return;
      event.preventDefault();
      touchHandled = true;
      step(direction);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [navigate]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) {
        return;
      }
      if (document.querySelector("[data-menu-overlay], [data-dialog]")) return;

      const index = SECTIONS.indexOf(section);
      const delta = event.key === "ArrowRight" ? 1 : -1;
      const next = SECTIONS[index + delta];
      if (!next) return;
      event.preventDefault();
      navigate(next);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, section]);

  return { section, navigate, ready };
}
