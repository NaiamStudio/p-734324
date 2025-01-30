import { FightCard } from "@/components/ui/fight-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface PromotionsProps {
  lang?: string;
}

export const Promotions = ({ lang }: PromotionsProps) => {
  const fighters = [
    {
      period: "January 2024 - December 2025",
      fighter: "Martin Ezequiel Bulacio",
      image: "/fighters/MartinBulacio.png",
      country: "Argentina",
      debut: "2016-08-26",
      division: "super middle",
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
    {
      period: "January 2020 - December 2023",
      fighter: "Carlos Henrique Rodrigues Da Silva",
      image: "/fighters/CarlosDaSilva.png",
      country: "Brasil",
      debut: "2017-03-31",
      division: "feather",
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
    {
      period: "February 2019 - November 2022",
      fighter: "Cristian Martin Roldan",
      image: "/fighters/CristianRoldan.png",
      country: "Argentina",
      debut: "2022-05-14",
      division: "super fly",
      fights: [
      {
        date: "15/08/2022",
        opponent: "Vs. Juan Perez",
        result: "Victory by Decision"
      },
      {
        date: "10/05/2021",
        opponent: "Vs. Roberto Sanchez",
        result: "Victory by TKO 3rd Round"
      }
      ]
    }
    // Repeat for other fighters...
  ]

  return (
    <section id="promotions" className="py-20 bg-blue-950 text-foreground">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Giletta Promotions
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {fighters.map((fighter, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <FightCard {...fighter} className="text-black dark:text-white" />
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