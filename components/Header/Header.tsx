"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import "@/styles/Header.css"
import { rubik } from "@/app/fonts"

const Header = () => {
  const pathname = usePathname()

  const isActive = (currentPathname: string) => (currentPathname === pathname ? "header_buttons_button_active" : "")

  return (
    <header>
      <nav>
        <div className={`${rubik.className} header`}>
          <Link href="/" className={`header_name ${isActive("/")}`}>
            LUCA BRUNO
          </Link>
          <div className="header_buttons">
            <Link href="/about" className={`header_buttons_button ${isActive("/about")}`}>
              About
            </Link>
            <Link href="/projects" className={`header_buttons_button ${isActive("/projects")}`}>
              Projects
            </Link>
            <Link href="/contact" className={`header_buttons_button ${isActive("/contact")}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
