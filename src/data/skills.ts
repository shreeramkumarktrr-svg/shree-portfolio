import type { Accent } from "@/data/experience";

export const skills = {
  eyebrow: "Skills & Expertise",
  headline: [
    { parts: [{ text: "A Well-Rounded", tone: "ivory" as const }] },
    { parts: [{ text: "Product Professional", tone: "bright" as const }] },
  ],
  lede: "A blend of product, business, data, and technology skills to turn ideas into scalable and impactful solutions.",
  groups: [
    {
      id: "product",
      title: "Product Management",
      icon: "layers" as const,
      accent: "crimson" as Accent,
      lines: ["Product Strategy · Roadmap · Execution", "Agile · Stakeholder Management"],
    },
    {
      id: "business",
      title: "Business Analysis",
      icon: "chart" as const,
      accent: "forest" as Accent,
      lines: ["Requirement Analysis · Elicitation", "Impact Analysis · Business Acumen"],
    },
    {
      id: "data",
      title: "Data & Analytics",
      icon: "network" as const,
      accent: "forest" as Accent,
      lines: ["Data Analysis · Visualization · Insights", "Problem Solving · Decision Support"],
    },
    {
      id: "technical",
      title: "Technical & Tools",
      icon: "code" as const,
      accent: "crimson" as Accent,
      lines: ["Product Tools · Data Tools · Development Basics", "Automation · Integrations"],
    },
  ],
  toolbox: {
    eyebrow: "Toolbox",
    headline: [
      { parts: [{ text: "Tools &", tone: "ivory" as const }] },
      { parts: [{ text: "Technologies", tone: "bright" as const }] },
    ],
    tools: [
      { id: "powerbi", label: "Power BI" },
      { id: "mysql", label: "MySQL" },
      { id: "python", label: "Python" },
      { id: "excel", label: "Excel" },
      { id: "jira", label: "Jira" },
      { id: "figma", label: "Figma" },
      { id: "confluence", label: "Confluence" },
      { id: "tableau", label: "Tableau" },
      { id: "cursor", label: "Cursor" },
      { id: "sharepoint", label: "SharePoint" },
      { id: "ga", label: "Google Analytics" },
      { id: "more", label: "& More" },
    ],
    more: ["Pandas", "NumPy"],
  },
};
