import { FightCard } from "@/components/ui/fight-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const Promotions = () => {
  const fighters = [
    {
      period: "January 2020 - December 2023",
      fighter: "Pitbull da Silva",
      fights: [
        {
          date: "24/11/2023",
          opponent: "Vs. Alex Easde",
          result: "Nockaut 6mo Round"
        },
        {
          date: "24/11/2023",
          opponent: "Vs. Alex Easde",
          result: "Nockaut 6mo Round"
        }
      ]
    },
    // Repeat for other fighters...
  ]

  return (
    <section id="promotions" className="py-20 bg-background text-foreground">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Giletta Promotions
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {fighters.map((fighter, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <FightCard {...fighter} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}