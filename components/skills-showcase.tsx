"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function SkillsShowcase() {
  const skills = [
    { name: "2D Animation", icon: "🎨", color: "bg-red-100 dark:bg-red-900/20" },
    { name: "3D Animation", icon: "🧊", color: "bg-blue-100 dark:bg-blue-900/20" },
    { name: "Character Design", icon: "👤", color: "bg-green-100 dark:bg-green-900/20" },
    { name: "Motion Graphics", icon: "✨", color: "bg-purple-100 dark:bg-purple-900/20" },
    { name: "Storyboarding", icon: "📝", color: "bg-yellow-100 dark:bg-yellow-900/20" },
    { name: "Visual Effects", icon: "💫", color: "bg-pink-100 dark:bg-pink-900/20" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className={`${skill.color} border-none`}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-2">{skill.icon}</span>
              <h3 className="font-medium">{skill.name}</h3>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
