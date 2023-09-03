"use client"

import { faChevronRight, faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import useStackIcon from "@/hooks/useStackIcon/useStackIcon"
import React from "react"
import SidePanelTypes from "./types/SidePanel.interface"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/SidePanel.css"
import SlideShow from "../SlideShow/SlideShow"

const SidePanel: React.FC<SidePanelTypes> = ({ isSidePanelOpen, setIsSidePanelOpen, setActiveCard, activeCardDetails }) => {
  const { name, images, hosted, repo, stack } = activeCardDetails || {}

  const check = (icon: string) => {
    const { mappedIcon } = useStackIcon(icon) || {}
    return mappedIcon?.src
  }

  return (
    <div className={`sidepanel ${isSidePanelOpen ? "open" : "closed"}`}>

      <button type="button" className="sidepanel_close_button" onClick={() => { setIsSidePanelOpen(false); setActiveCard(undefined) }}>
        <FontAwesomeIcon className="sidepanel_close_button_icon" icon={faChevronRight} />
      </button>

      {isSidePanelOpen && activeCardDetails &&
        <div className="sidepanel_content">
          <SlideShow {...{ images }} />

          <div className="sidepanel_info">
            <p className="sidepanel_title">{name}</p>
            <p className="sidepanel_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis laboriosam impedit accusamus ex repellendus, ab excepturi? Asperiores, vitae,
              consequatur dolorum aliquid aliquam est perferendis recusandae eveniet at reiciendis saepe
              architecto!
            </p>
          </div>

          <div className="sidepanel_buttons">
            {hosted &&
              <a href={hosted} rel="noreferrer" target="_blank">
                <button type="button" className="sidepanel_button">
                  <FontAwesomeIcon className="sidepanel_button_icon" icon={faLink} />
                  Visit live site
                </button>
              </a>
            }

            {repo &&
              <a href={repo} rel="noreferrer" target="_blank">
                <button type="button" className="sidepanel_button">
                  <FontAwesomeIcon className="sidepanel_button_icon" icon={faGithub} />
                  View repository on GitHub
                </button>
              </a>
            }
          </div>

          {stack &&
            <div className="sidepanel_stack">
              <p className="sidepanel_stack_title">Made using the following technologies:</p>
              {stack.map((tech: string) => (
                tech &&
                <Image
                  key={tech}
                  className="sidepanel_stack_item_icon"
                  src={check(tech)}
                  alt="My SVG"
                  width={50}
                  height={50}
                />
              ))}
            </div>
          }
        </div>
      }
    </div>
  )
}

export default SidePanel