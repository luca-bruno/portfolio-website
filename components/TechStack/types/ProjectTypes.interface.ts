interface ProjectStackTypes {
  prettyLabel: string
  src: string
}

interface ProjectTypes {
  id: string
  name: string
  description: string
  detailedDescription: string
  repoName?: string
  repoUrl?: string
  repoOwner?: string
  hosted?: string
  images?: string[]
  imagesMobile?: string[]
  stack?: ProjectStackTypes[]
}

export type { ProjectTypes, ProjectStackTypes }
