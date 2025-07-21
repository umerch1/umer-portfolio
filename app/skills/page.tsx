import AnimatedText from "@/components/animated-text";
import SkillBar from "@/components/skill-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SkillsPage() {
  const portfolioSkills = [
    { name: "Java Script", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "Nextjs", level: 90 },
    { name: "React Native", level: 80 },
    { name: "AWS", level: 85 },
    { name: "Python", level: 75 },
    { name: "GraphQL", level: 88 },
    { name: "Backend", level: 70 },
  ];

  const softwareSkills = [
    { name: "Code Editor", level: 95 },
    { name: "Adobe Photoshop", level: 90 },
    { name: "MS Word", level: 85 },
    { name: "AWS", level: 80 },
    { name: "Docker", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "GitHub", level: 85 },
    { name: "Canva", level: 65 },
  ];

  const softSkills = [
    { name: "Project Management", level: 85 },
    { name: "Client Communication", level: 90 },
    { name: "Team Collaboration", level: 88 },
    { name: "Problem Solving", level: 92 },
    { name: "Time Management", level: 85 },
    { name: "Adaptability", level: 90 },
    { name: "Creativity", level: 95 },
    { name: "Attention to Detail", level: 93 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  <AnimatedText text="Skills & Tech Stack" />
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A comprehensive overview of my technical abilities and
                  professional competencies
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl mt-12">
              <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="portfolio">portfolio Skills</TabsTrigger>
                  <TabsTrigger value="software">Software & Tools</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="portfolio" className="mt-6 space-y-6">
                  {portfolioSkills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </TabsContent>
                <TabsContent value="software" className="mt-6 space-y-6">
                  {softwareSkills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </TabsContent>
                <TabsContent value="soft" className="mt-6 space-y-6">
                  {softSkills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <AnimatedText text="Technical Expertise" />
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Character portfolio
                      </h3>
                      <p className="text-muted-foreground">
                        Specializing in bringing characters to life with
                        personality and emotion through fluid movement and
                        expressive acting.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Motion Graphics
                      </h3>
                      <p className="text-muted-foreground">
                        Creating dynamic visual elements that communicate
                        complex ideas through movement, shape, and color.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        3D Modeling & Rigging
                      </h3>
                      <p className="text-muted-foreground">
                        Building detailed 3D models and creating efficient rigs
                        that enable smooth and realistic portfolio.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Visual Storytelling
                      </h3>
                      <p className="text-muted-foreground">
                        Crafting compelling narratives through storyboarding,
                        composition, and visual pacing.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <AnimatedText text="Professional Development" />
                </h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Continuous Learning
                      </h3>
                      <p className="text-muted-foreground">
                        I regularly participate in workshops, online courses,
                        and industry conferences to stay current with the latest
                        portfolio techniques and technologies.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                      <p className="text-muted-foreground">
                        I actively mentor junior developers, sharing knowledge
                        and techniques while fostering their creative growth.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Industry Involvement
                      </h3>
                      <p className="text-muted-foreground">
                        I'm an active member of portfolio communities and
                        professional organizations, contributing to the broader
                        portfolio industry.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="My Creative Process" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  How I approach Interactive projects from concept to completion
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8 w-full max-w-5xl">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-bold mb-2">Discovery</h3>
                    <p className="text-muted-foreground">
                      Understanding project goals, audience, and message through
                      research and client consultation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-bold mb-2">Concept & Design</h3>
                    <p className="text-muted-foreground">
                      Creating storyboards, style frames, and character designs
                      to establish the visual direction.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-bold mb-2">portfolio</h3>
                    <p className="text-muted-foreground">
                      Bringing the concept to life through careful portfolio,
                      timing, and movement.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      4
                    </div>
                    <h3 className="text-xl font-bold mb-2">Refinement</h3>
                    <p className="text-muted-foreground">
                      Polishing the portfolio with feedback, adding finishing
                      touches, and delivering the final product.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text="Ready to Collaborate?" />
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl opacity-90">
                  Let's combine my skills with your vision to create something
                  amazing.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent"
                  asChild
                >
                  <Link href="/projects">
                    See My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
