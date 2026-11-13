import type { Accent } from "@/data/experience";

export type FeatureIcon =
  | "layers"
  | "share"
  | "chart"
  | "users"
  | "calendar"
  | "file"
  | "pen"
  | "shield"
  | "library";

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  accent: Accent;
  logo: string;
  href: string;
  features: { label: string; icon: FeatureIcon }[];
};

export const projects = {
  eyebrow: "Featured Projects",
  headline: [
    { parts: [{ text: "Products", tone: "ivory" as const }] },
    {
      parts: [
        { text: "I’ve ", tone: "ivory" as const },
        { text: "Built & Shaped", tone: "bright" as const },
      ],
    },
  ],
  lede: "A look at the products I’ve worked on — from idea and requirements to execution and real-world impact.",
  items: [
    {
      id: "cogent",
      name: "Cogent AI",
      category: "AI Platform",
      description:
        "Enterprise AI chatbot trained on organization data to deliver accurate, secure and contextual answers.",
      accent: "crimson",
      logo: "/images/cogent.png",
      href: "https://cogentai.ai",
      features: [
        { label: "Knowledge Base", icon: "layers" },
        { label: "Integrations", icon: "share" },
        { label: "Analytics", icon: "chart" },
      ],
    },
    {
      id: "karmik",
      name: "Karmik",
      category: "Recruitment Solution",
      description:
        "End-to-end recruitment platform to streamline hiring from requisition to offer.",
      accent: "forest",
      logo: "/images/karmik.svg",
      href: "https://karmik.carnationinfotech.com",
      features: [
        { label: "Candidate Management", icon: "users" },
        { label: "Interview Scheduling", icon: "calendar" },
        { label: "Offer Letters", icon: "file" },
      ],
    },
    {
      id: "shikshan",
      name: "Shikshan",
      category: "School SaaS",
      description:
        "Multi-language school management platform to simplify academic, administrative and parent engagement.",
      accent: "forest",
      logo: "/images/shikshan.png",
      href: "https://shikshanapp.com",
      features: [
        { label: "Student & Staff Management", icon: "users" },
        { label: "Attendance", icon: "calendar" },
        { label: "Reports & Analytics", icon: "chart" },
      ],
    },
    {
      id: "esignmate",
      name: "eSignMate",
      category: "Document Signing",
      description:
        "Secure and compliant e-signature platform to create, send, and manage documents digitally.",
      accent: "crimson",
      logo: "/images/esignmate.png",
      href: "https://esignmate.vercel.app",
      features: [
        { label: "Create & Send", icon: "pen" },
        { label: "Audit Trail", icon: "shield" },
        { label: "Templates & Library", icon: "library" },
      ],
    },
  ] satisfies Project[],
};
