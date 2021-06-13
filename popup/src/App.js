import React from "react"
import { Scrollbars } from "react-custom-scrollbars"

import { NavBar, Loader, ErrorPage, ListCard } from "./components"

import { useAppContext } from "./utils/AppContext"

const App = () => {
  const { trends, theme, trendsLocation, isLoading, error } = useAppContext()

  if (isLoading) {
    return <Loader theme={theme} />
  }
  if (error) {
    return <ErrorPage />
  }
  return (
    <div
      className={
        theme === "light"
          ? "bg-white py-1 px-1 overflow-hidden app"
          : "bg-black py-1 px-1 overflow-hidden app"
      }
    >
      <NavBar />
      <Scrollbars autoHeight autoHeightMin={608}>
        <div
          className={
            theme === "light"
              ? "list-group rounded-2xl bg-gray-200"
              : "list-group rounded-2xl list-group-bg-darkmode"
          }
        >
          <div className="flex items-center justify-between px-3 py-2 select-none">
            <h1
              className={
                theme === "light"
                  ? "font-bold text-black"
                  : "font-bold text-white"
              }
            >
              {trendsLocation} trends
            </h1>
          </div>
          <hr />
          {trends.map((trend, i) => (
            <ListCard key={i} trend={trend} i={i} />
          ))}
          <div className="px-3 py-5" />
        </div>
      </Scrollbars>
    </div>
  )
}

export default App
