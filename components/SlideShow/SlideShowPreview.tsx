import React, { useState } from "react"
import Image from "next/image"
import { trivya1mobile } from "@/assets"
import "@/styles/SlideShowPreview.css"
import { faUpRightAndDownLeftFromCenter, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { defaultImage } from "../Cards/data"
import SlideShowPreviewTypes from "./types/SlideShowPreview.interface"

const SlideShowPreview: React.FC<SlideShowPreviewTypes> = ({ currentSlide, setCurrentSlide, setFullscreenMode, isMobileView, images }) => {
    const [isArrowHovered, setIsArrowHovered] = useState(false)

    const isOnFirstPage = currentSlide === 0
    const isOnLastPage = currentSlide === (images && images.length - 1)

    return (
        <div className={`slide_show_container ${isMobileView ? "mobile" : ""}`}>
            {/* TODO: <SlideShowPreview /> */}
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

            {/* TODO: <SlideShowPreviewButtons (?) /> */}


            <div className={`${isArrowHovered ? "overlay_center_container_hidden" : "overlay_center_container"}`}>
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

            <div className="">
                <button
                    type="button"
                    className={`overlay_left_container overlay overlay_left ${isArrowHovered ? "overlay_hovered" : ""}`}
                    disabled={isOnFirstPage}
                    onMouseEnter={() => setIsArrowHovered(true)}
                    onMouseLeave={() => setIsArrowHovered(false)}
                    onClick={() => setCurrentSlide(prev => prev - 1)}
                >
                    <div>
                        <div className={`icon icon_arrow ${isOnFirstPage ? "overlay_disabled" : ""}`}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                    </div>
                </button>
            </div>

            <div className="">
                <button
                    type="button"
                    className={`overlay_right_container overlay overlay_right ${isArrowHovered ? "overlay_hovered" : ""}`}
                    disabled={isOnLastPage}
                    onMouseEnter={() => setIsArrowHovered(true)}
                    onMouseLeave={() => setIsArrowHovered(false)}
                    onClick={() => setCurrentSlide(prev => prev + 1)}>
                    <div>
                        <div className={`icon icon_arrow ${isOnLastPage ? "overlay_disabled" : ""}`}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </button>
            </div>

        </div>
    )
}


export default SlideShowPreview