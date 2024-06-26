import Header from "@/components/Header/Header"
import "./globals.css"
import type { Metadata } from "next"
import { inter } from "./fonts"

export const metadata: Metadata = {
  title: "Luca Bruno | Full Stack Developer",
  description:
    "Portfolio for a passionate full stack software developer 👨‍💻. Based in Malta 🇲🇹."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
