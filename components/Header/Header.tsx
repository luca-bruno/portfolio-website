"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import "@/styles/Header.css"
import { rubik } from "@/app/fonts"
import BrunoLucaIcon from "@/public/assets/icons/brunoluca-icon.svg"
import Image from "next/image"

const Header = () => {
  const pathname = usePathname()

  const isActive = (currentPathname: string) =>
    currentPathname === pathname ? "header_buttons_button_active" : ""

  const isCurrentlyOnHomepage = pathname === "/"

  const leftHandSideStyle = "header_name fade_in"
  const rightHandSideStyle = "header_buttons_button fade_in"

  return (
    // TODO: make these iterable from data.ts
    <header>
      <nav>
        <div className={`${rubik.className} header`}>
          {isCurrentlyOnHomepage ? (
            <Image
              width={38}
              height={38}
              className={`${leftHandSideStyle} grayscale`}
              src={BrunoLucaIcon}
              alt="BrunoLuca icon"
              draggable="false"
            />
          ) : (
            <Link
              href="/"
              className={`${leftHandSideStyle} ${isActive("/")} `}
              draggable={false}
            >
              LUCA BRUNO
            </Link>
          )}
          <div className="header_buttons">
            <Link
              href="about"
              className={`${rightHandSideStyle} ${isActive("/about")}`}
              draggable={false}
            >
              About
            </Link>
            <Link
              href="projects"
              className={`${rightHandSideStyle} ${isActive("/projects")}`}
              draggable={false}
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
