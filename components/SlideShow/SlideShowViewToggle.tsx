/* eslint-disable jsx-a11y/label-has-associated-control */
import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@/styles/SlideShow.css"
import React from "react"
import { SlideShowViewToggleTypes } from "./types/SlideShow.interface"

const SlideShowViewToggle: React.FC<SlideShowViewToggleTypes> = ({ setIsMobileView, isMobileView }) => (
    // TODO: make a generic toggle - props are onChange method, checked cond, icon1 and icon2
    <div className="sidepanel_slideshow_view_toggle">
        <input type="checkbox" id="darkmode-toggle" checked={isMobileView} onChange={() => setIsMobileView(prev => !prev)} />
        <label htmlFor="darkmode-toggle">
            <FontAwesomeIcon icon={faDesktop} className="desktop" />
            <FontAwesomeIcon icon={faMobile} className="mobile" />
        </label>
    </div>
)

export default SlideShowViewToggle
