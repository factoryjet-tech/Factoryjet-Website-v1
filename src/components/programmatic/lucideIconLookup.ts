import {
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Rocket,
  Clock,
  Code2,
  Bot,
  Users,
  Wallet,
  TrendingUp,
  Lightbulb,
  Search,
  PenTool,
  Layout,
  Hammer,
  CheckCircle2,
  HeartHandshake,
  Gauge,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';

/**
 * Whitelist of lucide icons available to programmatic components.
 *
 * Why a static map: components like WhyComparisonMatrix and
 * ServiceStepsHorizontal accept `lucideIconName: string` as a prop
 * (so mock-data and pipeline-generated copy can specify icons by
 * name). Dynamic `import()` of the entire lucide-react library
 * would defeat tree-shaking and bloat the static export. This map
 * gives content authors a curated palette and keeps the bundle
 * lean — only icons listed here ship.
 *
 * Add a new icon: import it above, add to the map. That's it.
 *
 * Lookup falls back to `Sparkles` so unknown names render visibly
 * (helps spot typos in mock data) rather than crashing.
 */
const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Rocket,
  Clock,
  Code2,
  Bot,
  Users,
  Wallet,
  TrendingUp,
  Lightbulb,
  Search,
  PenTool,
  Layout,
  Hammer,
  CheckCircle2,
  HeartHandshake,
  Gauge,
  RefreshCw,
};

export type IconName = keyof typeof ICONS | string;

export function lookupIcon(name: IconName): LucideIcon {
  return ICONS[name] ?? Sparkles;
}
