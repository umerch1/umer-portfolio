import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="flex flex-col space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text={project.title} />
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  {project.category} • {project.date}
                </p>
              </div>

              <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">About this project</h2>
                  <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Project Details</h2>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Client:</span>
                      <span>{project.client}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>{project.duration}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Tools:</span>
                      <span>{project.tools.join(", ")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Process & Challenges</h2>
                <p className="text-gray-500 dark:text-gray-400">{project.process}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
