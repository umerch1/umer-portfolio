import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <Button variant="ghost" asChild>
                <Link href="/about">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to About
                </Link>
              </Button>
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Link>
              </Button>
            </div>

            <div className="mx-auto max-w-3xl bg-background rounded-lg shadow-lg p-8 print:shadow-none">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold">John Animator</h1>
                  <p className="text-xl text-muted-foreground">
                    Animation Director & Visual Storyteller
                  </p>
                </div>

                <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    animator@example.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    (555) 123-4567
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Los Angeles, CA
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Professional Summary</h2>
                  <p className="text-muted-foreground">
                    Experienced Animation Director with 8+ years of expertise in
                    character animation, motion graphics, and visual
                    storytelling. Proven track record of delivering high-quality
                    animations for commercials, explainer videos, short films,
                    and interactive media. Skilled in both 2D and 3D animation
                    techniques with a passion for creating engaging visual
                    narratives.
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Professional Experience</h2>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-bold">Senior Animator</h3>
                      <p className="text-muted-foreground">2020 - Present</p>
                    </div>
                    <p className="font-medium">Studio Pixel, Los Angeles, CA</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>
                        Lead a team of 5 animators on projects for major clients
                        including Netflix, Google, and Adobe
                      </li>
                      <li>
                        Directed the animation process from concept to
                        completion for 15+ commercial projects
                      </li>
                      <li>
                        Implemented new animation techniques that reduced
                        production time by 20%
                      </li>
                      <li>
                        Mentored junior animators, providing guidance on
                        technical skills and creative development
                      </li>
                      <li>
                        Collaborated with clients to ensure animations aligned
                        with brand guidelines and marketing objectives
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-bold">Animator</h3>
                      <p className="text-muted-foreground">2017 - 2020</p>
                    </div>
                    <p className="font-medium">
                      Motion Works, San Francisco, CA
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>
                        Created character animations for TV commercials, short
                        films, and mobile games
                      </li>
                      <li>
                        Developed storyboards and animatics for client approval
                        before final animation
                      </li>
                      <li>
                        Collaborated with art directors to ensure consistent
                        visual style across projects
                      </li>
                      <li>
                        Specialized in character expression and movement to
                        convey emotion and personality
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-bold">Junior Animator</h3>
                      <p className="text-muted-foreground">2015 - 2017</p>
                    </div>
                    <p className="font-medium">
                      Animation Lab, Los Angeles, CA
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>
                        Assisted senior animators with storyboarding, in-between
                        frames, and background animations
                      </li>
                      <li>
                        Created motion graphics for corporate videos and social
                        media content
                      </li>
                      <li>
                        Participated in team brainstorming sessions to develop
                        creative concepts
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Education</h2>

                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <h3 className="font-bold">Master's in Animation</h3>
                      <p className="text-muted-foreground">2015</p>
                    </div>
                    <p className="text-muted-foreground">
                      Animation Academy, Los Angeles, CA
                    </p>
                    <p className="text-muted-foreground">
                      Specialized in character animation and visual storytelling
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <h3 className="font-bold">Bachelor's in Fine Arts</h3>
                      <p className="text-muted-foreground">2013</p>
                    </div>
                    <p className="text-muted-foreground">
                      Creative Arts University, San Francisco, CA
                    </p>
                    <p className="text-muted-foreground">
                      Focused on drawing, composition, and color theory
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Skills</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold mb-2">Animation</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>2D Character Animation</li>
                        <li>3D Animation</li>
                        <li>Motion Graphics</li>
                        <li>Storyboarding</li>
                        <li>Character Design</li>
                        <li>Rigging</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Software</h3>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Adobe After Effects</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Cinema 4D</li>
                        <li>Blender</li>
                        <li>Toon Boom Harmony</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Awards & Recognition</h2>

                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      <span className="font-medium">Best Animated Short</span> -
                      Animation Film Festival, 2022
                    </li>
                    <li>
                      <span className="font-medium">
                        Excellence in Character Animation
                      </span>{" "}
                      - Digital Arts Awards, 2021
                    </li>
                    <li>
                      <span className="font-medium">Best Motion Graphics</span>{" "}
                      - Commercial Animation Awards, 2019
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
