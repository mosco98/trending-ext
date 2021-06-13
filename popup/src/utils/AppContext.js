import React, { createContext, useContext, useState, useEffect } from "react"
import storage from "./storage"
import axios from "axios"
const SERVER = "https://trending-ext-server.herokuapp.com"

const AppContext = createContext()

export function useAppContext() {
  return useContext(AppContext)
}

export function AppContextProvider({ children }) {
  const [trends, setTrends] = useState([])
  const [trendsLocation, setTrendsLocation] = useState(null)
  const [theme, setTheme] = useState("light")
  const [isLoading, updateIsLoading] = useState(true)
  const [error, updateError] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    if (navigator.onLine) {
      getDefaultLocationTrends()
    } else {
      updateError(true)
      updateIsLoading(false)
    }

    // Check user theme preference
    storage.getItem("theme").then((theme) => {
      if (theme === null) {
        setTheme("light")
      } else {
        setTheme(theme)
      }
    })
  }, [])

  function getDefaultLocationTrends() {
    updateError(false)
    setErrMsg("")

    if (!navigator.onLine) {
      updateError(true)
      updateIsLoading(false)
      setErrMsg("Network error")
      return
    }
    navigator.geolocation.getCurrentPosition(async (location, err) => {
      if (location) {
        const lat = location.coords.latitude
        const long = location.coords.longitude

        try {
          const response = await axios.post(`${SERVER}/`, { lat, long })
          const { data } = response

          if (data.success) {
            setTrends(data.data[0].trends)
            setTrendsLocation(data.location)
            updateIsLoading(false)
          }
          if (data.error) {
            updateError(true)
            updateIsLoading(false)
            setErrMsg(data.msg)
          }
        } catch (err) {
          updateError(true)
          updateIsLoading(false)
          setErrMsg("Network error")
        }
      }

      if (err) {
        updateError(true)
        updateIsLoading(false)
        setErrMsg(`Couldn't detect location`)
      }
    })
  }

  function setThemeHandler(theme) {
    setTheme(theme)
    storage.setItem("theme", theme)
  }

  function refreshHandler() {
    updateError(false)
    updateIsLoading(true)
    setErrMsg("")

    getDefaultLocationTrends()
  }

  const value = {
    trends,
    trendsLocation,
    theme,
    isLoading,
    error,
    errMsg,
    setThemeHandler,
    refreshHandler
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
