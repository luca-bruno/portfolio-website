export interface ProjectStackType {
  prettyLabel: string
  src: string
}

export interface ProjectTypes {
  name: string
  description: string
  detailedDescription: string
  repoName?: string
  repoUrl?: string
  repoOwner?: string
  hosted?: string
  images?: string[]
  imagesMobile?: string[]
  id: string
  stack?: ProjectStackType[]
}