import { Code2, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";

export interface ExpertiseItem {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export const expertise: ExpertiseItem[] = [
  {
    title: "Mobile App Development",
    description: "React Native apps with smooth navigation, scalable architecture, and polished UX.",
    points: ["Cross-platform iOS & Android", "Firebase integration", "Store-ready delivery"],
    icon: Rocket,
  },
  {
    title: "Web Engineering",
    description: "Fast, accessible websites and products built with Next.js, TypeScript, and modern design systems.",
    points: ["Performance-focused UI", "Responsive layouts", "SEO-ready architecture"],
    icon: Code2,
  },
  {
    title: "Product Reliability",
    description: "Clean architecture, testing discipline, documentation, and long-term maintainability.",
    points: ["Scalable systems", "Clear docs", "Client-first delivery"],
    icon: ShieldCheck,
  },
];

export const highlights = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Products Delivered" },
  { value: "100%", label: "Client Focus" },
];
