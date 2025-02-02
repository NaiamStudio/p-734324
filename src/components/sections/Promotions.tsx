import { FightCard } from "@/components/ui/fight-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface PromotionsProps {
  lang?: string;
}

export const Promotions = ({ lang }: PromotionsProps) => {
  const fighters = [
    {
      period: lang === "EN" ? "January 2024 - December 2025" : "Enero 2024 - Diciembre 2025",
      fighter: "Martin Ezequiel Bulacio",
      image: "/fighters/MartinBulacio.png",
      country: lang === "EN" ? "Argentina" : "Argentina",
      debut: "2016-08-26",
      division: lang === "EN" ? "super middle" : "super mediano",
      fights: [
        {
          date: "24/11/2023",
          opponent: lang === "EN" ? "Vs. Alex Easde" : "Vs. Alex Easde",
          result: lang === "EN" ? "Knockout 6th Round" : "Nocaut 6to Round"
        },
        {
          date: "24/11/2023",
          opponent: lang === "EN" ? "Vs. Alex Easde" : "Vs. Alex Easde",
          result: lang === "EN" ? "Knockout 6th Round" : "Nocaut 6to Round"
        }
      ]
    },
    {
      period: lang === "EN" ? "January 2020 - December 2023" : "Enero 2020 - Diciembre 2023",
      fighter: "Carlos Henrique Rodrigues Da Silva",
      image: "/fighters/CarlosDaSilva.png",
      country: lang === "EN" ? "Brazil" : "Brasil",
      debut: "2017-03-31",
      division: lang === "EN" ? "feather" : "pluma",
      fights: [
        {
          date: "24/11/2023",
          opponent: lang === "EN" ? "Vs. Alex Easde" : "Vs. Alex Easde",
          result: lang === "EN" ? "Knockout 6th Round" : "Nocaut 6to Round"
        },
        {
          date: "24/11/2023",
          opponent: lang === "EN" ? "Vs. Alex Easde" : "Vs. Alex Easde",
          result: lang === "EN" ? "Knockout 6th Round" : "Nocaut 6to Round"
        }
      ]
    },
    {
      period: lang === "EN" ? "February 2019 - November 2022" : "Febrero 2019 - Noviembre 2022",
      fighter: "Cristian Martin Roldan",
      image: "/fighters/CristianRoldan.png",
      country: lang === "EN" ? "Argentina" : "Argentina",
      debut: "2022-05-14",
      division: lang === "EN" ? "super fly" : "super mosca",
      fights: [
      {
        date: "15/08/2022",
        opponent: lang === "EN" ? "Vs. Juan Perez" : "Vs. Juan Perez",
        result: lang === "EN" ? "Victory by Decision" : "Victoria por Decisión"
      },
      {
        date: "10/05/2021",
        opponent: lang === "EN" ? "Vs. Roberto Sanchez" : "Vs. Roberto Sanchez",
        result: lang === "EN" ? "Victory by TKO 3rd Round" : "Victoria por TKO 3er Round"
      }
      ]
    }
    // Repeat for other fighters...
  ]

  return (
    <section id="promotions" className="py-20 bg-blue-950 text-foreground">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          {lang === "EN" ? "Giletta Promotions" : "Promociones Giletta"}
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {fighters.map((fighter, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <FightCard
                  period={fighter.period}
                  fighter={fighter.fighter}
                  image={fighter.image}
                  country={fighter.country}
                  debut={fighter.debut}
                  division={fighter.division}
                  fights={fighter.fights.map(fight => ({
                    date: fight.date,
                    opponent: fight.opponent,
                    result: fight.result
                  }))}
                  className="text-black dark:text-white"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  )
}