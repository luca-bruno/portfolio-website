import SlideShowPreviewTypes from "./SlideShowPreview.interface"

interface SlideShowPreviewButtonsTypes {
    setCurrentSlide: SlideShowPreviewTypes["setCurrentSlide"]
    setFullscreenMode: SlideShowPreviewTypes["setFullscreenMode"]
    setIsArrowHovered: (arg0: boolean) => void
    isArrowHovered: boolean
    isOnFirstPage: boolean
    isOnLastPage: boolean
}

export default SlideShowPreviewButtonsTypes
