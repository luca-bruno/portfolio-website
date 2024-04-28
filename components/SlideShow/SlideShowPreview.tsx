import React, { useState } from "react"
import Image from "next/image"
import { defaultImage } from "../Cards/data"
import SlideShowPreviewTypes from "./types/SlideShowPreview.interface"
import SlideShowPreviewButtons from "./SlideShowPreviewButtons"
import "@/styles/SlideShow/SlideShowPreview.css"

const SlideShowPreview: React.FC<SlideShowPreviewTypes> = ({
  currentSlide,
  setCurrentSlide,
  setFullscreenMode,
  isMobileView,
  images,
  imagesMobile
}) => {
  const [isArrowHovered, setIsArrowHovered] = useState(false)

  const isOnFirstPage = currentSlide === 0
  const isOnLastPage =
    currentSlide === (images && images.length - 1) ||
    currentSlide === (imagesMobile && imagesMobile.length - 1)

  const hasMoreThanOneImage = images && images.length > 1
  const hasMoreThanOneMobileImage = imagesMobile && imagesMobile.length > 1

  return (
    <div className="slide_show_container">
      {!isMobileView ? (
        <Image
          draggable="false"
          id="slide_show_image"
          alt="card"
          width={1920}
          height={1080}
          className={`slide_show_container ${isArrowHovered ? "slide_no_hover" : "slide_hover"
            }`}
          src={images?.[currentSlide] || defaultImage}
        />
      ) : (
        <Image
          draggable="false"
          id="slide_show_image"
          alt="card"
          width={400}
          height={800}
          className={`slide_show_container ${isArrowHovered ? "slide_no_hover" : "slide_hover"
            }`}
          src={imagesMobile?.[currentSlide] || defaultImage}
        />
      )}

      {(hasMoreThanOneImage || hasMoreThanOneMobileImage) && (
        <SlideShowPreviewButtons
          {...{
            setCurrentSlide,
            setFullscreenMode,
            setIsArrowHovered,
            isArrowHovered,
            isOnFirstPage,
            isOnLastPage
          }}
        />
      )}
    </div>
  )
}

export default SlideShowPreview
