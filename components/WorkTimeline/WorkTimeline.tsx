"use client"

import React, { useEffect, useState } from "react"
import WORK_HISTORY_LIST from "../About/data"
import WorkTimelineList from "./WorkTimelineList"
import WorkTimelineDetails from "./WorkTimelineDetails"

const WorkTimeline = () => {
    const [activeWork, setActiveWork] = useState<string>()
    const [isWorkSelected, setIsWorkSelected] = useState(false)
    const [activeWorkDetails, setActiveWorkDetails] = useState<typeof WORK_HISTORY_LIST[0]>()

    const resetSelectedWork = () => {
        setActiveWork(undefined)
        setIsWorkSelected(false)
        setActiveWorkDetails(undefined)
    }

    const selectWork = (id: string) => {
        setActiveWork(id)
        setIsWorkSelected(true)
        setActiveWorkDetails(
            WORK_HISTORY_LIST.filter(el => activeWork === el.id)[0]
        )

        if (id === activeWork) {
            resetSelectedWork()
        }
    }

    useEffect(() => {
        setActiveWorkDetails(
            WORK_HISTORY_LIST.filter(el => activeWork === el.id)[0]
        )
    }, [activeWork])

    return (
        <>
            <WorkTimelineList
                selectWork={selectWork}
                activeWork={activeWork}
            />

            <WorkTimelineDetails
                {...{ isWorkSelected, resetSelectedWork, activeWorkDetails }}
            />
        </>
    )
}

export default WorkTimeline