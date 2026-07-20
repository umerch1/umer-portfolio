import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Download, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About | Umer Farooq - Software Engineer",
  description:
    "Learn more about Umer Farooq, a passionate software engineer with expertise in the MERN stack and React Native development.",
};

export default function AboutPage() {
  const highlights = [
    { title: "4+ years", description: "Building modern products for web and mobile" },
    { title: "React Native", description: "Specialized in cross-platform app delivery" },
    { title: "MERN Stack", description: "Strong command of end-to-end application development" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full bg-muted/70 py-16 md:py-24 lg:py-32 dark:bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div className="flex justify-center">
                <div className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-border/70 bg-background p-2 shadow-[0_25px_60px_rgba(15,23,42,0.14)]">
                  <Image
                    src="/images/myProfile1.png"
                    alt="Umer portrait"
                    className="h-full w-full rounded-[1.5rem] object-cover"
                    width={420}
                    height={420}
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">About me</p>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    <AnimatedText text="I build thoughtful products and polished digital experiences." />
                  </h1>
                </div>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  I&apos;m Umer Farooq, a software engineer with a strong background in React Native, web development, and product-focused delivery. My work blends clean architecture, modern UI, and practical problem-solving for teams and clients that need quality at speed.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="rounded-full">
                    <Link href="/contact">
                      Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full">
                    <Link href="/resume">
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Link>
                  </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm">
                      <p className="text-lg font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div className="space-y-4 rounded-[1.8rem] border border-border/70 bg-card/80 p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">My story</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  <AnimatedText text="From internship to product delivery" />
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey in development began with a six-month internship at eBridge Software House, where I built the foundation for writing clean code and understanding how digital products come together.
                  </p>
                  <p>
                    After that, I moved into roles where I worked on mobile apps, scalable frontend architecture, and web experiences with practical business goals in mind. I&apos;ve had the chance to contribute to React Native apps, performance improvements, reusable component systems, and product-focused releases.
                  </p>
                  <p>
                    Alongside my work, I pursued a BSCS degree and continued to strengthen both technical depth and communication, which helped me grow into someone who can balance UI quality, engineering reliability, and collaboration.
                  </p>
                </div>
              </div>
              <div className="space-y-4 rounded-[1.8rem] border border-border/70 bg-card/80 p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">How I work</p>
                <div className="space-y-4">
                  {[
                    { title: "Research & structure", description: "I start by understanding the audience, goals, and constraints so the product direction is clear." },
                    { title: "Design with intent", description: "Every interface decision is shaped to make the experience feel intuitive and polished." },
                    { title: "Ship with care", description: "I focus on maintainability, performance, and quality so delivery is practical and durable." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/60 bg-background/70 p-4">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted/70 py-16 md:py-24 lg:py-28 dark:bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  <AnimatedText text="Beyond development" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  When I&apos;m not building products, I enjoy learning, teaching, and keeping a creative perspective alive.
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Coding", description: "I keep exploring new patterns, libraries, and creative ways to solve problems.", icon: Code2 },
                  { title: "Teaching", description: "I enjoy helping people understand complex ideas in a simpler, more practical way.", icon: BookOpen },
                  { title: "Community", description: "I value collaboration, mentorship, and the energy of working with good people.", icon: Users },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="border border-border/70 bg-card/80 shadow-sm">
                      <CardContent className="p-6 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-primary py-16 text-primary-foreground md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  <AnimatedText text="Let’s work together" />
                </h2>
                <p className="mx-auto max-w-[700px] text-base opacity-90 md:text-xl">
                  If you have a product, app, or website in mind, I’d love to help shape it.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-white/10" asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
