import { ProjectTypes } from "@/components/TechStack/types/ProjectTypes.interface"

interface CardsTypes {
  setActiveCard: (arg0: string | undefined) => void
  activeCard: string | undefined
  projectList: ProjectTypes[]
  setActiveCardDetails: (arg0: ProjectTypes | undefined) => void
}

interface CardTypes {
  card: ProjectTypes
  selectCard: (id: string) => void
  activeCard: CardsTypes["activeCard"]
}

export type { CardsTypes, CardTypes }
