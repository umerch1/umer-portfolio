import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import { articles } from "@/lib/data";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Blog | Umer Farooq - Software Engineer",
  description:
    "Read the latest articles and insights from Umer Farooq, a software engineer specializing in the MERN stack and React Native development.",};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articles.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="mx-auto flex max-w-4xl flex-col space-y-8">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {article.category}
                </p>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedText text={article.title} />
                </h1>
                <p className="text-muted-foreground">
                  {article.date}
                </p>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose max-w-none dark:prose-invert">
                <p className="text-lg leading-8 text-muted-foreground whitespace-pre-line">
                  {article.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
