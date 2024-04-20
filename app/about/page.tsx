import "@/styles/SidePanel.css"
import "@/styles/Home.css"
import "@/styles/WorkTimeline.css"
import React from "react"
import WorkTimeline from "@/components/WorkTimeline/WorkTimeline"

const page = () => (
  <main className="work_timeline">
    <WorkTimeline />
  </main>
)

export default page
