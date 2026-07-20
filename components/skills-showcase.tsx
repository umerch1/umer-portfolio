"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsShowcase() {
  const skills = [
    { name: "JavaScript", icon: "JS", tone: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300" },
    { name: "React Native", icon: "RN", tone: "bg-sky-500/10 text-sky-700 dark:text-sky-300" },
    { name: "Next.js", icon: "NX", tone: "bg-violet-500/10 text-violet-700 dark:text-violet-300" },
    { name: "TypeScript", icon: "TS", tone: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
    { name: "Firebase", icon: "FB", tone: "bg-amber-500/10 text-amber-700 dark:text-amber-300" },
    { name: "AWS", icon: "AW", tone: "bg-rose-500/10 text-rose-700 dark:text-rose-300" },
    { name: "GitHub", icon: "GH", tone: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300" },
    { name: "MS Office", icon: "OF", tone: "bg-orange-500/10 text-orange-700 dark:text-orange-300" },
  ];

  return (
    <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <Card className="border border-border/70 bg-card/80 shadow-sm">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold ${skill.tone}`}>
                {skill.icon}
              </div>
              <h3 className="font-medium text-foreground">{skill.name}</h3>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
