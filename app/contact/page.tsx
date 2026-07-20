import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import AnimatedText from "@/components/animated-text";
import ContactForm from "@/components/contactComponent/contactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact | Umer Farooq - Software Engineer",
  description:
    "Get in touch with Umer Farooq, a software engineer specializing in the MERN stack and React Native development.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <AnimatedText text="Get in Touch" />
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Have a product, app, or website in mind? I’d love to explore how I can help bring it to life.
                </p>
              </div>
            </div>

            <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div className="space-y-5">
                <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Email</h3>
                      <p className="mt-1 text-muted-foreground">umerf3024@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                      <p className="mt-1 text-muted-foreground">+92 309 4162466</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Location</h3>
                      <p className="mt-1 text-muted-foreground">Bhasen, Shalimar, Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-sm">
                  <p className="text-sm leading-7 text-muted-foreground">
                    I’m available for freelance projects, product collaborations, and full-time opportunities. If you’d like to discuss a project, send a note and I’ll get back to you shortly.
                  </p>
                  <Link href="/projects" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
