export const SECTIONS = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function isSectionId(value: string): value is SectionId {
  return (SECTIONS as readonly string[]).includes(value);
}
