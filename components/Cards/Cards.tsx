import React from "react"
import "@/styles/Cards.css"
import { ProjectTypes } from "@/app/api/[types]/ProjectTypes.interface"
import Card from "./Card"
import { CardsTypes } from "./types/Cards.interface"

const Cards: React.FC<CardsTypes> = ({
  setActiveCard,
  activeCard,
  arr,
  setActiveCardDetails
}) => {
  const selectCard = (id: string) => {
    setActiveCard(id)
    setActiveCardDetails(arr.filter(el => activeCard === el.id)[0])

    if (id === activeCard) {
      setActiveCard(undefined)
      setActiveCardDetails(undefined)
    }
  }

  return (
    <div className="cards_grid slide_fade_from_left">
      {/* TODO: paginate w/ limit 9 */}
      {/* TODO: active card logic */}
      {arr.map((card: ProjectTypes) => (
        <Card key={card.id} {...{ card, selectCard, activeCard }} />
      ))}
    </div>
  )
}

export default Cards
