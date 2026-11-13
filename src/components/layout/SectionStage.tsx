"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import type { SectionId } from "@/data/navigation";
import { clearStage, enterStage, prefersReducedMotion } from "@/animations/sectionTimeline";

type SectionStageProps = {
  section: SectionId;
  ready: boolean;
  onShown: (section: SectionId) => void;
  children: (shown: SectionId) => ReactNode;
};

export function SectionStage({ section, ready, onShown, children }: SectionStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const shownRef = useRef<SectionId | null>(null);
  const destinationRef = useRef(section);
  const generation = useRef(0);
  const [shown, setShown] = useState<SectionId | null>(null);

  useLayoutEffect(() => {
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (shown) onShown(shown);
  }, [shown, onShown]);

  useLayoutEffect(() => {
    if (!ready) return;
    destinationRef.current = section;
    const stage = stageRef.current;

    if (shownRef.current === null) {
      shownRef.current = section;
      setShown(section);
      return;
    }

    if (section === shownRef.current && timelineRef.current?.data?.phase !== "exit") {
      return;
    }

    if (prefersReducedMotion()) {
      generation.current += 1;
      timelineRef.current?.kill();
      timelineRef.current = null;
      if (stage) clearStage(stage);
      if (section !== shownRef.current) {
        shownRef.current = section;
        setShown(section);
      }
      return;
    }

    const running = timelineRef.current;
    if (running?.data?.phase === "exit") return;

    running?.kill();
    if (!stage) return;

    const token = ++generation.current;
    stage.style.pointerEvents = "none";
    const timeline = gsap.timeline({
      onComplete: () => {
        if (timelineRef.current === timeline) timelineRef.current = null;
      },
    });
    timeline.data = { phase: "exit" };
    timelineRef.current = timeline;
    timeline.to(stage, { opacity: 0, y: -16, duration: 0.3, ease: "power2.in" });
    timeline.to({}, { duration: 0.12 });
    timeline.call(() => {
      if (token !== generation.current) return;
      if (timelineRef.current === timeline) timelineRef.current = null;
      const next = destinationRef.current;
      stage.style.pointerEvents = "";
      const scroller = stage.closest("main");
      if (scroller) scroller.scrollTop = 0;
      if (next === shownRef.current) {
        const enter = enterStage(stage);
        enter.data = { phase: "enter" };
        timelineRef.current = enter;
        enter.eventCallback("onComplete", () => {
          if (timelineRef.current === enter) timelineRef.current = null;
        });
        return;
      }
      shownRef.current = next;
      setShown(next);
    });
  }, [ready, section]);

  useLayoutEffect(() => {
    if (!shown) return;
    const stage = stageRef.current;
    if (!stage) return;

    stage.style.pointerEvents = "";
    const scroller = stage.closest("main");
    if (scroller) scroller.scrollTop = 0;
    const timeline = enterStage(stage);
    timeline.data = { phase: "enter" };
    timelineRef.current = timeline;
    timeline.eventCallback("onComplete", () => {
      if (timelineRef.current === timeline) timelineRef.current = null;
    });
    return () => {
      timeline.kill();
      if (timelineRef.current === timeline) timelineRef.current = null;
    };
  }, [shown]);

  return (
    <div ref={stageRef} className="h-full">
      {shown ? children(shown) : null}
    </div>
  );
}
