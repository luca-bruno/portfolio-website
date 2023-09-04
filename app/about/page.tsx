import "@/styles/WorkTimeline.css"
import Image from "next/image"
import Mcast from "@/assets/MCAST Institute for the Creative Arts folder icon.png"
import Wyzer from "@/assets/Wyzer folder icon.png"
import React from "react"
import moment from "moment"

const page = () => {
  const arr = [
    {
      id: 1,
      icon: Wyzer,
      text: "Full-stack developer",
      location: "Wyzer",
      startMonth: 1,
      startYear: 2022
    },
    {
      id: 2,
      icon: Mcast,
      text: "Bachelor of Arts (Honours) in Interactive Media",
      location: "MCAST",
      startMonth: 9,
      startYear: 2018,
      endMonth: 6,
      endYear: 2021
    }
  ]

  const formatMonth = (month: number) => moment().month(month - 1).format("MMM")


  const profilePicture =
    "https://media.licdn.com/dms/image/D4E03AQF8FbuxFLECLg/profile-displayphoto-shrink_800_800/0/1691088974819?e=1699488000&v=beta&t=8L2HMWuLfRixPT5sMxZaypZboFwvb_D5-4R4elj7ktg"

  return (
    <div className="work_timeline">
      <div className="timeline">
        {/* <WorkTimeline /> */}
        {arr.map(({ id, startMonth, startYear, endMonth, endYear, text, icon, location }, index) => (
          <React.Fragment key={id}>
            <div className="timeline_step">
              <div className="timeline_dot">
                <Image
                  draggable="false"
                  alt="personal"
                  width={300}
                  height={300}
                  className="dot"
                  src={icon}
                />
              </div>

              <div className="timeline_info" style={{ flexDirection: "column" }}>
                <div style={{ paddingBottom: "1rem", fontSize: "large" }}>
                  {`${formatMonth(startMonth)} ${startYear}`} - {`${endMonth ? formatMonth(endMonth) : ""} ${endYear || ""}`}
                </div>
                <div style={{ paddingBottom: "1rem", fontSize: "xx-large" }}>{text}</div>
                <div style={{ fontSize: "x-large" }}>{location}</div>
              </div>
            </div>

            {arr.length !== index + 1 &&
              <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                <div className="timeline_separator" />
              </div>
            }
          </React.Fragment>
        ))}

      </div>

      <div>
        <div className="profile">
          <Image
            draggable="false"
            alt="personal"
            width={300}
            height={300}
            className="profile_picture"
            src={profilePicture}
          />
          <div>Longer description from CV here.</div>
        </div>
        <br />
        <div className="work_timeline_description">timeline card</div>
      </div>
    </div>
  )
}

export default page
