"use client"

import { ProjectTypes } from "@/components/TechStack/types/ProjectTypes.interface"
import React, { useEffect, useState } from "react"
import Cards from "../Cards/Cards"
import { PROJECT_LIST } from "../Cards/data"
import SidePanel from "../SidePanel/SidePanel"

const ProjectsShowcase = () => {
    const [activeCard, setActiveCard] = useState<string>()
    const [activeCardDetails, setActiveCardDetails] = useState<ProjectTypes>()

    useEffect(() => {
        setActiveCardDetails(PROJECT_LIST.filter(el => activeCard === el.id)[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCard])

    return (
        <>
            <Cards
                {...{
                    setActiveCard,
                    activeCard,
                    projectList: PROJECT_LIST,
                    setActiveCardDetails
                }}
            />
            <SidePanel activeCardDetails={activeCardDetails} />
        </>
    )
}

export default ProjectsShowcase