type HeadingPart = { text: string; tone: "ivory" | "bright" };

export function DisplayHeading({
  id,
  lines,
  size = "md",
  as: Tag = "h1",
}: {
  id: string;
  lines: { parts: HeadingPart[] }[];
  size?: "md" | "lg";
  as?: "h1" | "h2";
}) {
  const sizeClass =
    size === "lg"
      ? "text-[clamp(2.3rem,7.4vw,3rem)] min-[1180px]:whitespace-nowrap min-[1180px]:text-[clamp(2.5rem,3.5vw,3.7rem)]"
      : "text-[clamp(2rem,6.4vw,2.6rem)] min-[1180px]:whitespace-nowrap min-[1180px]:text-[clamp(2.05rem,2.8vw,3rem)]";

  return (
    <Tag
      id={id}
      className={`font-display font-semibold tracking-[-0.02em] leading-[0.92] ${sizeClass}`}
    >
      {lines.map((line, index) => (
        <span key={index} data-reveal="heading" className="block min-[1180px]:whitespace-nowrap">
          {line.parts.map((part) => (
            <span key={part.text} className={part.tone === "bright" ? "text-bright" : "text-ivory"}>
              {part.text}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
