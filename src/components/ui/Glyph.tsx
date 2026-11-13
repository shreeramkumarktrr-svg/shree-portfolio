import {
  BarChart3,
  Box,
  Calendar,
  ChartNetwork,
  ChartNoAxesColumnIncreasing,
  Code2,
  Database,
  FileText,
  Layers,
  Library,
  Linkedin,
  Mail,
  MapPin,
  PenLine,
  Rocket,
  Share2,
  Shield,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

const glyphs = {
  layers: Layers,
  chart: ChartNoAxesColumnIncreasing,
  network: ChartNetwork,
  users: Users,
  box: Box,
  database: Database,
  rocket: Rocket,
  target: Target,
  share: Share2,
  calendar: Calendar,
  file: FileText,
  pen: PenLine,
  shield: Shield,
  library: Library,
  code: Code2,
  bars: BarChart3,
  mail: Mail,
  linkedin: Linkedin,
  pin: MapPin,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type GlyphName = keyof typeof glyphs;

export function Glyph({
  name,
  className = "size-5",
}: {
  name: GlyphName;
  className?: string;
}) {
  const Icon = glyphs[name];
  return <Icon className={className} strokeWidth={1.7} aria-hidden="true" />;
}
