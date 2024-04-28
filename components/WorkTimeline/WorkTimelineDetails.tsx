import React, { useState } from "react"
import Image from "next/image"
import ProfilePicture from "@/public/assets/profile-picture.jpg"
import { formatMonthToMMM } from "@/helpers"
import WorkTimelineDetailsTypes from "./types/WorkTimelineDetails.interface"
import TechStack from "../TechStack/TechStack"
import "@/styles/About/WorkTimelineDetails.css"

const WorkTimelineDetails: React.FC<WorkTimelineDetailsTypes> = ({
    isWorkSelected,
    resetSelectedWork,
    activeWorkDetails
}) => {

    const [isProfileHovered, setIsProfileHovered] = useState(false)
    // TODO: split better into comps + respective style sheets

    return (
        <div
            className="slide_fade_from_right"
            style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto 7.5rem auto auto",
                flexBasis: "66.66%"
            }}
        >
            <div
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
                className={`profile ${isWorkSelected ? "profile_minimized" : ""}`}
            >
                <Image
                    draggable="false"
                    alt="Profile"
                    width={300}
                    height={500}
                    className={`profile_picture ${isWorkSelected ? "profile_picture_minimized" : ""
                        }`}
                    src={ProfilePicture}
                />
                <div
                    className={`profile_description ${isWorkSelected ? "minimized" : ""
                        }`}
                >
                    <div
                        className={`${isWorkSelected ? "profile_description_tag" : ""}`}
                    >
                        <h2
                            style={
                                !isWorkSelected ? { fontSize: "4rem" } : { fontSize: "2rem" }
                            }
                        >
                            Hi, I&apos;m Luca.
                        </h2>
                        {isWorkSelected && (
                            <button
                                id="profile_description_extender_container"
                                type="button"
                                onClick={() => resetSelectedWork()}
                            >
                                <h4
                                    style={{ fontSize: "2rem" }}
                                    className={`${isProfileHovered ? "" : ""
                                        } profile_description_extender`}
                                >
                                    Learn more about me.
                                </h4>
                            </button>
                        )}
                    </div>
                    <br />
                    <div className={`${isWorkSelected ? "hidden" : ""}`}>
                        <p>
                            I&apos;m primarily proficient in the React framework and its
                            ecosystem (Redux, RTK Query, Vite, etc.), as well as TypeScript,
                            UX/UI, HTML and CSS (Tailwind, LESS, HeadlessUI). Experienced in
                            functional back-end programming (Elixir, Phoenix, Ecto DSL,
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
                        <h4 style={{ fontSize: "1.5rem" }}>
                            My résumé is available for download{" "}
                            <a
                                href="/assets/cv-2023.pdf"
                                style={{ color: "var(--global--color-primary)" }}
                                rel="noreferrer"
                                target="_blank"
                            >
                                here
                            </a>
                            .
                        </h4>
                        <br />
                        <h4 style={{ fontSize: "1.5rem" }}>
                            {"For work enquiries, you may reach me through "}
                            <a
                                style={{ color: "var(--global--color-primary)" }}
                                href="https://www.linkedin.com/in/bruno-luca/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                            {" or "}
                            <a
                                style={{ color: "var(--global--color-primary)" }}
                                href="https://github.com/luca-bruno"
                                rel="noreferrer"
                                target="_blank"
                            >
                                GitHub
                            </a>
                            .
                        </h4>
                    </div>
                </div>
            </div>

            {isWorkSelected && activeWorkDetails && (
                <div className="work_timeline_description">
                    <div className="work_timeline_description_text">
                        <h1>
                            {activeWorkDetails.text} at {activeWorkDetails.location}
                        </h1>
                        <h3>
                            {`${formatMonthToMMM(activeWorkDetails.startMonth)} ${activeWorkDetails.startYear
                                } - 
              ${activeWorkDetails.endMonth
                                    ? formatMonthToMMM(activeWorkDetails.endMonth)
                                    : "Present"
                                } ${activeWorkDetails.endYear || ""}`}
                        </h3>

                        <h4>{activeWorkDetails.description.heading1 || ""}</h4>
                        <p>{activeWorkDetails.description.content1 || ""}</p>
                        <h4>{activeWorkDetails.description.heading2 || ""}</h4>
                        <p>{activeWorkDetails.description.content2 || ""}</p>
                        <h4>{activeWorkDetails.description.heading3 || ""}</h4>
                        <p>{activeWorkDetails.description.content3 || ""}</p>
                    </div>

                    <TechStack
                        title="Technologies used"
                        stack={activeWorkDetails.stack}
                        location={activeWorkDetails.location}
                    />
                </div>
            )}
        </div>
    )
}


export default WorkTimelineDetails
