import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "@/styles/SlideShowFullscreen.css"
import "@/styles/SidePanel.css"
import SlideShowFullscreenTypes from "./types/SlideShowFullscreen.interface"

const SlideShowFullscreen: React.FC<SlideShowFullscreenTypes> = ({ setFullscreenMode }) => (
    <div className="fullscreen">
        <button type="button" className="sidepanel_close_button" onClick={() => { setFullscreenMode(false) }}>
            <FontAwesomeIcon className="sidepanel_close_button_icon" icon={faX} />
        </button>
        <iframe title="project live" src="https://trivya-alpha.netlify.app/" />
    </div>
)

export default SlideShowFullscreen