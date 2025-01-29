import { FightCard } from "@/components/ui/fight-card"

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
    <section id="promotions" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Giletta Promotions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fighters.map((fighter, index) => (
            <FightCard key={index} {...fighter} />
          ))}
        </div>
      </div>
    </section>
  )
}