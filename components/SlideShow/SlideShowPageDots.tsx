import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import SlideShowPageDotsTypes from "./types/SlideShowPageDots.interface"

const SlideShowPageDots: React.FC<SlideShowPageDotsTypes> = ({ images, currentSlide, setCurrentSlide }) => {
    const hasMoreThanOneImage = images && images.length <= 1
    const isOnCurrentSlide = (slide: number) => slide === currentSlide

    return (
        <div className="sidepanel_slideshow_buttons">
            {images?.map((image, index) => (
                <FontAwesomeIcon
                    key={image}
                    className={`sidepanel_slideshow_button_icon 
                    ${isOnCurrentSlide(index) ? "sidepanel_slideshow_button_icon_active" : ""}
                    ${hasMoreThanOneImage ? "sidepanel_slideshow_button_icon_hide" : ""}
                    `}
                    icon={faCircle}
                    onClick={() => setCurrentSlide(index)}
                />
            ))}
        </div>
    )
}

export default SlideShowPageDots