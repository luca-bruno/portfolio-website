import React, { useEffect, useState } from "react"
import { SlideShowTypes } from "./types/SlideShow.interface"
import SlideShowViewToggle from "./SlideShowViewToggle"
import SlideShowPreview from "./SlideShowPreview"
import SlideShowPageDots from "./SlideShowPageDots"
import SlideShowFullscreen from "./SlideShowFullscreen"

const SlideShow: React.FC<SlideShowTypes> = ({ images, imagesMobile, fullscreenMode, setFullscreenMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobileView, setIsMobileView] = useState(
    images?.length === 0 && imagesMobile?.length > 0
  )

  useEffect(() => {
    setCurrentSlide(0)
    if (images?.length === 0 && imagesMobile?.length > 0) setIsMobileView(true)
    else setIsMobileView(false)
  }, [images?.length, imagesMobile?.length])

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center", margin: "0" }}> */}
      <SlideShowPreview
        {...{
          currentSlide,
          setCurrentSlide,
          setFullscreenMode,
          isMobileView,
          images,
          imagesMobile
        }}
      />
      {/* </div> */}

      <SlideShowPageDots
        {...{
          isMobileView,
          images,
          imagesMobile,
          currentSlide,
          setCurrentSlide
        }}
      />
      {images.length !== 0 && imagesMobile.length !== 0 && (
        <SlideShowViewToggle
          {...{ isMobileView, setIsMobileView, setCurrentSlide }}
        />
      )}

      {fullscreenMode && <SlideShowFullscreen {...{ setFullscreenMode }} />}
    </>
  )
}

export default SlideShow
