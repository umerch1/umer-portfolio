import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Download, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import FeaturedProjects from "@/components/featured-projects";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import SkillsShowcase from "@/components/skills-showcase";
import LatestArticles from "@/components/latest-articles";
import { expertise, highlights } from "@/lib/constants";

export const metadata = {
  title: "Home | Umer Farooq - Software Engineer",
  description:
    "Software Engineer specializing in MERN Stack with 4 years of Web and Mobile app development experience. Proficient in React Native, scalable architecture, and modern JavaScript frameworks.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24 lg:px-8 lg:py-28 xl:px-8 xl:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary sm:px-5 sm:py-2.5 sm:text-sm">
                Available for new opportunities
              </div>
              <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Building polished <span className="text-primary">digital products</span> with clarity and momentum.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                I’m a software engineer focused on React, React Native, Next.js, TypeScript, and scalable product development. I bring calm execution, strong communication, and thoughtful design to every project.
              </p>
              <div className="grid w-full gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/70 bg-card/80 p-4 text-center shadow-sm">
                    <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex w-full flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-start">
                <Button asChild className="w-full rounded-full px-7 py-3 text-base font-semibold sm:w-auto">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button variant="outline" asChild className="w-full rounded-full px-7 py-3 text-base font-semibold sm:w-auto">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-3 shadow-[0_20px_80px_rgba(15,23,42,0.12)]">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/myProfile1.png"
                    alt="Umer Farooq"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 left-5 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3 text-sm">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                  <span className="font-medium text-foreground">Open to freelance and full-time work</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Core Expertise
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                <AnimatedText text="What I bring to the table" />
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {expertise.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-full bg-muted/70 py-16 md:py-24 lg:py-28 dark:bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center pb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  <AnimatedText text="Featured Work" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A selection of recent products that blend thoughtful design with reliable engineering.
                </p>
              </div>
              <FeaturedProjects />
              <Button variant="outline" asChild className="mt-8 rounded-full">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  <AnimatedText text="Skills & Tech Stack" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A practical toolkit built around product delivery, experimentation, and clean execution.
                </p>
              </div>
              <SkillsShowcase />
              <Button variant="outline" asChild className="mt-8 rounded-full">
                <Link href="/skills">
                  View All Skills <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  <AnimatedText text="Client Testimonials" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Trusted by collaborators and clients who value clear communication and execution.
                </p>
              </div>
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        <section className="w-full bg-muted/70 py-16 md:py-24 lg:py-28 dark:bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  <AnimatedText text="Latest Articles" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Short notes on product thinking, delivery, and practical development lessons.
                </p>
              </div>
              <LatestArticles />
              <Button variant="outline" asChild className="mt-8 rounded-full">
                <Link href="/blog">
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full bg-primary py-16 text-primary-foreground md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  <AnimatedText text="Let’s build something strong together" />
                </h2>
                <p className="mx-auto max-w-[700px] text-base opacity-90 md:text-xl">
                  Ready to bring your next idea to life? I’d love to help shape it into a thoughtful, polished product.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10" asChild>
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
