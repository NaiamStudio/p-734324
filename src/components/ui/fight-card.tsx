interface FightCardProps {
  period: string
  fighter: string
  fights: Array<{
    date: string
    opponent: string
    result: string
  }>
}

export const FightCard = ({ period, fighter, fights }: FightCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">{period}</p>
        <h3 className="text-xl font-bold mt-2">{fighter}</h3>
      </div>
      <div className="space-y-4">
        {fights.map((fight, index) => (
          <div key={index} className="border-t pt-4">
            <p className="text-sm text-muted-foreground">{fight.date}</p>
            <p className="font-medium mt-1">{fight.opponent}</p>
            <p className="text-sm text-primary">{fight.result}</p>
          </div>
        ))}
      </div>
    </div>
  )
}