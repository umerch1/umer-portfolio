"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    category: string
    image: string
    shortDescription: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
            <p className="text-sm">{project.shortDescription}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button asChild variant="ghost" className="w-full justify-between">
            <Link href={`/projects/${project.id}`}>
              View Project
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
