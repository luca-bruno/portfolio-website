interface ProjectStackType {
  prettyLabel: string
  src: string
}

interface ProjectTypes {
  name: string
  description: string
  detailedDescription: string
  repo?: string
  hosted?: string
  images: string[]
  id: string
  stack?: ProjectStackType[]
}

export default ProjectTypes
