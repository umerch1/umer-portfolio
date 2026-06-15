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
        {/* Hero Section 1  */}
        <section className="relative w-full overflow-hidden hero-gradient transition-all duration-1000 opacity-100 translate-y-0 px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-20 lg:px-8 lg:py-28 xl:px-8 xl:py-30">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="md:col-span-7 order-2 flex w-full flex-col items-center text-center space-y-6 md:order-1 md:items-start md:text-left">
              <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary sm:px-5 sm:py-2.5 sm:text-sm">
                Available for new opportunities
              </div>
              <h1 className="font-display text-[2.5rem] text-primary leading-tight tracking-tight sm:text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem]">
                Engineering Scalable <br />
                <span className="text-[#bdc2ff]">Digital Experiences</span>
              </h1>
              <div className="space-y-4 text-on-surface-variant max-w-2xl text-sm leading-7 sm:text-base md:text-lg">
                <p className="text-gray-500 dark:text-gray-400">
                  Software Engineer specializing in MERN Stack with 4 years of
                  Web and Mobile app development experience.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Proficient in React Native, scalable architecture, and modern
                  JavaScript frameworks. I deliver polished digital products
                  with strong communication and problem-solving skills.
                </p>
              </div>
              <div className="flex w-full flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center md:justify-start">
                <Button
                  asChild
                  className="w-full max-w-xs rounded-full px-7 py-3 text-base font-semibold bg-white text-black shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-[1.02] sm:w-auto"
                >
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full max-w-xs rounded-full px-7 py-3 text-base font-semibold border-white/20 bg-white text-black shadow-lg shadow-black/10 transition-transform duration-200 hover:bg-white/10 sm:w-auto"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5 order-1 relative flex justify-center md:order-2">
              <div className="aspect-square w-full max-w-[420px] rounded-full overflow-hidden border-4 border-white/10 glass-card relative z-20">
                <Image
                  src="/images/myProfile1.png"
                  alt="Umer Farooq"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover filter grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl z-30 animate-bounce sm:p-6 sm:-right-6 sm:-bottom-6 md:p-6 md:-right-6 md:-bottom-6 translate-x-1/2 sm:translate-x-0 sm:right-auto sm:bottom-auto">
                <div className="flex items-center gap-3 text-xs sm:text-base">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-label-mono text-label-mono text-on-surface">
                    4+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-muted/50">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center pb-12 md:pb-24 lg:pb-32">
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
<div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="My Skills & Tech Stack" />
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I've honed my craft across various portfolio disciplines and
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
                  Insights, tutorials, and thoughts on portfolio and design
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
                  next portfolio project.
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
