"use client"

import Link from "next/link"
import React, { useState } from "react"
import HomeLinksContactRow from "./HomeLinksContactRow"
import "@/styles/Home/HomeLinks.css"

const HomeLinks = () => {
    const [isContactIconGlowing, setIsContactIconGlowing] = useState(false)

    return (
        <div className="home_links slide_fade_from_left">
            <h4>
                Here&apos;s a bit{" "}
                <Link href="about" className="home_link" draggable="false">
                    about me
                </Link>
                .
            </h4>

            <h4>
                Like{" "}
                <Link href="projects" className="home_link" draggable="false">
                    my work
                </Link>
                ?{" "}
                <span>
                    <button
                        type="button"
                        onClick={() => setIsContactIconGlowing(prev => !prev)}
                        className="home_link"
                    >
                        Get in touch
                    </button>{" "}
                    with me.
                </span>
            </h4>

            <HomeLinksContactRow
                isContactIconGlowing={isContactIconGlowing}
                setIsContactIconGlowing={setIsContactIconGlowing}
            />
        </div>
    )
}

export default HomeLinks
