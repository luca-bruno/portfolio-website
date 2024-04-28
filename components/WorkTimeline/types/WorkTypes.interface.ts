import { StaticImageData } from "next/image"

interface WorkDescriptionTypes {
    heading1?: string
    content1?: string
    heading2?: string 
    content2?: string
    heading3?: string
    content3?: string
}

interface WorkStackTypes {
    prettyLabel: string
    src: string
}

interface WorkTypes {
    id: string
    icon: StaticImageData
    text: string
    description: WorkDescriptionTypes
    location: string
    stack: WorkStackTypes[]
    startMonth: number
    startYear: number
    endYear?: number
    endMonth?: number
}

export default WorkTypes