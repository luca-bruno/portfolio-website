import { ProjectTypes } from "@/components/TechStack/types/ProjectTypes.interface"
import SlideShowPreviewTypes from "./SlideShowPreview.interface"

interface SlideShowPageDotsTypes {
  isMobileView: boolean
  images: ProjectTypes["images"]
  imagesMobile: ProjectTypes["imagesMobile"]
  currentSlide: SlideShowPreviewTypes["currentSlide"]
  setCurrentSlide: SlideShowPreviewTypes["setCurrentSlide"]
}

export default SlideShowPageDotsTypes
