"use client"

import { faChevronRight, faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import useStackIcon from "@/hooks/useStackIcon/useStackIcon"
import React, { useState } from "react"
import SidePanelTypes from "./types/SidePanel.interface"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/SidePanel.css"
import SlideShow from "../SlideShow/SlideShow"

const SidePanel: React.FC<SidePanelTypes> = ({
  isSidePanelOpen,
  setIsSidePanelOpen,
  setActiveCard,
  activeCardDetails
}) => {
  const [hovered, setHovered] = useState<string | null>(null)

  const { name, images, detailedDescription, hosted, repo, stack } = activeCardDetails || {}

  const check = (icon: string) => {
    const { mappedIcon } = useStackIcon(icon) || {}
    return mappedIcon?.src
  }

  return (
    // TODO: split components
    <>
      {isSidePanelOpen && (
        <div>
          <button
            type="button"
            className="sidepanel_close_button sidepanel_extension"
            onClick={() => {
              setIsSidePanelOpen(false)
              setActiveCard(undefined)
            }}
          >
            <FontAwesomeIcon
              className="sidepanel_close_button_icon sidepanel_extension_icon"
              icon={faChevronRight}
            />
          </button>
        </div>
      )}

      <div className={`sidepanel ${isSidePanelOpen ? "open" : "closed"}`}>
        {isSidePanelOpen && activeCardDetails && (
          <div className="sidepanel_content">
            <SlideShow {...{ images }} />

            <div className="sidepanel_info">
              <p className="sidepanel_title">{name}</p>
              <p className="sidepanel_description">{detailedDescription}</p>
            </div>

            <div className="sidepanel_buttons">
              {hosted && (
                <a href={hosted} rel="noreferrer" target="_blank">
                  <button type="button" className="sidepanel_button">
                    <FontAwesomeIcon
                      className="sidepanel_button_icon"
                      icon={faLink}
                    />
                    Visit live site
                  </button>
                </a>
              )}

              {repo && (
                <a href={repo} rel="noreferrer" target="_blank">
                  <button type="button" className="sidepanel_button">
                    <FontAwesomeIcon
                      className="sidepanel_button_icon"
                      icon={faGithub}
                    />
                    View repository on GitHub
                  </button>
                </a>
              )}
            </div>

            {stack && (
              <div className="sidepanel_stack">
                <p className="sidepanel_stack_title">
                  Made using the following technologies:
                </p>
                <div className="sidepanel_stack_items_container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                  {stack.map(
                    ({ prettyLabel, src }) =>
                      src && (
                        <span
                          style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
                          key={prettyLabel}
                        >
                          <Image
                            key={prettyLabel}
                            className="sidepanel_stack_item_icon"
                            src={check(src)}
                            alt={`${prettyLabel} logo`}
                            width={32}
                            height={32}
                            onMouseOver={() => setHovered(prettyLabel)}
                            onMouseLeave={() => setHovered(null)}
                          />
                          <p key={prettyLabel} className={`sidepanel_stack_item_icon_label ${hovered !== prettyLabel ? "hide" : ""}`}>
                            {prettyLabel}
                          </p>
                        </span>
                      )
                  )}
                </div>

              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default SidePanel
