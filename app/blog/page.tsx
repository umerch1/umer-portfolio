import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { articles } from "@/lib/constants";

export const metadata = {
  title: "Blog | Umer Farooq - Software Engineer",
  description:
    "Read the latest articles and insights from Umer Farooq, a software engineer specializing in the MERN stack and React Native development.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full bg-muted/70 py-16 md:py-24 lg:py-28 dark:bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <AnimatedText text="Portfolio insights" />
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Reflections, tutorials, and practical notes on building thoughtful software and polished interfaces.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Input type="search" placeholder="Search articles..." className="w-full rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden border border-border/70 bg-card/80 shadow-sm">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{article.title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">{article.excerpt}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="ghost" className="w-full justify-between rounded-full">
                      <Link href={`/blog/${article.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-muted/70 py-16 md:py-24 lg:py-28 dark:bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  <AnimatedText text="Subscribe to my newsletter" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get practical insights, product notes, and development updates delivered to your inbox.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 rounded-full" />
                  <Button type="submit" className="rounded-full">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">I&apos;ll never spam you or share your email. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
