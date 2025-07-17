import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const skills = [
    { name: "2D Animation", level: 95 },
    { name: "3D Animation", level: 85 },
    { name: "Character Design", level: 90 },
    { name: "Storyboarding", level: 80 },
    { name: "Motion Graphics", level: 85 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-square bg-background rounded-full overflow-hidden border-8 border-background shadow-xl">
                  <Image
                    src="/images/myProfile1.png"
                    alt="Umer portrait"
                    className="object-cover"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  <AnimatedText text="About Me" />
                </h1>
                <p className="text-xl text-muted-foreground">
                  MERN Stack Developer & Mobile App Specialist
                </p>
                <p className="text-muted-foreground">
                  I'm Muhammad Farooq, a dedicated software developer with over
                  4 years of experience specializing in the MERN stack,
                  particularly React Native. My journey started with crafting
                  seamless user interfaces and has expanded to delivering
                  robust, scalable mobile and web applications using modern
                  development practices. I am passionate about turning ideas
                  into impactful digital solutions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/contact">
                      Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
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

        {/* My Story */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 mx-auto max-w-3xl">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <AnimatedText text="My Story" />
                </h2>
                <p className="text-muted-foreground">
                  My journey as a software developer began in 2022 when I
                  started an internship at eBridge Software House. During this
                  six-month internship, I laid the foundation of my skills,
                  immersing myself in the world of coding and development.
                </p>
                <p className="text-muted-foreground">
                  After completing my internship, I joined TKLogics, where I had
                  the opportunity to work on PakLoader, a React Native app
                  similar to Uber. This project was a significant milestone in
                  my career, as I gained hands-on experience building scalable
                  and user-friendly mobile applications. Over the next two
                  years, I worked on various apps, refining my expertise in
                  mobile development and deepening my understanding of the MERN
                  stack.
                </p>
                <p className="text-muted-foreground">
                  While advancing in my career, I pursued my BSCS degree from
                  Virtual University, balancing academic commitments with
                  professional growth. Completing my degree provided me with a
                  strong theoretical foundation that complements my practical
                  experience. In 2024, I joined Venture Dive Software House as a
                  React Native Developer. Here, I contributed to two major
                </p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>projects: Boxing App: A comprehensive app for boxing</li>
                  <li>
                    enthusiasts, offering training plans, tutorials, and
                    community featusres.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  In addition to mobile app development, I explored web
                  technologies, working on websites built with Next.js for the
                  frontend and Strapi for the backend. These projects allowed me
                  to combine creativity and technical skills to deliver seamless
                  digital solutions. Today, I specialize in creating robust
                  mobile and web applications that solve real-world problems. My
                  passion for learning and adapting to new technologies drives
                  me to continually grow and deliver exceptional results.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <AnimatedText text="My Approach" />
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">Research & Concept</h3>
                      <p className="text-muted-foreground">
                        Every project begins with thorough research and
                        conceptualization. I take time to understand the core
                        message, target audience, and desired outcomes before
                        putting pencil to paper.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">Storyboarding</h3>
                      <p className="text-muted-foreground">
                        I create detailed storyboards to map out the visual
                        narrative, ensuring that every frame serves the story
                        and communicates effectively.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">Displine</h3>
                      <p className="text-muted-foreground">
                        I prefer to approach the timeline of project according
                        to deadlines. which create displine to submit the
                        project before deadline.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">Refinement</h3>
                      <p className="text-muted-foreground">
                        I believe in the power of iteration. Each project
                        undergoes multiple rounds of refinement to ensure the
                        highest quality and most effective communication.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Journey */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <AnimatedText text="My Journey" />
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-xl font-bold">
                      Senior Umer at bizzdevs
                    </h3>
                    <p className="text-muted-foreground">2025 - Present</p>
                    <p className="mt-2">
                      Leading Interactive projects for major clients, mentoring
                      junior Umers, and developing new development techniques.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-xl font-bold">
                      Umer at Venture Dive(Contract)
                    </h3>
                    <p className="text-muted-foreground">2023 - 2024</p>
                    <p className="mt-2">
                      Developed and deployed a comprehensive boxing TV app using
                      React Native.Some collections of technologies that were
                      used Mapbox, Firebase push notifications, Chat, and
                      payment methods. Worked on an In Drive-like app using.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-xl font-bold">
                      Junior Umer at Ebridge
                    </h3>
                    <p className="text-muted-foreground">2022 - 2023</p>
                    <p className="mt-2">
                      I started an internship at eBridge Software House. During
                      this six-month internship, I laid the foundation of my
                      skills, immersing myself in the world of coding and
                      development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <AnimatedText text="Education & Training" />
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-xl font-bold">Graduation in BSCS</h3>
                    <p className="text-muted-foreground">BSCS,2024</p>
                    <p className="mt-2">
                      Specialized in C++, javaScript and Python programing
                      language.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-xl font-bold">
                      Web development and design course
                    </h3>
                    <p className="text-muted-foreground">
                      Web development and design, 2021
                    </p>
                    <p className="mt-2">
                      Focused on Web development and design, Soft skills, and
                      customer care service.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-xl font-bold">Web development</h3>
                    <p className="text-muted-foreground">
                      Web development, 2019
                    </p>
                    <p className="mt-2">
                      Intensive training in web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="Beyond development" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  When I'm not creating web and mobiles apps, you can find me...
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <Card>
                  <CardContent className="p-6 space-y-2 text-center">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="m18 16 4-4-4-4" />
                        <path d="m6 8-4 4 4 4" />
                        <path d="m14.5 4-5 16" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Coding</h3>
                    <p className="text-muted-foreground">
                      Learning web development and creative coding to expand my
                      digital skillset.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2 text-center">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M2 12h20" />
                        <path d="M2 12a10 10 0 0 1 20 0" />
                        <path d="M2 12a10 10 0 0 0 20 0" />
                        <path d="M12 2v20" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Traveling</h3>
                    <p className="text-muted-foreground">
                      Exploring new cultures and landscapes for creative
                      inspiration.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2 text-center">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M12 3c.53 0 1.039.211 1.414.586l7 7 .586.586V17c0 .53-.211 1.039-.586 1.414l-3 3c-.375.375-.884.586-1.414.586h-5c-.53 0-1.039-.211-1.414-.586l-3-3C6.211 18.039 6 17.53 6 17v-5.828c0-.53.211-1.039.586-1.414l1-1C8.211 8.211 9 8 9 8h1.5" />
                        <path d="M12 8v3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Photography</h3>
                    <p className="text-muted-foreground">
                      Capturing moments and studying composition through the
                      lens.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="Let's Work Together" />
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl opacity-90">
                  Interested in collaborating or have a project in mind? I'd
                  love to hear from you.
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
