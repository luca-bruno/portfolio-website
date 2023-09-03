interface SlideShowPreviewTypes {
    currentSlide: number
    setCurrentSlide: (arg0: number) => void
    setFullscreenMode: (arg0: boolean) => void
    isMobileView: boolean
    images: string[]
}

export default SlideShowPreviewTypes