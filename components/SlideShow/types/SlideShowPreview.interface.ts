import { SlideShowTypes, SlideShowViewToggleTypes } from "./SlideShow.interface"

interface SlideShowPreviewTypes {
  currentSlide: number
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
  setFullscreenMode: (arg0: boolean) => void
  isMobileView: SlideShowViewToggleTypes["isMobileView"]
  images: SlideShowTypes["images"]
  imagesMobile: SlideShowTypes["imagesMobile"]
}

export default SlideShowPreviewTypes
