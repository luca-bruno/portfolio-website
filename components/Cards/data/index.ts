import ProjectTypes from "@/app/api/[types]/ProjectTypes.interface"
import trivya from "@/public/assets/trivya1.png"

const arr: ProjectTypes[] = [
  {
    name: "Trivya",
    description: "Cross-device webapp quiz solution",
    // eslint-disable-next-line max-len
    detailedDescription: "The website for Diversify, the 2021 MCAST ICA Festival. The site was collaboratively created in co-operation with fellow students and lecturers. The page served as a face for advertising the festival, as well as its offsite crowdfunding campaign hosted on ZAAR.",
    repo: "https://github.com/luca-bruno/trivya/",
    hosted: "https://trivya-alpha.netlify.app/",
    images: [trivya.src],
    stack: [
      { prettyLabel: "React", src: "react" },
      { prettyLabel: "TypeScript", src: "typescript" },
      { prettyLabel: "Redux Toolkit", src: "reduxToolkit" },
      { prettyLabel: "RTK Query", src: "rtkQuery" },
      { prettyLabel: "React Router", src: "reactRouter" },
      { prettyLabel: "TailwindCSS", src: "tailwindcss" },
      { prettyLabel: "TailwindUI", src: "tailwindui" },
      { prettyLabel: "Swiper", src: "swiper" },
      { prettyLabel: "ZOD", src: "zod" },
      { prettyLabel: "Jest", src: "jest" },
      { prettyLabel: "Testing Library", src: "testingLibrary" },
      { prettyLabel: "Cypress", src: "cypress" },
      { prettyLabel: "Storybook", src: "storybook" },
      { prettyLabel: "ESLint", src: "eslint" },
      { prettyLabel: "Vite", src: "vite" },
      { prettyLabel: "Yarn", src: "yarn" },
      { prettyLabel: "Node.js", src: "nodejs" },
      { prettyLabel: "Express.js", src: "expressjs" },
      { prettyLabel: "Sequelize", src: "sequelize" },
      { prettyLabel: "JWT", src: "jwt" },
      { prettyLabel: "PostgreSQL", src: "postgresql" },
      { prettyLabel: "Husky", src: "husky" }
    ],
    id: "1"
  },
  {
    name: "Portfolio",
    description: "Personal domain (this very site)",
    // eslint-disable-next-line max-len
    detailedDescription: "The website for Diversify, the 2021 MCAST ICA Festival. The site was collaboratively created in co-operation with fellow students and lecturers. The page served as a face for advertising the festival, as well as its offsite crowdfunding campaign hosted on ZAAR.",
    repo: "https://github.com/luca-bruno/portfolio-website",
    hosted: "/",
    images: [""],
    stack: [
      { prettyLabel: "Next.js", src: "nextjs" },
      { prettyLabel: "Sass", src: "sass" },
      { prettyLabel: "TypeScript", src: "typescript" },
      { prettyLabel: "ESLint", src: "eslint" },
      { prettyLabel: "Vite", src: "vite" },
      { prettyLabel: "Yarn", src: "yarn" },
      { prettyLabel: "Husky", src: "husky" }
    ],
    id: "2"
  },
  {
    name: "Diversify",
    description: "MCAST ICA Festival 2021 advertising",
    hosted: "http://diversify.icafestival.com/",
    // eslint-disable-next-line max-len
    detailedDescription: "The website for Diversify, the 2021 MCAST ICA Festival. The site was collaboratively created in co-operation with fellow students and lecturers. The page served as a face for advertising the festival, as well as its offsite crowdfunding campaign hosted on ZAAR.",
    images: [
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify1.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify2.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify3.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify4.png"
    ],
    stack: [
      { prettyLabel: "PHP", src: "php" },
      { prettyLabel: "CSS", src: "css" },
      { prettyLabel: "WordPress", src: "wordpress" },
      { prettyLabel: "WPBakery", src: "wpbakery" },
      { prettyLabel: "Visual Composer", src: "visualComposer" },
      { prettyLabel: "WooCommerce", src: "woocommerce" }
    ],
    id: "3"
  },
  {
    name: "Prospectus",
    description: "MCAST 2019/20 Prospectus proposal",
    // eslint-disable-next-line max-len
    detailedDescription: "A mobile app proposal for the MCAST Prospectus for 2019/20. The app featured a complete list of institutes, courses, student testimonials and past students' works, and was intended to cater to both prospective and already-enrolled MCAST students.",
    repo: "https://www.github.com/prospectus",
    images: [""],
    stack: [
      { prettyLabel: "Angular", src: "angular" },
      { prettyLabel: "TypeScript", src: "typescript" },
      { prettyLabel: "Sass", src: "sass" },
      { prettyLabel: "Ionic", src: "ionic" }
    ],
    id: "4"
  }
]

const defaultImage =
  "https://highlandcanine.com/wp-content/uploads/2021/01/vizsla-running.jpg"

export { arr, defaultImage }
