import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "@/styles/SlideShowFullscreen.css"
import SlideShowFullscreenTypes from "./types/SlideShowFullscreen.interface"

const SlideShowFullscreen: React.FC<SlideShowFullscreenTypes> = ({
  setFullscreenMode
}) => (
  <div className="fullscreen">
    <iframe title="project live" src="https://trivya-alpha.netlify.app/" />

    <button
      type="button"
      className="iframe_close_button"
      onClick={() => {
        setFullscreenMode(false)
      }}
    >
      <FontAwesomeIcon className="iframe_close_button_icon" icon={faX} />
      Exit demo
    </button>
  </div>
)

export default SlideShowFullscreen
