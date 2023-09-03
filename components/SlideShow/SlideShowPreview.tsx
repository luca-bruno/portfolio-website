import React, { useState } from "react"
import Image from "next/image"
import { trivya1mobile } from "@/assets"
import "@/styles/SlideShowPreview.css"
import { defaultImage } from "../Cards/data"
import SlideShowPreviewTypes from "./types/SlideShowPreview.interface"
import SlideShowPreviewButtons from "./SlideShowPreviewButtons"

const SlideShowPreview: React.FC<SlideShowPreviewTypes> = ({ currentSlide, setCurrentSlide, setFullscreenMode, isMobileView, images }) => {
    const [isArrowHovered, setIsArrowHovered] = useState(false)

    const isOnFirstPage = currentSlide === 0
    const isOnLastPage = currentSlide === (images && images.length - 1)
    const hasMoreThanOneImage = images && (images.length > 1)

    return (
        <div className={`slide_show_container ${isMobileView ? "mobile" : ""}`}>
            {!isMobileView ?
                <Image
                    draggable="false"
                    alt="card"
                    width={1920}
                    height={1080}
                    className={`slide_show_container ${currentSlide ? "active" : ""} ${isArrowHovered ? "slide_no_hover" : "slide_hover"}`}
                    src={images?.[currentSlide] || defaultImage} />
                :
                <Image draggable="false" alt="card" width={425} height={844} src={trivya1mobile} />
            }

            {hasMoreThanOneImage &&
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
            }
        </div>
    )
}


export default SlideShowPreview