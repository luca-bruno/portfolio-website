import React from "react"
import CONTACT_LIST from "./data"
import HomeLinksContactRowTypes from "./types/HomeLinksContactRow.interface"

const HomeLinksContactRow: React.FC<HomeLinksContactRowTypes> = ({
  isContactIconGlowing,
  setIsContactIconGlowing
}) => (
  <div className="contact_row slide_fade_from_left">
    {CONTACT_LIST.map(({ name, link, icon: IconSvgComponent }) => (
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        tabIndex={-1}
        key={name}
        draggable="false"
        onMouseOver={() => setIsContactIconGlowing(false)}
        onFocus={() => setIsContactIconGlowing(false)}
      >
        <button
          aria-label={`Contact me through ${name}`}
          type="button"
          className={`contact_icon ${isContactIconGlowing ? "glow" : ""}`}
        >
          <IconSvgComponent />
        </button>
      </a>
    ))}
  </div>
)

export default HomeLinksContactRow
