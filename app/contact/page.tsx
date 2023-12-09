import React from "react"
import "@/styles/Contact.css"
import { inter } from "@/app/fonts"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BehanceIcon from "@/public/assets/icons/behance-icon.svg"
import LinkedInIcon from "@/public/assets/icons/linkedin-icon.svg"
import GitHubIcon from "@/public/assets/icons/github-icon.svg"
import BrunoLucaIcon from "@/public/assets/icons/brunoluca-icon.svg"
import Image from "next/image"


const page = () => {
    const x = ""

    return (
        <div className="contact">
            <div style={{ padding: "3rem", textAlign: "center" }}>
                <div style={{ height: "100%" }}>
                    <div className="contact_details_title slide_fade_from_top">
                        You may reach me on
                    </div>

                    <div className="contact_details_line form_container slide_fade_from_left">
                        <a href="https://www.linkedin.com/in/bruno-luca/" rel="noreferrer" target="_blank" tabIndex={-1}>
                            <button type="button" className="contact_details_line_card">
                                <Image
                                    draggable="false"
                                    alt="LinkedIn icon"
                                    width={60}
                                    height={60}
                                    className=""
                                    src={LinkedInIcon}
                                />
                                <p>
                                    <span className="contact_details_text">LinkedIn</span>
                                    <span className="contact_details_subtext">.com/in/brunoluca</span>
                                </p>
                            </button>
                        </a>
                        <a href="https://github.com/luca-bruno" rel="noreferrer" target="_blank" tabIndex={-1}>
                            <button type="button" className="contact_details_line_card">
                                <Image
                                    draggable="false"
                                    alt="GitHub icon"
                                    width={60}
                                    height={60}
                                    className=""
                                    src={GitHubIcon}
                                />
                                <p>
                                    <span className="contact_details_text">GitHub</span>
                                    <span className="contact_details_subtext">.com/luca-bruno</span>
                                </p>
                            </button>
                        </a>
                        <a href="https://www.behance.net/bronni" rel="noreferrer" target="_blank" tabIndex={-1}>
                            <button type="button" className="contact_details_line_card">
                                <Image
                                    draggable="false"
                                    alt="Behance icon"
                                    width={60}
                                    height={60}
                                    color="white"
                                    className=""
                                    src={BehanceIcon}
                                />
                                <p>
                                    <span className="contact_details_text">Behance</span>
                                    <span className="contact_details_subtext">.net/bronni</span>
                                </p>
                            </button>
                        </a>
                        <a href="mailto:contact@brunoluca.com" rel="noreferrer" target="_blank" tabIndex={-1}>
                            <button type="button" className="contact_details_line_card" style={{ margin: 0 }}>
                                <Image
                                    draggable="false"
                                    alt="Gmail icon"
                                    width={60}
                                    height={60}
                                    className=""
                                    src={BrunoLucaIcon}
                                />
                                <p>
                                    <span className="contact_details_text">contact@brunoluca.com</span>
                                </p>
                            </button>
                        </a>
                    </div>


                </div>
            </div>
            <div className="vertical fade_in" />
            <form style={{ padding: "3rem" }}>
                <div className="contact_details_title slide_fade_from_top" style={{ textAlign: "center" }}>
                    Shoot me a message
                </div>
                <div className="form_container slide_fade_from_right">
                    <div className="contact_form">
                        <div>
                            <label>Full name</label><span className="required">*</span>
                            <input placeholder="e.g. John Doe" type="text" name="full_name" id="full_name" required />
                        </div>

                        <div>
                            <label>Contact number</label>
                            <input placeholder="e.g. +999 9999 9999" type="text" name="contact_number" id="contact_number" />
                        </div>
                    </div>
                    <div className="contact_form">
                        <div>
                            <label>Email address</label><span className="required">*</span>
                            <input placeholder="e.g. john.doe@gmail.com" type="email" name="email_address" id="email_address" required />
                        </div>
                    </div>
                    <div className="contact_form">
                        <div>
                            <label>Message</label><span className="required">*</span>
                            <textarea className={inter.className} placeholder="Let's work together!" name="message" id="message" required />
                        </div>
                    </div>
                    {/* TODO: render once required fields have value */}
                    <button type="button" className="contact_form_submit slide_fade_from_right">
                        Submit
                        <FontAwesomeIcon
                            className="contact_form_submit_icon"
                            icon={faChevronRight}
                        />
                    </button>
                </div>
            </form >

        </div>
    )
}

export default page
