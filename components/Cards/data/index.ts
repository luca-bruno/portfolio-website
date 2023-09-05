import ProjectTypes from "@/app/api/[types]/ProjectTypes.interface"
import trivya from "@/public/assets/trivya1.png"

const arr: ProjectTypes[] = [
  {
    name: "Trivya",
    description: "Cross-device webapp quiz solution",
    detailedDescription: "",
    repo: "https://github.com/luca-bruno/trivya/",
    hosted: "https://trivya-alpha.netlify.app/",
    images: [trivya.src],
    id: "1"
  },
  {
    name: "Portfolio",
    description: "Personal domain (this very site)",
    detailedDescription: "",
    repo: "https://github.com/luca-bruno/portfolio-website",
    hosted: "/",
    images: [""],
    id: "2"
  },
  {
    name: "Diversify",
    description: "MCAST ICA Festival 2021 advertising",
    detailedDescription: "",
    images: [
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify1.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify2.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify3.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify4.png"
    ],
    stack: ["elixir", "typescript", "reduxToolkit", "rtkQuery", "tailwindcss"],
    id: "3"
  },
  {
    name: "Prospectus",
    description: "MCAST 2019/20 Prospectus proposal",
    detailedDescription: "",
    repo: "https://www.github.com/prospectus",
    images: [""],
    id: "4"
  }
]

const defaultImage =
  "https://highlandcanine.com/wp-content/uploads/2021/01/vizsla-running.jpg"

export { arr, defaultImage }
