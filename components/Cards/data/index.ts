/* eslint-disable max-len */
import trivya from "@/public/assets/projects/trivya/trivya-1.png"
import prospectus1 from "@/public/assets/projects/prospectus/prospectus-mobile-1.png"
import prospectus2 from "@/public/assets/projects/prospectus/prospectus-mobile-2.png"
import prospectus3 from "@/public/assets/projects/prospectus/prospectus-mobile-3.png"
import prospectus4 from "@/public/assets/projects/prospectus/prospectus-mobile-4.png"
import prospectus5 from "@/public/assets/projects/prospectus/prospectus-mobile-5.png"
import prospectus6 from "@/public/assets/projects/prospectus/prospectus-mobile-6.png"
import prospectus7 from "@/public/assets/projects/prospectus/prospectus-mobile-7.png"
import prospectus8 from "@/public/assets/projects/prospectus/prospectus-mobile-8.png"
import prospectus9 from "@/public/assets/projects/prospectus/prospectus-mobile-9.png"
import prospectus10 from "@/public/assets/projects/prospectus/prospectus-mobile-10.png"
import prospectus11 from "@/public/assets/projects/prospectus/prospectus-mobile-11.png"
import prospectus12 from "@/public/assets/projects/prospectus/prospectus-mobile-12.png"
import prospectus13 from "@/public/assets/projects/prospectus/prospectus-mobile-13.png"
import portfolio1 from "@/public/assets/projects/portfolio/portfolio-1.png"
import { ProjectTypes } from "@/components/TechStack/types/ProjectTypes.interface"

const PROJECT_LIST: ProjectTypes[] = [
  {
    name: "Trivya",
    description: "Cross-device webapp quiz solution",
    detailedDescription:
      "The website for Diversify, the 2021 MCAST ICA Festival. The site was collaboratively created in co-operation with fellow students and lecturers. The page served as a face for advertising the festival, as well as its offsite crowdfunding campaign hosted on ZAAR.",
    repoName: "trivya",
    repoUrl: "https://github.com/luca-bruno/trivya/",
    repoOwner: "luca-bruno",
    hosted: "https://trivya-alpha.netlify.app/",
    images: [trivya.src],
    imagesMobile: [],
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
    detailedDescription:
      "The website for Diversify, the 2021 MCAST ICA Festival. The site was collaboratively created in co-operation with fellow students and lecturers. The page served as a face for advertising the festival, as well as its offsite crowdfunding campaign hosted on ZAAR.",
    repoName: "portfolio-website",
    repoUrl: "https://github.com/luca-bruno/portfolio-website",
    repoOwner: "luca-bruno",
    hosted: "/",
    images: [portfolio1.src],
    imagesMobile: [],
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
    detailedDescription:
      "The website for Diversify, the 2021 MCAST ICA Festival. The site was collaboratively created in co-operation with fellow students and lecturers. The page served as a face for advertising the festival, as well as its offsite crowdfunding campaign hosted on ZAAR.",
    images: [
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify1.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify2.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify3.png",
      "https://i0.wp.com/brunoluca.com/wp-content/uploads/2021/06/diversify4.png"
    ],
    imagesMobile: [],
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
    detailedDescription:
      "A mobile app proposal for the MCAST Prospectus for 2019/20. The app featured a complete list of institutes, courses, student testimonials and past students' works, and was intended to cater to both prospective and already-enrolled MCAST students.",
    repoName: "ProspectusApp",
    repoUrl: "https://www.github.com/luca-bruno/ProspectusApp",
    repoOwner: "luca-bruno",
    images: [],
    imagesMobile: [
      prospectus1.src,
      prospectus2.src,
      prospectus3.src,
      prospectus4.src,
      prospectus5.src,
      prospectus6.src,
      prospectus7.src,
      prospectus8.src,
      prospectus9.src,
      prospectus10.src,
      prospectus11.src,
      prospectus12.src,
      prospectus13.src
    ],
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

export { PROJECT_LIST, defaultImage }
