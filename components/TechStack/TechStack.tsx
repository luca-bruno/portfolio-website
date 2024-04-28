import React from "react"
import TechStackTypes from "./types/TechStack.interface"
import TechStackItem from "./TechStackItem"
import "@/styles/TechStack/TechStack.css"

const TechStack: React.FC<TechStackTypes> = ({ title, stack, location }) => (
    // TODO: rm style into classes + rename all css lol
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
