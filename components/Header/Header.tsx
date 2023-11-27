"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import "@/styles/Header.css"
import { rubik } from "@/app/fonts"

const Header = () => {
  const pathname = usePathname()

  const isActive = (currentPathname: string) =>
    currentPathname === pathname ? "header_buttons_button_active" : ""

  const isCurrentlyOnHomepage = pathname === "/"

  return (
    <header>
      <nav>
        <div className={`${rubik.className} header`}>
          {!isCurrentlyOnHomepage ?
            <Link
              href="/"
              className={`header_name fade_in ${isActive("/")} `}
              draggable={false}
            >
              LUCA BRUNO
            </Link>
            :
            <div />
          }
          <div className="header_buttons">
            <Link
              href="about"
              className={`header_buttons_button fade_in ${isActive("/about")}`}
              draggable={false}
            >
              About
            </Link>
            <Link
              href="projects"
              className={`header_buttons_button fade_in ${isActive("/projects")}`}
              draggable={false}
            >
              Projects
            </Link>
            <Link
              href="contact"
              className={`header_buttons_button fade_in ${isActive("/contact")}`}
              draggable={false}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header >
  )
}

export default Header
