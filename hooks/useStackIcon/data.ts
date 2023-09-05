import { elixir, typescript, reduxToolkit, tailwindcss } from "@/public/assets"
import { ImageProps } from "next/image"

const data: { [key: string]: ImageProps } = {
  elixir,
  typescript,
  reduxToolkit,
  rtkQuery: reduxToolkit,
  tailwindcss
}

export default data
