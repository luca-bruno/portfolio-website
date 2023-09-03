import ProjectTypes from "@/app/api/[types]/ProjectTypes.interface"

interface CardsTypes {
  setIsSidePanelOpen: (arg0: boolean) => void
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
