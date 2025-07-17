import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { articles } from "@/lib/data"

export default function LatestArticles() {
  // Only show the latest 3 articles
  const latestArticles = articles.slice(0, 3)

  return (
    <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
      {latestArticles.map((article) => (
        <Card key={article.id} className="overflow-hidden">
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
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={`/blog/${article.id}`}>
                Read More
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
