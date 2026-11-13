import gsap from "gsap";

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function nodes(stage: HTMLElement, name: string) {
  return stage.querySelectorAll<HTMLElement>(`[data-reveal="${name}"]`);
}

export function clearStage(stage: HTMLElement) {
  gsap.set([stage, ...stage.querySelectorAll<HTMLElement>("[data-reveal]")], {
    clearProps: "opacity,transform",
  });
}

/** Reveal headings, then copy, then cards. Returns the single timeline. */
export function enterStage(stage: HTMLElement) {
  const headings = nodes(stage, "heading");
  const copy = nodes(stage, "copy");
  const cards = nodes(stage, "card");
  const media = nodes(stage, "media");

  gsap.set(stage, { clearProps: "opacity,transform" });

  if (prefersReducedMotion()) {
    clearStage(stage);
    return gsap.timeline();
  }

  gsap.set(headings, { opacity: 0, y: 20 });
  gsap.set(copy, { opacity: 0, y: 14 });
  gsap.set(cards, { opacity: 0, y: 16 });
  gsap.set(media, { opacity: 0, y: 10 });

  const done = "opacity,transform";
  const timeline = gsap.timeline();
  if (media.length) {
    timeline.to(media, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", clearProps: done }, 0);
  }
  if (headings.length) {
    timeline.to(
      headings,
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: "power3.out", clearProps: done },
      0.05,
    );
  }
  if (copy.length) {
    timeline.to(
      copy,
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power3.out", clearProps: done },
      0.18,
    );
  }
  if (cards.length) {
    timeline.to(
      cards,
      { opacity: 1, y: 0, duration: 0.42, stagger: 0.08, ease: "power3.out", clearProps: done },
      0.28,
    );
  }
  return timeline;
}
