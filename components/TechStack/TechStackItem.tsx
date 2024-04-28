import React, { useState } from "react"
import Image from "next/image"
import useStackIcon from "@/hooks/useStackIcon/useStackIcon"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

const TechStackItem = ({ prettyLabel, index, location, src }) => {
    const [hovered, setHovered] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    const check = (icon: string) => {
        const { mappedIcon } = useStackIcon(icon) || {}
        return mappedIcon?.src
    }

    return (
        <span
            style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center"
            }}
            // key={`${prettyLabel} used at ${location}`}
            key={index}
        >
            {loading &&
                <div className="sidepanel_stack_item_icon">
                    <LoadingSpinner
                        key={`${prettyLabel} used at ${location} spinner`}
                        height={32}
                        width={24}
                        styles={{ display: loading ? "flex" : "none", justifyContent: "center", alignItems: "center" }}
                    />
                </div>
            }
            <Image
                unoptimized
                key={`${prettyLabel} used at ${location} logo`}
                className="sidepanel_stack_item_icon"
                draggable="false"
                src={check(src)}
                alt={`${prettyLabel} logo`}
                width={32}
                height={32}
                onMouseOver={() => setHovered(prettyLabel)}
                onMouseLeave={() => setHovered(null)}
                // for rendering but still hiding Image comp + avoid jumping elements
                style={loading ? { overflow: "hidden", position: "absolute" } : { overflow: "none", position: "relative" }}
                onLoad={() => setLoading(false)}
            />
            <p
                key={`${prettyLabel} used at ${location} label`}
                className={`sidepanel_stack_item_icon_label unselectable ${hovered !== prettyLabel ? "hide" : ""
                    }`}
            >
                {prettyLabel}
            </p>
        </span>
    )
}

export default TechStackItem