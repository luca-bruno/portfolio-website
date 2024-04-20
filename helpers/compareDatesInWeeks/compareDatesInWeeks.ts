import moment from "moment"

const compareDatesInWeeks = (dateString: string) => 
    moment().diff(moment(dateString.replace(/\//g, "-"), "DD-MM-YYYY"), "weeks")

export default compareDatesInWeeks