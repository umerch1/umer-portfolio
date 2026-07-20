import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { articles } from "@/lib/data";

export default function LatestArticles() {
  const latestArticles = articles.slice(0, 3);

  return (
    <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
      {latestArticles.map((article) => (
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
              <p className="line-clamp-2 text-muted-foreground">{article.excerpt}</p>
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
  );
}
