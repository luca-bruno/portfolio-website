"use client"

import ProjectTypes from '@/app/api/[types]/ProjectTypes.interface'
import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import { arr } from '../Cards/data'
import SidePanel from '../SidePanel/SidePanel'

const ProjectsShowcase = () => {
    const [activeCard, setActiveCard] = useState<string>()
    const [activeCardDetails, setActiveCardDetails] = useState<ProjectTypes>()

    useEffect(() => {
        setActiveCardDetails(arr.filter((el) => activeCard === el.id)[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCard])

    return (
        <>
            <Cards
                {...{
                    setActiveCard,
                    activeCard,
                    arr,
                    setActiveCardDetails
                }}
            />
            <SidePanel activeCardDetails={activeCardDetails} />
        </>
    )
}

export default ProjectsShowcase