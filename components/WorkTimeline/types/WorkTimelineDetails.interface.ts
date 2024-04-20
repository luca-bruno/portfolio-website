import WORK_HISTORY_LIST from "@/components/About/data"

interface WorkTimelineDetailsTypes {
    isWorkSelected: boolean,
    resetSelectedWork: () => void,
    activeWorkDetails?: typeof WORK_HISTORY_LIST[0]
}

export default WorkTimelineDetailsTypes