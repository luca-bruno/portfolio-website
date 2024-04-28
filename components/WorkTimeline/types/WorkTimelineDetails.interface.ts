import WorkTypes from "./WorkTypes.interface"

interface WorkTimelineDetailsTypes {
    isWorkSelected: boolean,
    resetSelectedWork: () => void,
    activeWorkDetails?: WorkTypes
}

export default WorkTimelineDetailsTypes