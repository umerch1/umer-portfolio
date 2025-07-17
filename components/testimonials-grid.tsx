import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "@/lib/data"

export default function TestimonialsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
            <p className="italic">{testimonial.quote}</p>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
