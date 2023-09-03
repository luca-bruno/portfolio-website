import { faCircle, faUpRightAndDownLeftFromCenter, faChevronRight, faX, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import "@/styles/SlideShow.css"
import Image from "next/image"
import { trivya1mobile } from "@/assets"
import { SlideShowTypes } from "./types/SlideShow.interface"
import SlideShowViewToggle from "./SlideShowViewToggle"
import { defaultImage } from "../Cards/data"

const SlideShow: React.FC<SlideShowTypes> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fullscreenMode, setFullscreenMode] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isArrowHovered, setIsArrowHovered] = useState(false)

  const hasMoreThanOneImage = images && images.length <= 1
  const isOnFirstPage = currentSlide === 0
  const isOnLastPage = currentSlide === (images && images.length - 1)
  const isOnCurrentSlide = (slide: number) => slide === currentSlide

  return (
    <>
      <div className={`sidepanel_slideshow ${isMobileView ? "mobile" : ""}`}>
        {/* TODO: <SlideShowPreview /> */}
        {!isMobileView ?
          <Image
            draggable="false"
            alt="card"
            width={1920}
            height={1080}
            className={`sidepanel_slideshow ${currentSlide ? "active" : ""} ${isArrowHovered ? "slide_no_hover" : "slide_hover"}`}
            src={images?.[currentSlide] || defaultImage} />
          : <Image draggable="false" alt="card" width={425} height={844} src={trivya1mobile} />
        }

        {/* TODO: <SlideShowPreviewButtons (?) /> */}
        <button
          type="button"
          className={`overlay overlay_left ${isArrowHovered ? "overlay_hovered" : ""}`}
          disabled={isOnFirstPage}
          onMouseEnter={() => setIsArrowHovered(true)}
          onMouseLeave={() => setIsArrowHovered(false)}
          onClick={() => setCurrentSlide(prev => prev - 1)}
        >
          <div className="overlay-content">
            <div className={`icon icon_arrow ${isOnFirstPage ? "overlay_disabled" : ""}`}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </div>
        </button>

        <button
          type="button"
          className={`${isArrowHovered ? "overlay_hidden" : "overlay overlay_center"}`}
          onClick={() => setFullscreenMode(true)}
        >
          <div className={`${isArrowHovered ? "overlay_hidden" : "overlay-content"}`}>
            <div className="icon icon_expand">
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </div>
          </div>
        </button>

        <button
          type="button"
          className={`overlay overlay_right ${isArrowHovered ? "overlay_hovered" : ""}`}
          disabled={isOnLastPage}
          onMouseEnter={() => setIsArrowHovered(true)}
          onMouseLeave={() => setIsArrowHovered(false)}
          onClick={() => setCurrentSlide(prev => prev + 1)}>
          <div className="overlay-content">
            <div className={`icon icon_arrow ${isOnLastPage ? "overlay_disabled" : ""}`}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </button>

      </div>

      <div>
        {/* TODO: <SlideShowPageDots (?) /> */}
        <div className="sidepanel_slideshow_buttons">
          {images?.map((image, index) => (
            <FontAwesomeIcon
              key={image}
              className={`sidepanel_slideshow_button_icon 
                ${isOnCurrentSlide(index) ? "sidepanel_slideshow_button_icon_active" : ""}
                ${hasMoreThanOneImage ? "sidepanel_slideshow_button_icon_hide" : ""}
            `}
              icon={faCircle}
              onClick={() => setCurrentSlide(index)} />
          ))}
        </div>

        <SlideShowViewToggle {...{ isMobileView, setIsMobileView }} />

      </div>

      {fullscreenMode &&
        // TODO: <SlideShowFullscreen />
        <div className="fullscreen">
          <button type="button" className="sidepanel_close_button" onClick={e => { setFullscreenMode(false) }}>
            <FontAwesomeIcon className="sidepanel_close_button_icon" icon={faX} />
          </button>
          <iframe title="project live" src="https://trivya-alpha.netlify.app/" />
        </div>
      }

    </>
  )
}

export default SlideShow
