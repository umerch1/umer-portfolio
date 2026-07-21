"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/lib/constants";

export default function SkillsShowcase() {
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
