import ProjectTypes from "@/app/api/[types]/ProjectTypes.interface"

interface SidePanelTypes {
  isSidePanelOpen: boolean
  setIsSidePanelOpen: (arg0: boolean) => void
  setActiveCard: (id: string | undefined) => void
  activeCardDetails: ProjectTypes | undefined
}

export default SidePanelTypes
