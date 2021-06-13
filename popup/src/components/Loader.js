import React from "react"
import { useAppContext } from "../utils/AppContext"

const Loader = () => {
  const { theme } = useAppContext()
  return (
    <div
      className={
        theme === "light"
          ? "h-screen flex items-center justify-center fixed loader-ctn bg-white"
          : "h-screen flex items-center justify-center fixed loader-ctn bg-black"
      }
    >
      <div className="flex flex-col items-center justify-center">
        <div className="loader"></div>
      </div>
    </div>
  )
}

export default Loader
