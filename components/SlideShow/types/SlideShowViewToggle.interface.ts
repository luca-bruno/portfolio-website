import SlideShowPreviewTypes from "./SlideShowPreview.interface"

interface SlideShowViewToggleTypes {
    setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>
    isMobileView: SlideShowPreviewTypes["isMobileView"]
    setCurrentSlide: SlideShowPreviewTypes["setCurrentSlide"]
}

export default SlideShowViewToggleTypes
