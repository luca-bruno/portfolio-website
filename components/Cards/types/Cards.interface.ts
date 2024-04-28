import ProjectTypes from "@/app/api/[types]/ProjectTypes.interface"

interface CardsTypes {
  setActiveCard: (arg0: string | undefined) => void
  activeCard: string | undefined
  arr: ProjectTypes[]
  setActiveCardDetails: (arg0: ProjectTypes | undefined) => void
}

interface CardTypes {
  card: ProjectTypes
  selectCard: (id: string) => void
  activeCard: CardsTypes["activeCard"]
}

export type { CardsTypes, CardTypes }
