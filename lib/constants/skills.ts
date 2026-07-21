export interface SkillItem {
  name: string;
  icon: string;
  tone: string;
}

export const skills: SkillItem[] = [
  { name: "JavaScript", icon: "JS", tone: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300" },
  { name: "React Native", icon: "RN", tone: "bg-sky-500/10 text-sky-700 dark:text-sky-300" },
  { name: "Next.js", icon: "NX", tone: "bg-violet-500/10 text-violet-700 dark:text-violet-300" },
  { name: "TypeScript", icon: "TS", tone: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
  { name: "Firebase", icon: "FB", tone: "bg-amber-500/10 text-amber-700 dark:text-amber-300" },
  { name: "AWS", icon: "AW", tone: "bg-rose-500/10 text-rose-700 dark:text-rose-300" },
  { name: "GitHub", icon: "GH", tone: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300" },
  { name: "MS Office", icon: "OF", tone: "bg-orange-500/10 text-orange-700 dark:text-orange-300" },
];
