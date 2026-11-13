export type Accent = "crimson" | "forest";

export const experience = {
  eyebrow: "Experience",
  headline: [
    { parts: [{ text: "My Journey", tone: "ivory" as const }] },
    { parts: [{ text: "So Far", tone: "bright" as const }] },
  ],
  lede: "4+ years of experience at the intersection of product, business, and data — from understanding problems to delivering impactful solutions.",
  roles: [
    {
      id: "product",
      title: "Associate Product Manager",
      focus: "Product · Strategy · Execution",
      summary:
        "Driving product vision, roadmap, and delivery for AI and SaaS products, with a focus on business impact and user adoption.",
      duration: "Present",
      accent: "crimson" as Accent,
      icon: "box" as const,
    },
    {
      id: "business",
      title: "Business Analyst",
      focus: "Requirements · Analysis · Solution Design",
      summary:
        "Worked on Resource Management System (RMS) and Karmik (Recruitment Solution) — from requirement gathering to solution implementation.",
      duration: "≈ 2.5 Years",
      accent: "forest" as Accent,
      icon: "chart" as const,
    },
    {
      id: "data",
      title: "Data Analyst",
      focus: "Analytics · Insights · Optimization",
      summary:
        "Analysed recruitment and resource management data to uncover trends, improve efficiency, and support data-driven decisions.",
      duration: "≈ 1 Years",
      accent: "crimson" as Accent,
      icon: "database" as const,
    },
  ],
  highlights: [
    { id: "years", icon: "rocket" as const, value: "4+ Years", caption: "Total Experience" },
    { id: "products", icon: "layers" as const, value: "4 Products", caption: "Built & Enhanced" },
    {
      id: "domains",
      icon: "users" as const,
      value: "Multiple Domains",
      caption: "HR, Education, Healthcare & More",
    },
    { id: "impact", icon: "target" as const, value: "Impact Driven", caption: "From Insight to Execution" },
  ],
};
