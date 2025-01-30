import { useState } from 'react'

interface FightCardProps {
  period: string
  fighter: string
  image: string
  country: string
  debut: string
  division: string
  className?: string
  fights: Array<{
    date: string
    opponent: string
    result: string
  }>
}

export const FightCard = ({ period, fighter, image, country, debut, division, fights, className }: FightCardProps) => {
  return (
    <div className={`bg-card rounded-lg shadow-lg p-6 border border-white/30 backdrop-blur-lg relative ${className || ''}`}>
      <div className="mb-4">
        <img
          src={image}
          alt={`${fighter} image`}
          className="w-full h-auto rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mt-2 text-black dark:text-white">{fighter}</h3>
        <p className="font-bold text-black dark:text-white">Origen: {country}</p>
        <p className="font-bold text-black dark:text-white">Debut: {debut}</p>
        <p className="font-bold text-black dark:text-white">Division: {division}</p>
      </div>
    </div>
  )
}