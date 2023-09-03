import React from "react"
import Image from "next/image"
import { defaultImage } from "./data"
import { CardTypes } from "./types/Cards.interface"

const Card: React.FC<CardTypes> = ({ card, selectCard, activeCard }) => {
  const { id, images, name, description } = card || {}

  const isCurrentlyActiveCard = (cardId: string) => activeCard === cardId

  return (
    <button
      type="button"
      onClick={() => selectCard(id)}
      className={`cards_card ${isCurrentlyActiveCard(id) && "active"}`}
      key={id}
    >
      <Image
        draggable="false"
        alt="card"
        width={1920}
        height={1080}
        className="cards_image"
        src={images[0] || defaultImage}
      />
      <div className="cards_text">
        <p className="cards_title">{name}</p>
        <p className="cards_description">{description}</p>
      </div>
    </button>
  )
}

export default Card
