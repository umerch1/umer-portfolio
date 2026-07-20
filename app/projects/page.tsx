import AnimatedText from "@/components/animated-text";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects | Umer Farooq - Software Engineer",
  description:
    "Explore my diverse portfolio of interactive projects, showcasing innovative designs and solutions that engage users and enhance experiences across various platforms.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full bg-muted/70 py-16 md:py-24 lg:py-28 dark:bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <AnimatedText text="Selected projects" />
                </h1>
                <p className="mx-auto max-w-[760px] text-muted-foreground md:text-xl">
                  A collection of products and interfaces I&apos;ve worked on, spanning mobile apps, web experiences, and thoughtful product thinking.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
