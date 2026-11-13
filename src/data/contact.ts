export const contact = {
  eyebrow: "Let’s Connect",
  headline: [
    { parts: [{ text: "Let’s Build", tone: "ivory" as const }] },
    { parts: [{ text: "Something", tone: "ivory" as const }] },
    { parts: [{ text: "Meaningful", tone: "ivory" as const }] },
    { parts: [{ text: "Together", tone: "bright" as const }] },
  ],
  lede: "Open to exciting opportunities, product collaborations, and conversations around AI, SaaS, and product innovation.",
  cta: "Get in Touch",
  channels: [
    {
      id: "email",
      label: "Email",
      value: "shreeramkumar.ktr@gmail.com",
      href: "mailto:shreeramkumar.ktr@gmail.com",
      accent: "crimson" as const,
      icon: "mail" as const,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/shree-ram-kumar-640834185",
      href: "https://www.linkedin.com/in/shree-ram-kumar-640834185",
      accent: "forest" as const,
      icon: "linkedin" as const,
    },
    {
      id: "location",
      label: "Location",
      value: "Lucknow, India",
      href: "https://www.google.com/maps/search/?api=1&query=Gomtinagar%2C+Lucknow",
      accent: "crimson" as const,
      icon: "pin" as const,
    },
  ],
  traits: [
    { id: "product", label: "Product-Led Thinking", icon: "target" as const },
    { id: "collab", label: "Collaborative Approach", icon: "users" as const },
    { id: "outcome", label: "Outcome Focused", icon: "zap" as const },
  ],
};
