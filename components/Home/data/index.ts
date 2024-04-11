import {
  LinkedInIconSvgComponent,
  BehanceIconSvgComponent,
  GitHubIconSvgComponent,
  BrunoLucaIconSvgComponent
} from "@/components/SvgComponent"

const CONTACT_LINK_LIST = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bruno-luca/",
    icon: LinkedInIconSvgComponent
  },
  {
    name: "GitHub",
    link: "https://github.com/luca-bruno",
    icon: GitHubIconSvgComponent
  },
  {
    name: "Behance",
    link: "https://www.behance.net/bronni",
    icon: BehanceIconSvgComponent
  },
  {
    name: "BrunoLuca.com",
    link: "mailto:contact@brunoluca.com",
    icon: BrunoLucaIconSvgComponent
  }
]

export default CONTACT_LINK_LIST