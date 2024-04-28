import React, { useState } from "react"
import Image from "next/image"
import useStackIcon from "@/hooks/useStackIcon/useStackIcon"
import TechStackTypes from "./types/TechStack.interface"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import TechStackItem from "./TechStackItem"

const TechStack: React.FC<TechStackTypes> = ({ title, stack, location }) => (
    <div className="sidepanel_stack">
        <p className="sidepanel_stack_title">{title}:</p>
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
            }}
        >
            {stack?.map(
                ({
                    prettyLabel,
                    src
                }, index) =>
                    src && (
                        <TechStackItem
                            key={`${prettyLabel} used at ${location}`}
                            src={src}
                            location={location}
                            prettyLabel={prettyLabel}
                            index={index}
                        />
                    )
            )}
        </div>
    </div>
)

export default TechStack
