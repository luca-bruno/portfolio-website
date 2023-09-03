import data from "./data"

const useStackIcon = (icon: string) => {
  const mappedIcon = data[icon]

  return {
    mappedIcon
  }
}

export default useStackIcon
