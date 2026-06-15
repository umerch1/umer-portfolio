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
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          className="relative group overflow-hidden rounded-3xl border border-white/10 bg-surface/80 shadow-2xl shadow-black/10 transition-transform duration-300 hover:-translate-y-1"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative aspect-[4/3] bg-muted overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-5 text-center text-white transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
            >
              <h3 className="text-lg font-semibold md:text-xl mb-2">{project.title}</h3>
              <p className="text-sm md:text-base mb-4 leading-relaxed">{project.shortDescription}</p>
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
