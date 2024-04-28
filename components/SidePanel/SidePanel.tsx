"use client"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/SidePanel.css"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStackIcon from "@/hooks/useStackIcon/useStackIcon"
import React, { useEffect, useState } from "react"
import moment from "moment"
import { compareDatesInWeeks } from "@/helpers"
import SidePanelTypes from "./types/SidePanel.interface"
import SlideShow from "../SlideShow/SlideShow"
import TechStack from "../TechStack/TechStack"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

const SidePanel: React.FC<SidePanelTypes> = ({ activeCardDetails }) => {
  const [hovered, setHovered] = useState<string | null>(null)
  const [repoLastCommitDate, setRepoLastCommitDate] = useState<string>()
  const [lastCommitDateAvailable, setLastCommitDateAvailable] = useState(true)
  const [repoLastCommitDateLoading, setRepoLastCommitDateLoading] = useState(false)
  const [fullscreenMode, setFullscreenMode] = useState(false)

  const {
    name,
    images,
    imagesMobile,
    detailedDescription,
    hosted,
    repoName,
    repoUrl,
    repoOwner,
    stack
  } = activeCardDetails || {}

  const check = (icon: string) => {
    const { mappedIcon } = useStackIcon(icon) || {}
    return mappedIcon?.src
  }

  useEffect(() => {
    async function getRepoLastCommitDate() {
      try {
        setRepoLastCommitDateLoading(true)
        if (repoName) {
          const res = await fetch(`/api/repositories/getRepoLastCommitDate?owner=${repoOwner}&repo=${repoName}`)
          if (res) {
            const data = await res.json()
            setRepoLastCommitDate(data)
          }
        }
      } catch (error) {
        setLastCommitDateAvailable(false)
      } finally {
        setRepoLastCommitDateLoading(false)
      }
    }

    getRepoLastCommitDate()
  }, [repoName])


  return (
    // TODO: split components
    <div
      style={{
        padding: activeCardDetails ? "5px 30px 0px 10px" : "0px 0px 0px 0px",
        width: fullscreenMode ? "100%" : "70%"
      }}
      className="sidepanel open slide_fade_from_right" >
      {
        activeCardDetails ? (
          <div className="sidepanel_content" >
            <SlideShow {...{ images, imagesMobile, fullscreenMode, setFullscreenMode }} />

            <div className="sidepanel_info">
              <h1 className="sidepanel_title">{name}</h1>
              <p className="sidepanel_description">{detailedDescription}</p>
            </div>

            <div className="sidepanel_buttons">
              {hosted ? (
                <a href={hosted} rel="noreferrer" target="_blank">
                  <button type="button" className="sidepanel_button">
                    <FontAwesomeIcon
                      className="sidepanel_button_icon"
                      icon={faLink}
                    />
                    Visit live site
                  </button>
                </a>
              ) : (
                <div />
              )}

              {repoUrl && (
                <a href={repoUrl} rel="noreferrer" target="_blank">
                  <button type="button" className="sidepanel_button">
                    <FontAwesomeIcon
                      className="sidepanel_button_icon"
                      icon={faGithub} />
                    View repository on GitHub
                  </button>
                </a>
              )}

            </div>

            {(repoUrl && lastCommitDateAvailable && repoLastCommitDate) &&
              <p className="sidepanel_last_commit_date">
                {repoLastCommitDateLoading ?
                  <>
                    <LoadingSpinner
                      width={16}
                      height={16}
                      styles={{ margin: "0 10px 0 0" }}
                    />
                    Retrieving last repository commit date...
                  </>
                  :
                  ` Last updated on ${moment(repoLastCommitDate).format("DD/MM/YYYY HH:mm")}
              (${compareDatesInWeeks(moment(repoLastCommitDate).format("DD/MM/YYYY"))} weeks ago)`
                }
              </p>
            }

          </div >
        ) :
          <div style={{ margin: "auto 7.5rem auto 2.5rem" }}>
            <h2 style={{ fontSize: "4rem" }}>Here&apos;s some projects I&apos;ve worked on.</h2>

            <div style={{ marginTop: "2rem", fontSize: "1.25rem", textAlign: "justify", textJustify: "inter-word" }}>
              <p>As someone who&apos;s passionate about exploring diverse ideas and experimenting with different web technologies
                in my spare time, my projects also include academic and collaborative endeavors,
                all driven by a curiosity to learn.
              </p>
              <br />
              <p>
                Each project display features an image preview slideshow, a short description,
                a list of technologies used, as well as links to public code repositories (where available).
              </p>
              <br />
            </div>

            <h4 style={{ fontSize: "1.5rem" }}>
              Feel free to select a project to learn more about it -
              if available, you may also use an interactive demo to explore its features firsthand.
            </h4>
          </div >
      }

      {
        stack &&

        <TechStack
          title="Made using the following technologies"
          stack={stack}
        // location={activeWorkDetails.location}
        />
      }
    </div >
  )
}

export default SidePanel
