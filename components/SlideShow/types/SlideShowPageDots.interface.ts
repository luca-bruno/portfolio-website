import { SlideShowTypes } from "./SlideShow.interface"
import SlideShowPreviewTypes from "./SlideShowPreview.interface"

interface SlideShowPageDotsTypes {
    images: SlideShowTypes["images"]
    currentSlide: SlideShowPreviewTypes["currentSlide"]
    setCurrentSlide: SlideShowPreviewTypes["setCurrentSlide"]
}

export default SlideShowPageDotsTypes
