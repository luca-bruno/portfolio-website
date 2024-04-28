import React, { useState } from "react"
import { formatMonthToMMM } from "@/helpers"
import Image from "next/image"
import WORK_HISTORY_LIST from "../About/data"
import WorkTimelineListTypes from "./types/WorkTimelineList.interface"
import "@/styles/About/WorkTimelineList.css"

const WorkTimelineList: React.FC<WorkTimelineListTypes> = ({ selectWork, activeWork }) => {
    const [hoveredWork, setHoveredWork] = useState<string>()

    const isCurrentlyActiveWork = (id: string) => activeWork === id
    const isCurrentlyHoveredWork = (id: string) => hoveredWork === id
    // TODO: split better into comps + respective style sheets

    return (
        <div className="timeline slide_fade_from_left">
            {WORK_HISTORY_LIST.map(
                (
                    {
                        id,
                        startMonth,
                        startYear,
                        endMonth,
                        endYear,
                        text,
                        icon,
                        location
                    },
                    index
                ) => (
                    <div
                        key={id}
                        onMouseOver={() => setHoveredWork(id)}
                        onFocus={() => setHoveredWork(id)}
                        onMouseOut={() => setHoveredWork(undefined)}
                        onBlur={() => setHoveredWork(undefined)}
                    >
                        <button
                            type="button"
                            className="timeline_step"
                            onClick={() => selectWork(id)}

                        >
                            <div className="timeline_dot">
                                <Image
                                    draggable="false"
                                    alt={`${text} ${location} logo`}
                                    width={80}
                                    height={80}
                                    className={`dot ${isCurrentlyActiveWork(id) ? "scale" : "scale_default"
                                        }`}
                                    src={icon}
                                />
                            </div>

                            <div
                                className={`timeline_info ${isCurrentlyActiveWork(id) ? "active" : ""
                                    }`}
                                style={{ flexDirection: "column" }}
                            >
                                <div className={isCurrentlyHoveredWork(id) ? "active" : ""} style={{ paddingBottom: "1rem", fontSize: "small" }}>
                                    {`${formatMonthToMMM(startMonth)} ${startYear} - ${endMonth ? formatMonthToMMM(endMonth) : "Present"
                                        } ${endYear || ""}`}
                                </div>
                                <div className={isCurrentlyHoveredWork(id) ? "active" : ""} style={{ paddingBottom: "1rem", fontSize: "1.25rem" }}>
                                    {text}
                                </div>
                                <div className={isCurrentlyHoveredWork(id) ? "active" : ""} style={{ fontSize: "large" }}>{location}</div>
                            </div>
                        </button>

                        {WORK_HISTORY_LIST.length !== index + 1 && (
                            <div className="timeline_separator_grid">
                                <div className="timeline_separator" />
                            </div>
                        )}
                    </div>
                )
            )}
        </div>
    )
}


export default WorkTimelineList