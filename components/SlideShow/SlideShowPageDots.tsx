import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@/styles/SlideShowPageDots.css"
import React from "react"
import SlideShowPageDotsTypes from "./types/SlideShowPageDots.interface"

const SlideShowPageDots: React.FC<SlideShowPageDotsTypes> = ({
  isMobileView,
  images,
  imagesMobile,
  currentSlide,
  setCurrentSlide
}) => {
  const hasMoreThanOneImage = images && images.length > 1
  const hasMoreThanOneMobileImage = imagesMobile && imagesMobile.length > 1

  const isOnCurrentSlide = (slide: number) => slide === currentSlide

  return (
    <div className="sidepanel_slideshow_buttons">
      {!isMobileView ? (
        hasMoreThanOneImage ? (
          images?.map((image, index) => (
            <FontAwesomeIcon
              key={image}
              className={`sidepanel_slideshow_button_icon 
                    ${isOnCurrentSlide(index)
                  ? "sidepanel_slideshow_button_icon_active"
                  : ""
                }
                    ${!hasMoreThanOneImage
                  ? "sidepanel_slideshow_button_icon_hide"
                  : ""
                }
                    `}
              icon={faCircle}
              onClick={() => setCurrentSlide(index)}
            />
          ))
        ) : (
          <FontAwesomeIcon
            className="sidepanel_slideshow_button_icon sidepanel_slideshow_button_icon_hide"
            icon={faCircle}
          />
        )
      ) : hasMoreThanOneMobileImage ? (
        imagesMobile?.map((image, index) => (
          <FontAwesomeIcon
            key={image}
            className={`sidepanel_slideshow_button_icon 
                    ${isOnCurrentSlide(index)
                ? "sidepanel_slideshow_button_icon_active"
                : "sidepanel_slideshow_button_icon"
              }
                    ${!hasMoreThanOneMobileImage
                ? "sidepanel_slideshow_button_icon_hide"
                : "sidepanel_slideshow_button_icon"
              }
                    `}
            icon={faCircle}
            onClick={() => setCurrentSlide(index)}
          />
        ))
      ) : (
        <>div</>
      )}
    </div>
  )
}

export default SlideShowPageDots
