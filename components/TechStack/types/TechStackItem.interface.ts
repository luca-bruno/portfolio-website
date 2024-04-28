import { ProjectStackTypes } from "@/components/TechStack/types/ProjectTypes.interface"
import TechStackTypes from "./TechStack.interface"

interface TechStackItemTypes {
    prettyLabel: ProjectStackTypes["prettyLabel"]
    index: number
    location: TechStackTypes["location"]
    src: ProjectStackTypes["src"]
}

export default TechStackItemTypes
