import "./assets/scss/style.css"
import "./index.css"

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import { AppContextProvider } from "./utils/AppContext"

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
)
