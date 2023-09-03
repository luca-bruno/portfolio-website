import { faCircle, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import "@/styles/SlideShow.css"
import { SlideShowTypes } from "./types/SlideShow.interface"
import SlideShowViewToggle from "./SlideShowViewToggle"
import SlideShowPreview from "./SlideShowPreview"

const SlideShow: React.FC<SlideShowTypes> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fullscreenMode, setFullscreenMode] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)

  const hasMoreThanOneImage = images && images.length <= 1
  const isOnCurrentSlide = (slide: number) => slide === currentSlide

  return (
    <>
      <SlideShowPreview {...{ currentSlide, setCurrentSlide, setFullscreenMode, isMobileView, images }} />

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
