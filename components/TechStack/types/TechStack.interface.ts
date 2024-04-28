import { ProjectStackType } from "../../../app/api/[types]/ProjectTypes.interface"


interface TechStackTypes {
    title?: string
    stack: ProjectStackType[]
    location?: string
}

export default TechStackTypes