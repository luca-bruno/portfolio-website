import moment from "moment"

const formatMonthToMMM = (month: number) => moment().month(month - 1).format("MMM")

export default formatMonthToMMM