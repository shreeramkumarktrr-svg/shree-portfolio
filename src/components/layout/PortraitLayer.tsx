"use client";

import Image from "next/image";
import type { SectionId } from "@/data/navigation";

type PortraitLayerProps = {
  section: SectionId;
  scene: SectionId;
};

export function PortraitLayer({ section, scene }: PortraitLayerProps) {
  const show =
    section === "home" ||
    section === "about" ||
    scene === "home" ||
    scene === "about";

  return (
    <div
      aria-hidden={!show}
      className={`home-portrait pointer-events-none absolute inset-x-0 top-0 z-[1] mx-auto h-[50vh] max-w-full overflow-hidden transition-opacity duration-500 min-[1180px]:inset-x-auto min-[1180px]:top-[6%] min-[1180px]:bottom-[-2.5%] min-[1180px]:left-[1.5%] min-[1180px]:mx-0 min-[1180px]:h-auto ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src="/images/shree-ram-kumar.png"
        alt=""
        width={1166}
        height={1349}
        priority
        className="mx-auto h-full w-auto max-w-full select-none object-contain object-top min-[1180px]:max-w-none"
        style={{
          width: "auto",
          height: "100%",
          filter:
            "drop-shadow(-14px 4px 12px rgba(255, 18, 28, 0.32)) drop-shadow(-3px 0 4px rgba(255, 36, 44, 0.22))",
        }}
      />
    </div>
  );
}
