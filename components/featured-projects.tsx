"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          className="relative group rounded-lg overflow-hidden"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-800">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div
              className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 text-white transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-center mb-4">{project.shortDescription}</p>
              <Button asChild size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
                <Link href={`/projects/${project.id}`}>
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
