import { ProjectTypes } from "@/components/TechStack/types/ProjectTypes.interface"

interface SlideShowTypes {
  images?: ProjectTypes["images"]
  imagesMobile?: ProjectTypes["imagesMobile"]
  fullscreenMode: boolean
  setFullscreenMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default SlideShowTypes