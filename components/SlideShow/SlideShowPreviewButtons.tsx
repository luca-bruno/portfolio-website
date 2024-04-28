import React from "react"
import {
  faUpRightAndDownLeftFromCenter,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons"
import "@/styles/SlideShow/SlideShowPreviewButtons.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SlideShowPreviewButtonsTypes from "./types/SlideShowPreviewButtons.interface"

const SlideShowPreviewButtons: React.FC<SlideShowPreviewButtonsTypes> = ({
  setCurrentSlide,
  setFullscreenMode,
  setIsArrowHovered,
  isArrowHovered,
  isOnFirstPage,
  isOnLastPage
}) => (
  <>
    <div
      className={`${isArrowHovered
        ? "overlay_center_container_hidden"
        : "overlay_center_container"
        }`}
    >
      <button
        type="button"
        className="overlay_center"
        onClick={() => setFullscreenMode(true)}
      >
        <div>
          <div className="icon icon_expand">
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
          </div>
        </div>
      </button>
    </div>

    <div>
      <button
        type="button"
        className={`overlay_left_container overlay overlay_left ${isArrowHovered ? "overlay_hovered" : ""
          }`}
        disabled={isOnFirstPage}
        onMouseEnter={() => setIsArrowHovered(true)}
        onMouseLeave={() => setIsArrowHovered(false)}
        onClick={() => setCurrentSlide((prev) => prev - 1)}
      >
        <div>
          <div
            className={`icon icon_arrow ${isOnFirstPage ? "overlay_disabled" : ""
              }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </div>
      </button>
    </div>

    <div className="">
      <button
        type="button"
        className={`overlay_right_container overlay overlay_right ${isArrowHovered ? "overlay_hovered" : ""
          }`}
        disabled={isOnLastPage}
        onMouseEnter={() => setIsArrowHovered(true)}
        onMouseLeave={() => setIsArrowHovered(false)}
        onClick={() => setCurrentSlide((prev) => prev + 1)}
      >
        <div>
          <div
            className={`icon icon_arrow ${isOnLastPage ? "overlay_disabled" : ""
              }`}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </button>
    </div>
  </>
)
export default SlideShowPreviewButtons
