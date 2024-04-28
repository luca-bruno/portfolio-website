import ProjectTypes from "@/app/api/[types]/ProjectTypes.interface"

interface SlideShowTypes {
  images?: ProjectTypes["images"]
  imagesMobile?: ProjectTypes["imagesMobile"]
}

interface SlideShowViewToggleTypes {
  setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>
  isMobileView: boolean
}

export type { SlideShowTypes, SlideShowViewToggleTypes }
