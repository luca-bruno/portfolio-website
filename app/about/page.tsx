/* eslint-disable max-len */
"use client"

import "@/styles/SidePanel.css"
import "@/styles/WorkTimeline.css"
import Image from "next/image"
import McastLogo from "@/assets/MCAST-Institute-for-the-Creative-Arts-logo.png"
import WyzerLogo from "@/assets/Wyzer-logo.png"
import React, { useEffect, useState } from "react"
import moment from "moment"
import useStackIcon from "@/hooks/useStackIcon/useStackIcon"
import ProfilePicture from "@/assets/ProfilePicture.png"

const page = () => {
  const arr = [
    {
      id: "1",
      icon: WyzerLogo,
      text: "Full Stack Developer",
      description: {
        heading1: "Full Stack Development:",
        content1:
          "Keeping up to date with the latest front-end/JavaScript trends, and utilising cutting-edge front-end technologies, such as functional React, TypeScript, Tailwind, Headless UI, Redux Toolkit and RTK Query to create scalable, robust and elegant user experiences. Developing RESTful APIs and WebSockets using functional programming language Elixir, its Phoenix web framework and Ecto database DSL, as well as PostgreSQL. Formulating and debugging business logic processes using Business Process Modeling Notation standard in conjunction with the Camunda Zeebe workflow engine and the Alibaba Formily form solution library.",
        heading2: "Collaborative Development in an Agile Environment:",
        content2:
          "Working in an agile, scrum environment, utilizing methodologies such as “Scrumban” (Scrum + Kanban)board and sprints, as well as gaining familiarity with management tools like Jira and Clockify. Participating in every-other-day team stand-ups and sprint planning meetings, ensuring efficient task allocation and timely delivery of features. Collaborating with team members through tools like Figma for design ideation, and pair programming to promote knowledge sharing and code quality. Utilizing Git for version control, following practices such as merging and rebasing to maintain a clean, standardised codebase with developer experience in mind.",
        heading3: "Client Interaction and Requirements Gathering:",
        content3:
          " Working closely with clients, both through direct meetings and regular communication, to understand and proactively adapt to rapidly-evolving requirements and expectations."
      },
      location: "Wyzer",
      stack: [
        "elixir",
        "typescript",
        "reduxToolkit",
        "rtkQuery",
        "tailwindcss"
      ],
      startMonth: 1,
      startYear: 2022
    },
    {
      id: "2",
      icon: McastLogo,
      text: "Bachelor of Arts (Honours) in Interactive Media",
      description: "",
      location: "MCAST",
      stack: [],
      startMonth: 9,
      startYear: 2018,
      endMonth: 6,
      endYear: 2021
    }
  ]

  const formatMonth = (month: number) =>
    moment()
      .month(month - 1)
      .format("MMM")

  const check = (icon: string) => {
    const { mappedIcon } = useStackIcon(icon) || {}
    return mappedIcon?.src
  }

  const [isWorkHovered, setIsWorkHovered] = useState(false)
  const [isProfileHovered, setIsProfileHovered] = useState(false)
  const [isWorkSelected, setIsWorkSelected] = useState(false)
  const [activeWork, setActiveWork] = useState<string>()
  const [activeWorkDetails, setActiveWorkDetails] = useState<any>()

  const isCurrentlyActiveWork = (workId: string) => activeWork === workId

  const selectWork = (id: string) => {
    setActiveWork(id)
    setIsWorkSelected(true)
    setActiveWorkDetails(arr.filter((el) => activeWork === el.id)[0])

    if (id === activeWork) {
      setIsWorkSelected(false)
      setActiveWork(undefined)
      setActiveWorkDetails(undefined)
    }
  }

  useEffect(() => {
    setActiveWorkDetails(arr.filter((el) => activeWork === el.id)[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeWork])

  const profilePicture =
    "https://media.licdn.com/dms/image/D4E03AQF8FbuxFLECLg/profile-displayphoto-shrink_800_800/0/1691088974819?e=1699488000&v=beta&t=8L2HMWuLfRixPT5sMxZaypZboFwvb_D5-4R4elj7ktg"

  return (
    <div className="work_timeline">
      <div className="timeline">
        {/* <WorkTimeline /> */}
        {arr.map(
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
            <React.Fragment key={id}>
              <button
                type="button"
                className="timeline_step"
                onClick={() => selectWork(id)}
              >
                <div
                  className={`timeline_dot ${isCurrentlyActiveWork(id) ? "active" : ""
                    }`}
                >
                  <Image
                    draggable="false"
                    alt={`${text} ${location} logo`}
                    width={200}
                    height={350}
                    className="dot"
                    src={icon}
                  />
                </div>

                <div
                  className={`timeline_info ${isCurrentlyActiveWork(id) && "active"
                    }`}
                  style={{ flexDirection: "column" }}
                >
                  <div style={{ paddingBottom: "1rem", fontSize: "small" }}>
                    {`${formatMonth(startMonth)} ${startYear}`} -{" "}
                    {`${endMonth ? formatMonth(endMonth) : ""} ${endYear || ""
                      }`}
                  </div>
                  <div style={{ paddingBottom: "1rem", fontSize: "x-large" }}>
                    {text}
                  </div>
                  <div style={{ fontSize: "large" }}>{location}</div>
                </div>
              </button>

              {arr.length !== index + 1 && (
                <div className="timeline_separator_grid">
                  <div className="timeline_separator" />
                </div>
              )}
            </React.Fragment>
          )
        )}
      </div>

      <div>
        <div
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
          className={`profile ${isWorkSelected ? "profile_minimized" : ""}`}
        >
          <Image
            draggable="false"
            alt="Profile"
            width={200}
            height={200}
            className={`profile_picture ${isWorkSelected ? "profile_picture_minimized" : ""
              }`}
            src={ProfilePicture}
          // src={profilePicture}
          />
          <div
            className={`profile_description ${isWorkSelected ? "minimized" : ""
              }`}
          >
            <p className={`${isWorkSelected ? "profile_description_tag" : ""}`}>
              Hi, I&apos;m Luca.
              {isWorkSelected && (
                <button
                  type="button"
                  onClick={() => setIsWorkSelected((prev) => !prev)}
                >
                  <p
                    className={`${isProfileHovered ? "underline" : ""
                      } profile_description_extender`}
                  >
                    Learn more about me.
                  </p>
                </button>
              )}
            </p>
            <br />
            <div className={`${isWorkSelected ? "hidden" : ""}`}>
              <p>
                I am primarily proficient in the React Framework and its
                ecosystem (Redux, RTK Query, Vite, etc.), as well as TypeScript,
                UX/UI, HTML and CSS (Tailwind, LESS, Headless UI). Experienced
                in functional back-end programming (Elixir, Phoenix, Ecto DSL,
                PostgreSQL) and knowledgeable in JavaScript server-side
                rendering (Next.js).
              </p>
              <br />
              <p>
                I believe my technical capabilities would make me a valuable
                addition to your development team, as my proficiency enables me
                to create performant applications with a focus on sleek design
                that prioritise user experience.
              </p>
              <br />
              <p>
                My passion drives continuous learning, allowing me to keep a
                finger on the pulse of the rapidly-evolving industry of web
                development, through self-directed learning and consistent
                professional development.
              </p>
              <br />
              <p>
                All the while, I strive to maintain code as meticulously clean
                and developer-friendly, adhering to best practices.
              </p>
            </div>
          </div>
        </div>

        {isWorkSelected && activeWorkDetails && (
          <div className="work_timeline_description">
            <h1>
              {activeWorkDetails.text} at {activeWorkDetails.location}
            </h1>
            <h3>
              {" "}
              {`${formatMonth(activeWorkDetails.startMonth)} ${activeWorkDetails.startYear
                }`}{" "}
              -{" "}
              {`${activeWorkDetails.endMonth
                ? formatMonth(activeWorkDetails.endMonth)
                : ""
                } ${activeWorkDetails.endYear || ""}`}
            </h3>

            <h4>{activeWorkDetails.description.heading1}</h4>
            <p>{activeWorkDetails.description.content1}</p>
            <h4>{activeWorkDetails.description.heading2}</h4>
            <p>{activeWorkDetails.description.content2}</p>
            <h4>{activeWorkDetails.description.heading3}</h4>
            <p>{activeWorkDetails.description.content3}</p>

            <div className="sidepanel_stack">
              <p className="sidepanel_stack_title">
                Made using the following technologies:
              </p>
              {arr[0].stack.map(
                (tech: string) =>
                  tech && (
                    <Image
                      key={tech}
                      className="sidepanel_stack_item_icon"
                      src={check(tech)}
                      alt="My SVG"
                      width={50}
                      height={50}
                    />
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default page
