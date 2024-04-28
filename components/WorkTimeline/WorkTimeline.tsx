"use client"

import React, { useEffect, useState } from "react"
import WORK_HISTORY_LIST from "../About/data"
import WorkTimelineList from "./WorkTimelineList"
import WorkTimelineDetails from "./WorkTimelineDetails"
import WorkTypes from "./types/WorkTypes.interface"

const WorkTimeline = () => {
    const [activeWork, setActiveWork] = useState<string>("")
    const [isWorkSelected, setIsWorkSelected] = useState(false)
    const [activeWorkDetails, setActiveWorkDetails] = useState<WorkTypes>()

    const resetSelectedWork = () => {
        setActiveWork("")
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
                {...{
                    isWorkSelected,
                    resetSelectedWork,
                    activeWorkDetails
                }}
            />
        </>
    )
}

export default WorkTimeline