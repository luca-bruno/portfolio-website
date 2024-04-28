import React from "react"
import Image from "next/image"
import { defaultImage } from "./data"
import { CardTypes } from "./types/Cards.interface"
import "@/styles/Cards/Card.css"

const Card: React.FC<CardTypes> = ({ card, selectCard, activeCard }) => {
  const { id, images, imagesMobile, name, description } = card || {}

  const isCurrentlyActiveCard = (cardId: string) => activeCard === cardId

  return (
    <button
      type="button"
      onClick={() => selectCard(id)}
      className={`cards_card ${isCurrentlyActiveCard(id) && "active_card"}`}
      key={id}
    >
      <Image
        src={images[0] || imagesMobile[0] || defaultImage}
        draggable="false"
        key={id}
        alt="card"
        width={1920}
        height={1080}
        className="cards_image"
      />

      <div className="cards_text">
        <p className="cards_title">{name}</p>
        <p className="cards_description">{description}</p>
      </div>
    </button>
  )
}

export default Card
