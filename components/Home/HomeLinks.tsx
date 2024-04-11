"use client"

import Link from "next/link"
import React, { useState } from "react"
import CONTACT_LIST from "./data"

const HomeLinks = () => {
    const [isContactIconGlowing, setIsContactIconGlowing] = useState(false)

    return (
        <div className="home_links slide_fade_from_left">
            <h4>
                Here&apos;s a bit <Link href="about" className="home_link" draggable="false">about me</Link>.
            </h4>
            <h4>
                Like <Link href="projects" className="home_link" draggable="false">my work</Link>? {" "}
                <span>
                    <button
                        type="button"
                        onClick={() => setIsContactIconGlowing(prev => !prev)}
                        className="home_link">
                        Get in touch
                    </button> with me.
                </span>
            </h4>

            {/* HomeLinksContact */}
            <div className="contact_row slide_fade_from_left">
                {CONTACT_LIST.map(({ name, link, icon: IconSvgComponent }) =>
                    <a
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        tabIndex={-1}
                        key={name}
                        draggable="false"
                        onMouseOver={() => setIsContactIconGlowing(false)}
                        onFocus={() => setIsContactIconGlowing(false)}
                    >
                        <button
                            aria-label={`Contact me through ${name}`}
                            type="button"
                            className={`contact_icon ${isContactIconGlowing ? "glow" : ""}`}
                        >
                            <IconSvgComponent />
                        </button>
                    </a>
                )}
            </div>
        </div>
    )
}

export default HomeLinks