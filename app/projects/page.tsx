"use client"

import Cards from "@/components/Cards/Cards"
import { arr } from "@/components/Cards/data"
import SidePanel from "@/components/SidePanel/SidePanel"
import { useEffect, useState } from "react"
import ProjectTypes from "../api/[types]/ProjectTypes.interface"

const page = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [activeCard, setActiveCard] = useState<string>()
  const [activeCardDetails, setActiveCardDetails] = useState<ProjectTypes>()

  useEffect(() => {
    setActiveCardDetails(arr.filter((el) => activeCard === el.id)[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard])

  return (
    <div style={{ display: "flex", height: "50%" }}>
      <Cards
        {...{
          setIsSidePanelOpen,
          setActiveCard,
          activeCard,
          arr,
          setActiveCardDetails
        }}
      />
      <SidePanel
        {...{
          isSidePanelOpen,
          setIsSidePanelOpen,
          setActiveCard,
          activeCardDetails
        }}
      />
    </div>
  )
}

export default page
