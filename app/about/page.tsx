/* eslint-disable max-len */

"use client"

import "@/styles/SidePanel.css"
import "@/styles/WorkTimeline.css"
import Image from "next/image"
import McastIcon from "@/public/assets/icons/mcast-icon.png"
import WyzerIcon from "@/public/assets/icons/wyzer-icon.png"
import React, { useEffect, useState } from "react"
import moment from "moment"
import useStackIcon from "@/hooks/useStackIcon/useStackIcon"
import ProfilePicture from "@/public/assets/profile-picture.png"
import Link from "next/link"

const page = () => {
  const arr = [
    {
      id: "1",
      icon: WyzerIcon,
      text: "Full Stack Developer",
      description: {
        heading1: "Full Stack Development:",
        content1:
          "Keeping up to date with the latest front-end/JavaScript trends, and utilising cutting-edge front-end technologies, such as functional React, TypeScript, Tailwind, Headless UI, Redux Toolkit and RTK Query to create scalable, robust and elegant user experiences. Developing RESTful APIs and WebSockets using functional programming language Elixir, its Phoenix web framework and Ecto database DSL, as well as PostgreSQL. Formulating and debugging business logic processes using Business Process Modeling Notation standard in conjunction with the Camunda Zeebe workflow engine and the Alibaba Formily form solution library.",
        heading2: "Collaborative Development in an Agile Environment:",
        content2:
          "Working in an agile, scrum environment, utilizing methodologies such as “Scrumban” (Scrum + Kanban) board and sprints, as well as gaining familiarity with management tools like Jira and Clockify. Participating in every-other-day team stand-ups and sprint planning meetings, ensuring efficient task allocation and timely delivery of features. Collaborating with team members through tools like Figma for design ideation, and pair programming to promote knowledge sharing and code quality. Utilizing Git for version control, following practices such as merging and rebasing to maintain a clean, standardised codebase with developer experience in mind.",
        heading3: "Client Interaction and Requirements Gathering:",
        content3:
          "Working closely with clients, both through direct meetings and regular communication, to understand and proactively adapt to rapidly-evolving requirements and expectations."
      },
      location: "Wyzer",
      stack: [
        { prettyLabel: "React", src: "react" },
        { prettyLabel: "TypeScript", src: "typescript" },
        { prettyLabel: "Redux Toolkit", src: "reduxToolkit" },
        { prettyLabel: "RTK Query", src: "rtkQuery" },
        { prettyLabel: "Elixir", src: "elixir" },
        { prettyLabel: "Phoenix", src: "phoenix" },
        { prettyLabel: "Ecto", src: "ecto" },
        { prettyLabel: "PostgreSQL", src: "postgresql" },
        { prettyLabel: "TailwindCSS", src: "tailwindcss" },
        { prettyLabel: "Headless UI", src: "headlessUi" },
        { prettyLabel: "ESLint", src: "eslint" },
        { prettyLabel: "Vite", src: "vite" },
        { prettyLabel: "Yarn", src: "yarn" },
        { prettyLabel: "Figma", src: "figma" },
        { prettyLabel: "Formily", src: "formily" },
        { prettyLabel: "Zeebe", src: "zeebe" }
      ],
      startMonth: 1,
      startYear: 2022
    },
    {
      id: "2",
      icon: McastIcon,
      text: "Bachelor of Arts (Honours) in Interactive Media",
      description: {
        heading1: "Grade:",
        content1: "First Class",
        heading2: "Dissertation:",
        content2: "Through the eyes of AI: the potential professional application of the automated creation of basic webpages” - An analysis of the pix2code algorithm and its practical capabilities",
        heading3: "Key units:",
        content3: "Hybrid web & mobile app development using HTML, CSS (Sass), vanilla JavaScript (and its Angular framework, Ionic SDK), vanilla PHP (and its CodeIgniter framework) as well as through WYSIWYG editors (WordPress, Wix), user experience and user interaction (UX/UI), game development on Unity, game design and player psychology, introduction to game AI algorithms, principles of graphic design, personal branding, editorial design, visual thinking and idea generation"
      },
      location: "MCAST",
      stack: [
        { prettyLabel: "HTML", src: "html" },
        { prettyLabel: "CSS", src: "css" },
        { prettyLabel: "JavaScript", src: "javascript" },
        { prettyLabel: "Angular", src: "angular" },
        { prettyLabel: "Ionic", src: "ionic" },
        { prettyLabel: "TypeScript", src: "typescript" },
        { prettyLabel: "Sass", src: "sass" },
        { prettyLabel: "Bootstrap", src: "bootstrap" },
        { prettyLabel: "PHP", src: "php" },
        { prettyLabel: "CodeIgniter", src: "codeigniter" },
        { prettyLabel: "MySQL", src: "mysql" },
        { prettyLabel: "C#", src: "cSharp" },
        { prettyLabel: "Unity", src: "unity" },
        { prettyLabel: "Adobe XD", src: "adobeXd" },
        { prettyLabel: "WordPress", src: "wordpress" },
        { prettyLabel: "Wix", src: "wix" }
      ],
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

  const [hovered, setHovered] = useState<string | null>(null)

  const [isProfileHovered, setIsProfileHovered] = useState(false)
  const [isWorkSelected, setIsWorkSelected] = useState(false)
  const [activeWork, setActiveWork] = useState<string>()
  const [activeWorkDetails, setActiveWorkDetails] = useState<any>()

  const isCurrentlyActiveWork = (workId: string) => activeWork === workId

  const reset = () => {
    setIsWorkSelected(false)
    setActiveWork(undefined)
    setActiveWorkDetails(undefined)
  }

  const selectWork = (id: string) => {
    setActiveWork(id)
    setIsWorkSelected(true)
    setActiveWorkDetails(arr.filter(el => activeWork === el.id)[0])

    if (id === activeWork) {
      reset()
    }
  }

  useEffect(() => {
    setActiveWorkDetails(arr.filter(el => activeWork === el.id)[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeWork])

  const profilePicture =
    "https://media.licdn.com/dms/image/D4E03AQF8FbuxFLECLg/profile-displayphoto-shrink_800_800/0/1691088974819?e=1699488000&v=beta&t=8L2HMWuLfRixPT5sMxZaypZboFwvb_D5-4R4elj7ktg"

  return (
    <div className="work_timeline">
      <div className="timeline slide_fade_from_left">
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
                  className="timeline_dot"
                >
                  <Image
                    draggable="false"
                    alt={`${text} ${location} logo`}
                    width={200}
                    height={350}
                    className={`dot ${isCurrentlyActiveWork(id) ? "scale" : ""}`}
                    src={icon}
                  />
                </div>

                <div
                  className={`timeline_info ${isCurrentlyActiveWork(id) ? "active" : ""
                    }`}
                  style={{ flexDirection: "column" }}
                >
                  <div style={{ paddingBottom: "1rem", fontSize: "small" }}>
                    {`${formatMonth(startMonth)} ${startYear} - ${endMonth ? formatMonth(endMonth) : "Present"} ${endYear || ""}`}
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

      <div
        className="slide_fade_from_right"
        style={{ display: "flex", flexDirection: "column", margin: "auto" }}
      >
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
            className={`profile_picture ${isWorkSelected ? "profile_picture_minimized" : ""}`}
            src={ProfilePicture}
          // src={profilePicture}
          />
          <div
            className={`profile_description ${isWorkSelected ? "minimized" : ""}`}
          >
            <p className={`${isWorkSelected ? "profile_description_tag" : ""}`}>
              Hi, I&apos;m Luca.
              {isWorkSelected && (
                <button
                  id="profile_description_extender_container"
                  type="button"
                  onClick={() => reset()}
                >
                  <p
                    className={`${isProfileHovered ? "" : ""} profile_description_extender`}
                  >
                    Learn more about me.
                  </p>
                </button>
              )}
            </p>
            <br />
            <div className={`${isWorkSelected ? "hidden" : ""}`}>
              <p>
                I am primarily proficient in the React framework and its
                ecosystem (Redux, RTK Query, Vite, etc.), as well as TypeScript,
                UX/UI, HTML and CSS (Tailwind, LESS, HeadlessUI). Experienced
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
              <br />
              <p>
                My résumé is available for download <a href="/assets/cv-2023.pdf" style={{ color: "var(--global--color-primary)" }} rel="noreferrer" target="_blank">here.</a>
              </p>
              <br />
              <p>
                For work enquiries, you may reach me through the
                <Link href="contact" style={{ color: "var(--global--color-primary)", padding: "0 0.3rem 0 0.3rem" }}>Contact</Link>
                section or through <a style={{ color: "var(--global--color-primary)" }} href="https://www.linkedin.com/in/bruno-luca/" rel="noreferrer" target="_blank">LinkedIn</a>
                {" or "}
                <a style={{ color: "var(--global--color-primary)" }} href="https://github.com/luca-bruno" rel="noreferrer" target="_blank">GitHub</a>.
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
              {`${formatMonth(activeWorkDetails.startMonth)} ${activeWorkDetails.startYear} - 
              ${activeWorkDetails.endMonth ? formatMonth(activeWorkDetails.endMonth) : "Present"} ${activeWorkDetails.endYear || ""}`}
            </h3>

            <h4>{activeWorkDetails.description.heading1 || ""}</h4>
            <p>{activeWorkDetails.description.content1 || ""}</p>
            <h4>{activeWorkDetails.description.heading2 || ""}</h4>
            <p>{activeWorkDetails.description.content2 || ""}</p>
            <h4>{activeWorkDetails.description.heading3 || ""}</h4>
            <p>{activeWorkDetails.description.content3 || ""}</p>

            <div className="sidepanel_stack">
              <p className="sidepanel_stack_title">
                Technologies used:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

                {activeWorkDetails.stack.map(
                  ({ prettyLabel, src }: { prettyLabel: string, src: string }) =>
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
          </div>
        )}
      </div>
    </div >
  )
}

export default page
