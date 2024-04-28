import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "@/styles/SlideShow/SlideShowViewToggle.css"
import SlideShowViewToggleTypes from "./types/SlideShowViewToggle.interface"

const SlideShowViewToggle: React.FC<SlideShowViewToggleTypes> = ({
  setIsMobileView,
  isMobileView,
  setCurrentSlide
}) => {
  const x = () => {
    setIsMobileView(prev => !prev)
    setCurrentSlide(0)
  }

  return (
    // TODO: make a generic toggle - props are onChange method, checked cond, icon1 and icon2
    <div className="sidepanel_slideshow_view_toggle">
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={isMobileView}
        onChange={x}
      />
      <label className="darkmode-toggle-label" htmlFor="darkmode-toggle">
        <FontAwesomeIcon icon={faDesktop} className="desktop" />
        <FontAwesomeIcon icon={faMobile} className="mobile" />
      </label>
    </div>
  )
}

export default SlideShowViewToggle
