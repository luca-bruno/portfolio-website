import React from "react"
import "@/styles/Cards/Cards.css"
import { ProjectTypes } from "@/components/TechStack/types/ProjectTypes.interface"
import Card from "./Card"
import { CardsTypes } from "./types/Cards.interface"

const Cards: React.FC<CardsTypes> = ({
  setActiveCard,
  activeCard,
  projectList,
  setActiveCardDetails
}) => {
  const selectCard = (id: string) => {
    setActiveCard(id)
    setActiveCardDetails(projectList.filter(el => activeCard === el.id)[0])

    if (id === activeCard) {
      setActiveCard(undefined)
      setActiveCardDetails(undefined)
    }
  }

  return (
    <div className="cards_grid slide_fade_from_left">
      {/* TODO: paginate w/ limit 9 */}
      {/* TODO: active card logic */}
      {projectList.map((card: ProjectTypes) => (
        <Card key={card.id} {...{ card, selectCard, activeCard }} />
      ))}
    </div>
  )
}

export default Cards
