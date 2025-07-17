import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import FeaturedProjects from "@/components/featured-projects";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import SkillsShowcase from "@/components/skills-showcase";
import LatestArticles from "@/components/latest-articles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl lg:text-4xl">
                    <AnimatedText text="Transforming Concepts into Reality, One Project at a Time." />
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Bringing ideas to life through seamless coding and dynamic
                    digital experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video bg-muted rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=900"
                    alt="Animation reel preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full w-16 h-16 bg-white/90 dark:bg-black/90"
                    >
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Play demo reel</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="Featured Work" />
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Check out some of my recent Interactive projects
                </p>
              </div>
              <FeaturedProjects />
              <Button variant="outline" asChild className="mt-8">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-square bg-muted rounded-full overflow-hidden">
                  <Image
                    src="/images/myProfile1.png"
                    alt="Animator portrait"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="About Me" />
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Software Engineer specializing in MERN Stack, having 4 years
                  of Web and Mobile app Development experience and great
                  hands-on experience in JavaScript frameworks. Proficient in
                  MERN stack development and React Native mobile apps.
                  Exceptional communication and problem-solving skills focused
                  on driving innovation and achieving company objectives.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <b className="dark:text-white">Languages and Databases:</b>{" "}
                  JavaScript, TypeScript, MongoDB, MySQL, Python, PHP, Java,
                  C++, <br />
                  <b className="dark:text-white">
                    Frameworks and Libraries:
                  </b>{" "}
                  MERN stack, Node.js, React.js, Next.js, Express.js, Redux,
                  Redux Toolkit, Tailwind CSS, Styled, Flask, Django
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/about">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resume">
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="My Skills & Tech Stack" />
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I've honed my craft across various animation disciplines and
                  technologies
                </p>
              </div>
              <SkillsShowcase />
              <Button variant="outline" asChild className="mt-8">
                <Link href="/skills">
                  View All Skills <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="Client Testimonials" />
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  What clients and collaborators say about working with me
                </p>
              </div>
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="Latest Articles" />
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Insights, tutorials, and thoughts on animation and design
                </p>
              </div>
              <LatestArticles />
              <Button variant="outline" asChild className="mt-8">
                <Link href="/blog">
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="Let's Create Something Amazing" />
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl opacity-90">
                  Ready to bring your ideas to life? Let's collaborate on your
                  next animation project.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent"
                  asChild
                >
                  <Link href="/projects">Explore My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
