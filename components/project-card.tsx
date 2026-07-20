"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
    shortDescription: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden border border-border/70 bg-card/80 shadow-sm">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <div className="space-y-2">
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {project.category}
            </div>
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{project.shortDescription}</p>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <Button asChild variant="ghost" className="w-full justify-between rounded-full">
            <Link href={`/projects/${project.id}`}>
              View Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
