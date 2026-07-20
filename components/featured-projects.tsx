"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          className="group relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start p-5 text-left text-white">
              <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100">
                {project.category}
              </div>
              <h3 className="mt-3 text-lg font-semibold md:text-xl">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">{project.shortDescription}</p>
            </div>
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-slate-950/70 p-5 text-center text-white transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}>
              <h3 className="mb-2 text-lg font-semibold md:text-xl">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-200">{project.shortDescription}</p>
              <Button asChild size="sm" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                <Link href={`/projects/${project.id}`}>
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
