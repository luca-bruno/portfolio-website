import React, { useState } from "react"
import "@/styles/SlideShow.css"
import { SlideShowTypes } from "./types/SlideShow.interface"
import SlideShowViewToggle from "./SlideShowViewToggle"
import SlideShowPreview from "./SlideShowPreview"
import SlideShowPageDots from "./SlideShowPageDots"
import SlideShowFullscreen from "./SlideShowFullscreen"

const SlideShow: React.FC<SlideShowTypes> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fullscreenMode, setFullscreenMode] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)

  return (
    <>
      <SlideShowPreview {...{ currentSlide, setCurrentSlide, setFullscreenMode, isMobileView, images }} />

      <SlideShowPageDots {...{ images, currentSlide, setCurrentSlide }} />
      <SlideShowViewToggle {...{ isMobileView, setIsMobileView }} />

      {fullscreenMode && <SlideShowFullscreen {...{ setFullscreenMode }} />}
    </>
  )
}

export default SlideShow
